const hre = require("hardhat");

const main = async () => {
  const listingFee = ethers.parseEther("0.01");

  const marketplace = await ethers.deployContract("DigiArtMarketplace", [listingFee]);

  await marketplace.waitForDeployment();

  console.log(
    `Marketplace with listing fee of ${ethers.formatEther(
      listingFee
    )} ETH deployed to ${marketplace.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// Hardhat address - 0x5FbDB2315678afecb367f032d93F642f64180aa3
// Arbitrum Sepolia address - 0x4ACF94F3961D9B021920338DD593f19956e7abbA