/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlUpgradeable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1155MetadataURIUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURIUpgradeable__factory>;
    getContractFactory(
      name: "IERC1155ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC1155Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Upgradeable__factory>;
    getContractFactory(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "AccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IAccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "ERC20Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Pausable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC20PresetMinterPauser",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PresetMinterPauser__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "BaseDoubleDice",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseDoubleDice__factory>;
    getContractFactory(
      name: "ChallengeableCreatorOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChallengeableCreatorOracle__factory>;
    getContractFactory(
      name: "CreationQuotas",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CreationQuotas__factory>;
    getContractFactory(
      name: "DoubleDice",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DoubleDice__factory>;
    getContractFactory(
      name: "DummyERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DummyERC20__factory>;
    getContractFactory(
      name: "DummyUSDCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DummyUSDCoin__factory>;
    getContractFactory(
      name: "DummyWrappedBTC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DummyWrappedBTC__factory>;
    getContractFactory(
      name: "SimpleOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleOracle__factory>;
    getContractFactory(
      name: "ForkedERC1155UpgradeableV452",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ForkedERC1155UpgradeableV452__factory>;
    getContractFactory(
      name: "GraphHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GraphHelper__factory>;
    getContractFactory(
      name: "IDoubleDice",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDoubleDice__factory>;
    getContractFactory(
      name: "ResolutionStateWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ResolutionStateWrapper__factory>;
    getContractFactory(
      name: "ResultUpdateActionWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ResultUpdateActionWrapper__factory>;
    getContractFactory(
      name: "VirtualFloorStateWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VirtualFloorStateWrapper__factory>;
    getContractFactory(
      name: "VirtualFloorResolutionTypeWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VirtualFloorResolutionTypeWrapper__factory>;
    getContractFactory(
      name: "FixedPointTypesMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FixedPointTypesMock__factory>;
    getContractFactory(
      name: "VirtualFloorMetadataValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VirtualFloorMetadataValidator__factory>;
    getContractFactory(
      name: "ProxyAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyAdmin__factory>;
    getContractFactory(
      name: "TransparentUpgradeableProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransparentUpgradeableProxy__factory>;

    getContractAt(
      name: "AccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeable>;
    getContractAt(
      name: "IAccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlUpgradeable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "IERC1155MetadataURIUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURIUpgradeable>;
    getContractAt(
      name: "IERC1155ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155ReceiverUpgradeable>;
    getContractAt(
      name: "IERC1155Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Upgradeable>;
    getContractAt(
      name: "IERC20MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "AccessControlEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlEnumerable>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IAccessControlEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlEnumerable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "ERC20Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Pausable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC20PresetMinterPauser",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20PresetMinterPauser>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "BaseDoubleDice",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseDoubleDice>;
    getContractAt(
      name: "ChallengeableCreatorOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChallengeableCreatorOracle>;
    getContractAt(
      name: "CreationQuotas",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CreationQuotas>;
    getContractAt(
      name: "DoubleDice",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DoubleDice>;
    getContractAt(
      name: "DummyERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DummyERC20>;
    getContractAt(
      name: "DummyUSDCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DummyUSDCoin>;
    getContractAt(
      name: "DummyWrappedBTC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DummyWrappedBTC>;
    getContractAt(
      name: "SimpleOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleOracle>;
    getContractAt(
      name: "ForkedERC1155UpgradeableV452",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ForkedERC1155UpgradeableV452>;
    getContractAt(
      name: "GraphHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GraphHelper>;
    getContractAt(
      name: "IDoubleDice",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDoubleDice>;
    getContractAt(
      name: "ResolutionStateWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ResolutionStateWrapper>;
    getContractAt(
      name: "ResultUpdateActionWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ResultUpdateActionWrapper>;
    getContractAt(
      name: "VirtualFloorStateWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VirtualFloorStateWrapper>;
    getContractAt(
      name: "VirtualFloorResolutionTypeWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VirtualFloorResolutionTypeWrapper>;
    getContractAt(
      name: "FixedPointTypesMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FixedPointTypesMock>;
    getContractAt(
      name: "VirtualFloorMetadataValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VirtualFloorMetadataValidator>;
    getContractAt(
      name: "ProxyAdmin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyAdmin>;
    getContractAt(
      name: "TransparentUpgradeableProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TransparentUpgradeableProxy>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}