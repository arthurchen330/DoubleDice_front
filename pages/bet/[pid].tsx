// @ts-nocheck
// Above is for until when the data given here is not coming from backend
// Next
import { useQuery } from "@apollo/client"
import DetailedInfo from "components/betPage/DetailedInfo"
import Header from "components/betPage/Header"
import Sources from "components/betPage/Sources"
// Components
import BetPageLayout from "components/layouts/BetPageLayout"
import type {
  GetServerSideProps,
  GetServerSidePropsContext
} from "next"
import Head from "next/head"
import { ReactElement } from "react"
// Utils
import styled from "styled-components"
import { toHexForGraphProtocol } from "utils/helpers"
import { VIRTUAL_FLOORS } from "../../graphql/queries"

const SCMain = styled.section`
  width: 100%;
`;

const SCMainContainer = styled.main`
  position: relative;
  width: 100%;
  z-index: 10;
  max-width: 95rem;
  min-width: 50rem;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

interface IProps {
  id: string;
}

const BetPage = (props: IProps): ReactElement => {
  const { data } = useQuery(VIRTUAL_FLOORS, {
    variables: {
      vfId: props.id,
    },
    pollInterval: 1000,
  });

  const vf = data?.virtualFloors.length > 0 && data.virtualFloors[0]

  return (
    <BetPageLayout vf={vf}>
      <Head>
        <title>Bet</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <SCMain data-name="main-bet-page">
        <SCMainContainer>
          <Header
            opponents={vf.opponents}
            title={vf.title}
            description={vf.description}
          />
          <DetailedInfo virtualFloor={vf} />
          <Sources sources={vf.resultSources} />
        </SCMainContainer>
      </SCMain>
    </BetPageLayout>
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
      id
    },
  };
};

export default BetPage;