const { ethers } = require("ethers");

const INFURA_ID = '';
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const address1 = '';                                                                                                                                                                                        
const address2 = '';

const privateKey1 = '';
const wallet = new ethers.Wallet(privateKey1, provider);


const main = async () => {
    //sender and receiver balance before
    
    const senderBalanceBefore = await provider.getBalance(address1);
    const receiverBalanceBefore = await provider.getBalance(address2);
    console.log(`sender balance bfr:${ethers.utils.formatEther(senderBalanceBefore)}\n
    receiver balance before: ${ethers.utils.formatEther(receiverBalanceBefore)}`);
    
    //send transaction
    const tx = await wallet.sendTransaction(
        {to: address2,
        value: ethers.utils.parseEther('0.0001')}

           
    )
    await tx.wait();
    console.log(tx); 

    //sender and receievr balance after
    const senderBalanceAfter = await provider.getBalance(address1);
    const receiverBalanceAfter = await provider.getBalance(address2);
    console.log(`sender balance after:${ethers.utils.formatEther(senderBalanceAfter)}\n
    receiver balance after: ${ethers.utils.formatEther(receiverBalanceAfter)}`);
}

main()