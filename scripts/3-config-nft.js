import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x059eDD38334c2d445c27BBCCF85963D45365D3db", "edition-drop");
    //INFURA Contract address 0x059eDD38334c2d445c27BBCCF85963D45365D3db
    //QuickNode Contract address 0x96E203AA10ed8e79BD52FB97b32F685Db8d3c45A
    await editionDrop.createBatch([
      {
        name: "Lightening Sword",
        description: "This NFT will give you access to UniqueDAO!",
        image: readFileSync("scripts/assets/dream_TradingCard (5)_edited.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();