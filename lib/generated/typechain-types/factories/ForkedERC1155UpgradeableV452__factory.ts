/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ForkedERC1155UpgradeableV452,
  ForkedERC1155UpgradeableV452Interface,
} from "../ForkedERC1155UpgradeableV452";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506113b1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100775760003560e01c8062fdd58e1461007c57806301ffc9a7146100a25780630e89341c146100c55780632eb2c2d6146100e55780634e1273f4146100fa578063a22cb4651461011a578063e985e9c51461012d578063f242432a14610169575b600080fd5b61008f61008a366004610bba565b61017c565b6040519081526020015b60405180910390f35b6100b56100b0366004610bfd565b610215565b6040519015158152602001610099565b6100d86100d3366004610c21565b610267565b6040516100999190610c87565b6100f86100f3366004610de3565b6102fb565b005b61010d610108366004610e8c565b610392565b6040516100999190610f91565b6100f8610128366004610fa4565b6104bb565b6100b561013b366004610fe0565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b6100f8610177366004611013565b6104ca565b60006001600160a01b0383166101ed5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526065602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061024657506001600160e01b031982166303a24d0760e21b145b8061026157506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606067805461027690611077565b80601f01602080910402602001604051908101604052809291908181526020018280546102a290611077565b80156102ef5780601f106102c4576101008083540402835291602001916102ef565b820191906000526020600020905b8154815290600101906020018083116102d257829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103175750610317853361013b565b61037e5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016101e4565b61038b8585858585610551565b5050505050565b606081518351146103f75760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101e4565b600083516001600160401b0381111561041257610412610c9a565b60405190808252806020026020018201604052801561043b578160200160208202803683370190505b50905060005b84518110156104b35761048685828151811061045f5761045f6110b2565b6020026020010151858381518110610479576104796110b2565b602002602001015161017c565b828281518110610498576104986110b2565b60209081029190910101526104ac816110de565b9050610441565b509392505050565b6104c6338383610731565b5050565b6001600160a01b0385163314806104e657506104e6853361013b565b6105445760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016101e4565b61038b8585858585610812565b81518351146105b35760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101e4565b6001600160a01b0384166105d95760405162461bcd60e51b81526004016101e4906110f9565b3360005b84518110156106c35760008582815181106105fa576105fa6110b2565b602002602001015190506000858381518110610618576106186110b2565b60209081029190910181015160008481526065835260408082206001600160a01b038e1683529093529190912054909150818110156106695760405162461bcd60e51b81526004016101e49061113e565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906106a8908490611188565b92505081905550505050806106bc906110de565b90506105dd565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516107139291906111a0565b60405180910390a461072981878787878761093c565b505050505050565b816001600160a01b0316836001600160a01b031614156107a55760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101e4565b6001600160a01b03838116600081815260666020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166108385760405162461bcd60e51b81526004016101e4906110f9565b3361085181878761084888610a98565b61038b88610a98565b60008481526065602090815260408083206001600160a01b038a168452909152902054838110156108945760405162461bcd60e51b81526004016101e49061113e565b60008581526065602090815260408083206001600160a01b038b81168552925280832087850390559088168252812080548692906108d3908490611188565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610933828888888888610ae3565b50505050505050565b6001600160a01b0384163b156107295760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061098090899089908890889088906004016111ce565b6020604051808303816000875af19250505080156109bb575060408051601f3d908101601f191682019092526109b89181019061122c565b60015b610a68576109c7611249565b806308c379a01415610a0157506109dc611265565b806109e75750610a03565b8060405162461bcd60e51b81526004016101e49190610c87565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101e4565b6001600160e01b0319811663bc197c8160e01b146109335760405162461bcd60e51b81526004016101e4906112ee565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610ad257610ad26110b2565b602090810291909101015292915050565b6001600160a01b0384163b156107295760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610b279089908990889088908890600401611336565b6020604051808303816000875af1925050508015610b62575060408051601f3d908101601f19168201909252610b5f9181019061122c565b60015b610b6e576109c7611249565b6001600160e01b0319811663f23a6e6160e01b146109335760405162461bcd60e51b81526004016101e4906112ee565b80356001600160a01b0381168114610bb557600080fd5b919050565b60008060408385031215610bcd57600080fd5b610bd683610b9e565b946020939093013593505050565b6001600160e01b031981168114610bfa57600080fd5b50565b600060208284031215610c0f57600080fd5b8135610c1a81610be4565b9392505050565b600060208284031215610c3357600080fd5b5035919050565b6000815180845260005b81811015610c6057602081850181015186830182015201610c44565b81811115610c72576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610c1a6020830184610c3a565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b0381118282101715610cd557610cd5610c9a565b6040525050565b60006001600160401b03821115610cf557610cf5610c9a565b5060051b60200190565b600082601f830112610d1057600080fd5b81356020610d1d82610cdc565b604051610d2a8282610cb0565b83815260059390931b8501820192828101915086841115610d4a57600080fd5b8286015b84811015610d655780358352918301918301610d4e565b509695505050505050565b600082601f830112610d8157600080fd5b81356001600160401b03811115610d9a57610d9a610c9a565b604051610db1601f8301601f191660200182610cb0565b818152846020838601011115610dc657600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610dfb57600080fd5b610e0486610b9e565b9450610e1260208701610b9e565b935060408601356001600160401b0380821115610e2e57600080fd5b610e3a89838a01610cff565b94506060880135915080821115610e5057600080fd5b610e5c89838a01610cff565b93506080880135915080821115610e7257600080fd5b50610e7f88828901610d70565b9150509295509295909350565b60008060408385031215610e9f57600080fd5b82356001600160401b0380821115610eb657600080fd5b818501915085601f830112610eca57600080fd5b81356020610ed782610cdc565b604051610ee48282610cb0565b83815260059390931b8501820192828101915089841115610f0457600080fd5b948201945b83861015610f2957610f1a86610b9e565b82529482019490820190610f09565b96505086013592505080821115610f3f57600080fd5b50610f4c85828601610cff565b9150509250929050565b600081518084526020808501945080840160005b83811015610f8657815187529582019590820190600101610f6a565b509495945050505050565b602081526000610c1a6020830184610f56565b60008060408385031215610fb757600080fd5b610fc083610b9e565b915060208301358015158114610fd557600080fd5b809150509250929050565b60008060408385031215610ff357600080fd5b610ffc83610b9e565b915061100a60208401610b9e565b90509250929050565b600080600080600060a0868803121561102b57600080fd5b61103486610b9e565b945061104260208701610b9e565b9350604086013592506060860135915060808601356001600160401b0381111561106b57600080fd5b610e7f88828901610d70565b600181811c9082168061108b57607f821691505b602082108114156110ac57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156110f2576110f26110c8565b5060010190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b6000821982111561119b5761119b6110c8565b500190565b6040815260006111b36040830185610f56565b82810360208401526111c58185610f56565b95945050505050565b6001600160a01b0386811682528516602082015260a0604082018190526000906111fa90830186610f56565b828103606084015261120c8186610f56565b905082810360808401526112208185610c3a565b98975050505050505050565b60006020828403121561123e57600080fd5b8151610c1a81610be4565b600060033d11156112625760046000803e5060005160e01c5b90565b600060443d10156112735790565b6040516003193d81016004833e81513d6001600160401b0381602484011181841117156112a257505050505090565b82850191508151818111156112ba5750505050505090565b843d87010160208285010111156112d45750505050505090565b6112e360208286010187610cb0565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061137090830184610c3a565b97965050505050505056fea2646970667358221220c58f795cdd941e27f81087abe0cc11abc66650d7e1ce6f48b6c8f1f7fadf233464736f6c634300080c0033";

type ForkedERC1155UpgradeableV452ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ForkedERC1155UpgradeableV452ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ForkedERC1155UpgradeableV452__factory extends ContractFactory {
  constructor(...args: ForkedERC1155UpgradeableV452ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ForkedERC1155UpgradeableV452";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ForkedERC1155UpgradeableV452> {
    return super.deploy(
      overrides || {}
    ) as Promise<ForkedERC1155UpgradeableV452>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ForkedERC1155UpgradeableV452 {
    return super.attach(address) as ForkedERC1155UpgradeableV452;
  }
  connect(signer: Signer): ForkedERC1155UpgradeableV452__factory {
    return super.connect(signer) as ForkedERC1155UpgradeableV452__factory;
  }
  static readonly contractName: "ForkedERC1155UpgradeableV452";
  public readonly contractName: "ForkedERC1155UpgradeableV452";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ForkedERC1155UpgradeableV452Interface {
    return new utils.Interface(_abi) as ForkedERC1155UpgradeableV452Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ForkedERC1155UpgradeableV452 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ForkedERC1155UpgradeableV452;
  }
}
