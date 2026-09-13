import { ethers } from "ethers";

const rpc = process.env.SEPOLIA_RPC_URL;
const pk = process.env.SEPOLIA_PRIVATE_KEY;

if (!rpc || !pk) {
  console.error("FALTA SECRET: SEPOLIA_RPC_URL ou PRIVATE_KEY");
  process.exit(1);
}

console.log("Conectando à rede Sepolia...");
const provider = new ethers.JsonRpcProvider(rpc);
const block = await provider.getBlockNumber();
console.log(`Bloco Atual: ${block}`);
console.log("[OK] Conexao Sepolia validada! Disjuntor: VERDE - CRC32_94B8 - 150Q");
