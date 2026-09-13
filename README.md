# Laercio - CEABAS Core

**Version:** 7.8.5  
**Status:** DISJUNTOR VERDE ✅

## Overview

Core module for Sepolia network validation and blockchain interaction using ethers.js v6.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment secrets:
- `SEPOLIA_RPC_URL` - RPC endpoint for Sepolia testnet
- `SEPOLIA_PRIVATE_KEY` - Private key for transactions

3. Run validator:
```bash
node src/sepolia-validator.js
```

## Expected Output

```
Conectando à rede Sepolia...
Bloco Atual: [BLOCK_NUMBER]
[OK] Conexao Sepolia validada! Disjuntor: VERDE - CRC32_94B8 - 150Q
```

Exit code: **0** (SUCCESS)
