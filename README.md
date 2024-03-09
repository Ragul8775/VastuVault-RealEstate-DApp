# Vastu Vault

Vastu Vault is a decentralized application (dApp) built on the Ethereum blockchain, leveraging smart contracts to facilitate secure and transparent real estate transactions. This project aims to simplify the buying, selling, and verification process of properties by integrating blockchain technology, ensuring trust, immutability, and efficiency.

## Features

- **Property Listing**: Users can list real estate properties as NFTs, providing detailed information and digital proof of ownership.
- **Escrow Service**: Implements an escrow mechanism to securely hold funds until all conditions of the property transaction are met.
- **Roles Management**: Different roles (buyer, seller, lender, inspector) with specific permissions and actions to streamline the real estate transaction process.
- **Verification & Approval**: Facilities for lenders and inspectors to approve transactions, ensuring properties meet agreed standards and financial agreements are satisfied.

## Technology Stack

- **Smart Contracts**: Solidity
- **Blockchain**: Ethereum
- **Frontend**: React.js
- **Ethereum Web Client Library**: Ethers.js
- **Development Environment**: Hardhat

## Project Structure

- `contracts/`: Solidity smart contracts.
- `scripts/`: Deployment and interaction scripts for Hardhat.
- `test/`: Smart contract test files.
- `frontend/`: React frontend application.
- `abis/`: ABIs of the deployed smart contracts.
- `config.json`: Network configuration and deployed contract addresses.

## Setup and Installation

### Prerequisites

- Node.js and npm installed.
- MetaMask or any Ethereum wallet setup in your browser.

### Clone the Repository

```bash
git clone https://github.com/Ragul8775/VastuVault-RealEstate-DApp.git
cd vastu-vault
```

### Install Dependencies

```bash
# Install Hardhat and smart contract dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

### Compile and Deploy Contracts

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network <network-name>
```

Update `frontend/src/config.json` with the deployed contract addresses.

### Start the Frontend Application

```bash
cd frontend
npm start
```

## Smart Contract Usage

Describe how to interact with your smart contracts, including minting NFTs, listing properties, and finalizing transactions.

## Frontend Application

Guide on how to use the dApp, including connecting a wallet, browsing listed properties, and participating in transactions.

## Contributing

Encourage contributions and outline the process for submitting pull requests to your project.

## License

Vastu Vault is MIT licensed.

---
