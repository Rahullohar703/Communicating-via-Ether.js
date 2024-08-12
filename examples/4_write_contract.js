const { ethers } = require("ethers");

const INFURA_ID = '';
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const address1 = '';                                                                                                                                                                                        
const address2 = '';

const privateKey1 = '';
const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address='';
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
        const balance = await contract.balanceOf(address1);
        console.log(`reading from address:${address1} and \n balance is ${balance}`)

        const contractWithconnect= await contract.connect(wallet);
        const tx= await contractWithconnect.transfer(address2,balance);
        await tx.wait();
        console.log(tx);

        const balanceOfSender = await contract.balanceOf(address1);
        const balanceOfReceiver = await contract.balanceOf(address2);
        console.log(`balance of Sender:${balanceOfSender}`);
        console.log(`balance of Receiver:${balanceOfReceiver}`);
}

main()