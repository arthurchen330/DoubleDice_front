// @ts-nocheck
// Above is for until when the data given here is not coming from backend
// Next
import { ReactElement, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";

// Components
import FullLayout from "components/layouts/fullLayOut";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";

// Utils
import { toHexForGraphProtocol, utcTime } from "utils/helpers";
import { VIRTUAL_FLOOR_BETS } from "graphql/queries";

interface IProps {
  id: string;
}
interface ICommitmentData {
  amountCommitted: number;
  timeOfCommitment: number;
  committer: string;
  optionChosen: string;
  paymentTokenSymbol: string;
}

const CommitmentsPage = (props: IProps): ReactElement => {
  const [commitmentData, setCommitmentData] = useState<ICommitmentData[]>([]);

  const { data } = useQuery(VIRTUAL_FLOOR_BETS, {
    variables: {
      vfId: props.id,
    },
  });

  useEffect(() => {
    const vf = data?.virtualFloors.length > 0 && data.virtualFloors[0];
    if (vf && vf.outcomes && vf.paymentToken) {
      vf.outcomes.map((outcome) => {
        if (outcome.outcomeTimeslots[0]) {
          outcome.outcomeTimeslots[0].outcomeTimeslotTransfers.map(
            (outcomeTimeslotTransfer, i) => {
              setCommitmentData((prevState) => [
                ...prevState,
                {
                  amountCommitted: outcomeTimeslotTransfer.amount,
                  timeOfCommitment: outcomeTimeslotTransfer.timestamp,
                  committer: outcomeTimeslotTransfer.to.id,
                  optionChosen: outcome.title,
                  paymentTokenSymbol: vf.paymentToken.symbol,
                },
              ]);
            }
          );
        }
      });
    }
  }, [data]);

  return (
    <FullLayout>
      <Head>
        <title>Commitments</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <table style={{ color: "white", width: "80%" }}>
        <thead style={{ textAlign: "left", fontSize: "2rem" }}>
          <tr style={{ padding: "0 1rem" }}>
            <th>User</th>
            <th>Amount</th>
            <th>Option</th>
            <th>Time of commitment</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "left", fontSize: "1.4rem" }}>
          {commitmentData.map((commitment, index) => (
            <tr key={index} style={{ padding: "0 1rem" }}>
              <td>{commitment.committer}</td>
              <td>{`${commitment.amountCommitted} ${commitment.paymentTokenSymbol}`}</td>
              <td>{commitment.optionChosen}</td>
              <td>
                {utcTime("DD MMM YYYY H:mm", commitment.timeOfCommitment)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </FullLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  k: GetServerSidePropsContext
) => {
  let id = "";
  if (k.query && k.query.pid) {
    id = toHexForGraphProtocol(k.query.pid);
  }
  return {
    props: {
      id,
    },
  };
};

export default CommitmentsPage;
