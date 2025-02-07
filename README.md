# Tic Tac Toe Game

This project is a Tic Tac Toe game built with ReactJS, TypeScript, and TailwindCSS. It features sound effects using the `use-sound` library and includes a visually appealing 3D-style UI with winning tile indicators.

## Official Link

[Tic Tac Toe Game](https://tic-tac-toe-fun.vercel.app/)

## Features

- **3x3 Grid:** Classic Tic Tac Toe gameplay.
- **Two Human Players:** Alternating turns between "X" and "O".
- **Sound Effects:** Click, winning, and reset sounds.
- **Winning Highlights:** Winning tiles are highlighted with distinct background colors.
  - Player X winning tiles have a blue background.
  - Player O winning tiles have a yellow background.
- **Score Tracking:** Displays current scores for both players.
- **Reset Functionality:** Restart the game with the reset button.

## Technologies Used

- **React** with **TypeScript**
- **Vite** as the build tool
- **TailwindCSS** for styling
- **use-sound** for handling sound effects

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm**

### Installation

1. Clone the repository: `git clone https://github.com/your-username/tic-tac-toe.git`
2. Navigate to the project directory: `cd tic-tac-toe`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Project Structure

The project is structured as follows:
```
Tic-tac-toe/
├── public/
├── src/
│ ├── components/
│ │ ├── Board.tsx
│ │ ├── Tiles.tsx
│ │ ├── Winner.tsx
│ │ ├── TicTacToe.tsx
│ │ ├── Score.tsx
│ │ └── Button.tsx
│ ├── sound/
│ │ ├── mixkit-video-game-retro-click-237.wav
│ │ ├── mixkit-winning-notification-2018.wav
│ │ └── mixkit-clear-mouse-clicks-2997.wav
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── index.html
├── tailwind.config.js
├── package.json
└── README.md
```
## License

This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.
