# Ethereum Banking DApp

Welcome to the Ethereum Banking DApp, a decentralized application that allows users to manage their funds, deposit to the bank, withdraw, transfer, and provide feedback.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Ethereum Banking DApp provides users with the ability to manage their Ethereum funds securely through decentralized smart contracts. Users can deposit ETH into the bank, withdraw funds, transfer funds to others, and give valuable feedback.
## Features

The Ethereum Banking DApp offers a range of features to simplify managing your Ethereum assets:

### 1. Deposit and Withdraw Funds

Easily deposit Ethereum funds into your bank account and withdraw them whenever you need:

- Deposit ETH: Quickly deposit Ethereum to your bank account using MetaMask.
- Withdraw ETH: Seamlessly withdraw your funds from the bank through MetaMask transactions.

### 2. Secure Transactions

Rest assured knowing that your transactions are secure and executed on the Sepolia Ethereum network. MetaMask integration ensures the highest level of security for your Ethereum assets.

### 3. Transfer ETH to Others

Effortlessly transfer Ethereum to other users' accounts:

- Transfer ETH: Send ETH to friends and associates using their Ethereum addresses.

### 4. Deposit to Others' Accounts

Enable seamless ETH transfers to other users' bank accounts:

- Others Deposits: Deposit ETH to other users' bank accounts using their Ethereum addresses.

### 5. User-Friendly Interface

Experience a user-friendly DApp interface that simplifies the deposit, withdrawal, and transfer processes. Intuitive design ensures a smooth user experience.

### 6. Feedback and Improvement

Contribute to the development of the Ethereum Banking DApp by providing valuable feedback:

- Feedback Section: Share your thoughts, suggestions, and ideas to help us enhance the DApp's functionality.

---

**Note**: The Ethereum Banking DApp is designed for use on the Sepolia Ethereum network. Always verify transaction details and use MetaMask responsibly.

---

Start managing your Ethereum assets with ease using the Ethereum Banking DApp!

## Demo

Check out our live demo [here](https://transcendent-valkyrie-e642bf.netlify.app).

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ethereum-banking-dapp.git
cd ethereum-banking-dapp
```
2. Install dependencies:
  ```bash
yarn install||npm install
```
3. Run the development server:
 ```bash
yarn run dev
```
## Usage

### 1. Access the DApp

Visit the Ethereum Banking DApp at `http://localhost:3000` to get started.

### 2. Connect Your Ethereum Wallet

To begin using the DApp, you need to connect your Ethereum wallet (e.g., MetaMask) to the Sepolia Ethereum network. Follow these steps:

1. Install the MetaMask browser extension.
2. Click on the MetaMask extension icon in your browser to open the wallet.
3. If you don't have an Ethereum account, create one through MetaMask.
4. Connect to the Sepolia Ethereum network:
   - Click on the network dropdown in MetaMask.
   - Select "Custom RPC."
   - Enter the Sepolia Ethereum network details:
     - Network Name: Sepolia Ethereum
     - New RPC URL: [Your Sepolia Ethereum RPC URL]
     - Chain ID: [Your Sepolia Ethereum Chain ID]
     - Symbol: ETH
     - Block Explorer URL: [Your Sepolia Ethereum Block Explorer URL]
   - Click "Save."

5. Click "Connect" on the DApp interface to connect your wallet.

### 3. Deposit ETH

Easily deposit Ethereum funds into your bank account through the DApp:

1. Click on the "Deposit" link in the navigation menu.
2. Enter the amount of ETH you wish to deposit.
3. Confirm the transaction using MetaMask.
4. Wait for the transaction to be confirmed on the Sepolia Ethereum network.

### 4. Withdraw Funds

Withdrawing funds from your bank account is a straightforward process:

1. Click on the "Withdraw" link in the navigation menu.
2. Specify the amount of ETH you want to withdraw.
3. Confirm the withdrawal transaction with MetaMask.
4. Monitor the transaction confirmation on the Sepolia Ethereum network.

### 5. Transfer ETH

Transferring ETH to other users is as simple as:

1. Navigate to the "Transfer" section in the DApp.
2. Enter the recipient's Ethereum address and the amount of ETH.
3. Approve and complete the transaction with MetaMask.
4. Verify the successful transfer on the Sepolia Ethereum blockchain.

### 6. Deposit to Others' Account

You can deposit ETH to other users' bank accounts through the DApp:

1. Navigate to the "Others Deposits" section.
2. Enter the recipient's Ethereum address and the amount of ETH.
3. Confirm the transaction with MetaMask.
4. Monitor the transaction confirmation on the Sepolia Ethereum network.

### 7. View Transaction History

Explore your transaction history using GraphQL to access detailed information about your deposits, withdrawals, and transfers:

1. Navigate to the "Activity Center" section in the DApp.
2. Select the respective activity, such as "Self Deposits," "Self Withdrawals," "Others Deposits," or "Transfers."
3. Browse the list of transactions to view sender, receiver, and amount details.

### 8. Provide Feedback

We value your feedback! Help us improve the DApp by sharing your thoughts:

1. Navigate to the "Feedback" section.
2. Provide your comments, suggestions, and ideas in the provided form.
3. Submit your feedback to contribute to the DApp's development.

---

**Note**: The Ethereum Banking DApp is designed for use on the Sepolia Ethereum network. Always verify transaction details and use MetaMask responsibly. If you encounter any issues or have questions, please refer to the "Contributing" section or reach out to our support team.

---

Thank you for using the Ethereum Banking DApp on Sepolia Ethereum! We hope you find it convenient and user-friendly for managing your Ethereum assets.
## Technologies Used

The Ethereum Banking DApp is built using a combination of modern technologies and tools, making it a robust and user-friendly platform:

- **Next.js**: A powerful React framework for building server-rendered applications and static websites.
- **Tailwind CSS**: A utility-first CSS framework that facilitates rapid and responsive web development.
- **Solidity**: The contract-oriented programming language used to write smart contracts on the Ethereum blockchain.
- **Ethereum**: The decentralized blockchain platform enabling secure and transparent financial transactions.
- **MetaMask**: A popular Ethereum wallet and gateway to blockchain applications, ensuring secure transactions and wallet management.
- **Web3.js**: A JavaScript library for interacting with the Ethereum blockchain, enabling seamless integration of Ethereum features.
- **GraphQL**: A query language and runtime for APIs, offering efficient data fetching and customization.
- **Sepolia Ethereum Network**: A private or test Ethereum network used for secure testing and development purposes.
- **Git**: A version control system for tracking changes in code and collaborating with other developers.
- **GitHub**: A web-based platform for hosting and collaborating on Git repositories.
- **npm**: The Node.js package manager for managing project dependencies and scripts.
- **VS Code**: A popular code editor used for efficient coding and development.

These technologies collectively contribute to the functionality, security, and user experience of the Ethereum Banking DApp.

## Contributing

We welcome contributions from the community that can help improve the Ethereum Banking DApp. Whether you're a developer, designer, or just an enthusiastic user, there are several ways you can contribute:

### Reporting Issues

If you encounter any bugs, glitches, or unexpected behavior while using the DApp, please [open an issue](https://github.com/helloiampratyush/bankDapp-frontEnd/issues) on GitHub. Be sure to provide detailed information about the problem you're facing and steps to reproduce it.

### Feature Requests

Have an idea for a new feature or enhancement? We'd love to hear it! [Open a feature request](https://github.com/helloiampratyush/bankDapp-frontEnd/issues) and describe the feature you'd like to see. Your feedback is valuable in shaping the future of the DApp.

### Pull Requests

If you're a developer and would like to contribute code, you can do so by submitting a pull request. Here's how:

1. Fork the repository: Click the "Fork" button at the top of this repository.
2. Create a new branch: Make your changes in a new branch and provide it with a descriptive name.
3. Make your changes: Write your code and make improvements to the DApp.
4. Test thoroughly: Ensure your changes work as expected and don't introduce new issues.
5. Submit a pull request: Once you're satisfied with your changes, submit a pull request to our repository. Be sure to include a detailed description of your changes and their purpose

### Spread the Word

You can also contribute by spreading the word about the Ethereum Banking DApp. Share the project with your network, colleagues, and friends who might find it useful.

## License

The Ethereum Banking DApp is open-source software released under the [MIT License](LICENSE). This means that you're free to use, modify, and distribute the DApp for any purpose, including commercial use, as long as you include the original copyright notice and disclaimers.

Read the full text of the [MIT License](LICENSE) to understand your rights and responsibilities.

---

**Disclaimer**: The Ethereum Banking DApp is provided as-is and comes with no warranties or guarantees. Use it at your own risk. The creators and contributors to the DApp are not responsible for any damages or liabilities that may arise from its use.

---

Feel free to clone, fork, and contribute to the project. We appreciate your interest and contributions!



---

