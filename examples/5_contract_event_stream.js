const { ethers } = require("ethers");

const INFURA_ID = '';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const ERC20_ABI = [
'function name() public view returns (string)',
'function symbol() public view returns (string)',
'function totalSupply() public view returns (uint256)',
'function balanceOf(address _owner) public view returns (uint256 balance)',

'event Transfer(address indexed _from, address indexed _to, uint256 _value)',
];

const address='0x6B175474E89094C44Da98b954EedeAC495271d0F';
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    const block = await provider.getBlockNumber();
   const transferEvents = await contract.queryFilter('Transfer',block -1,block);
   console.log(transferEvents);
}

main()