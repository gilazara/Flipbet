## 🛠️ Prerequisities

Before you begin, ensure that you have Node.js (v14 or higher) installed on your machine.
Clone the project to your local machine using the following command: git clone https://github.com/gilazara/Flipbet?tab=readme-ov-file

Once the repository is cloned, navigate to the project directory and install the required dependencies using npm or yarn: npm install / yarn add.

To make your imports cleaner, you can use the @ alias to reference your src folder. Here's how to configure it.

Now, you're ready to run the application! Start the development server: npm run dev / yarn dev. This will start the local development server, and you can view the app in your browser

# 🎲 Coin Flip Simulator

A fun and educational coin flip betting simulator built with **React**, **TypeScript**, **Zustand**, **React Query**, and **Tailwind CSS**. Designed to demonstrate clean state management, efficient async operations, and UI composition.

---

## ✨ Features

- ⚛️ Built with **React** + **TypeScript**
- 🧠 **Zustand** for global state management (with local storage persistence)
- 🔁 **React Query** to simulate and handle asynchronous coin flip betting
- 🎨 **Tailwind CSS** for clean, responsive UI
- 🧪 **Martingale** strategy toggle
- 🔒 Stop-loss and Stop-win thresholds
- 📜 Bet history filtering (by amount, win/loss)
- 📈 Betting statistics:
  - Win/loss ratio
  - Biggest win/loss
  - Total bets placed
  - Net profit/loss

---

## 🛠️ Tech Stack

| Tool         | Purpose                        |
| ------------ | ------------------------------ |
| React        | UI Framework                   |
| TypeScript   | Type-safe code                 |
| Zustand      | Global state store             |
| React Query  | Async handling & caching       |
| Tailwind CSS | Utility-first CSS framework    |
| Vite         | Lightning-fast dev environment |

---

🔧 Customization & Configuration
User Data
User data, including balance and preferred currency, is stored in localStorage via the useUserStore Zustand store for persistence.

Bet Simulation
Betting logic is encapsulated in the useBetSimulation hook, where bets are placed, the Martingale strategy is applied, and balances are updated.

Bet History & Stats
Bet history and statistics are tracked using Zustand's global state and React Query for efficient data fetching.
