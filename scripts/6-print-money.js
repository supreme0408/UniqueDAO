import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // This is the address of our ERC-20 contract printed out in the step before.
    const token = await sdk.getContract("0xE6501A6Af00F66D26F7A9588f585C021874d3826", "token");
    //INFURA token address: 0xE6501A6Af00F66D26F7A9588f585C021874d3826
    //QuickNode token address: 0x16b4cF3E828E23ecA686bbC1491cAD8EF3649761
    
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1_000_000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$BOLT in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();