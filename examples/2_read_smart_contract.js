const { ethers, Contract } = require("ethers");

const INFURA_ID = '';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];

const address = '' // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);
const main = async () => {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();
    const balanceOf = await contract.balanceOf(address);

    console.log("name:",name);
    console.log(`symbol: ${symbol}`);
    console.log(`totalSupply: ${totalSupply}`);
    console.log(`balanceOf: ${balanceOf}`);

   const balance = await contract.balanceOf('');

    console.log(`ether balnce of address :${address} => ${ethers.utils.formatEther(balance)}`);
}

main()