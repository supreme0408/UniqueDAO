import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenAddress = await sdk.deployer.deployToken({
      name: "UniqueDAO Governance Token",
      symbol: "BOLT",
      // This will be in case we want to sell our token,
      // because we don't, we set it to AddressZero again.
      primary_sale_recipient: AddressZero,
      image: readFileSync("scripts/assets/8d87e90386626af2b54ddf2148bf3335.jpg"),
    });
    console.log(
      "✅ Successfully deployed token contract, address:",
      tokenAddress,
    );
  } catch (error) {
    console.error("failed to deploy token contract", error);
  }
})();