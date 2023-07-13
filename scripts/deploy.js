const hre=require("hardhat");
async function main(){
    const Voting=await hre.ethers.getContractFactory("Voting");
    const voting=await Voting.deploy();
    await voting.deployed();
    console.log("lock and the address is",voting.address);
}
main().catch((error)=>{
    console.error(error);
    process.exitCode=1;
});
