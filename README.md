# Trading Signals Dashboard

A modern, real-time cryptocurrency trading signals dashboard for Solana tokens. Features a sleek dark/light mode interface with live trading data, whale tracking, momentum analysis, and comprehensive filtering capabilities.

## Features

✨ **Real-Time Signals Dashboard**
- Display 50+ trading signals updated in real-time
- Show buy/sell pressure with visual indicators
- Track whale transactions with whale count
- Momentum indicators (HIGH/LOW)
- Volume tracking in SOL

🎨 **Modern UI/UX**
- Dark mode (default) and light mode themes
- Responsive design for desktop and mobile
- Clean, professional interface
- Smooth transitions and animations
- Intuitive navigation sidebar

📊 **Trading Data Display**
- Token symbol badges
- Buy/Sell signal indicators (green/red)
- Volume metrics (buy volume, sell volume, total volume)
- Transaction history with timestamps
- Buyer/seller ratio
- Trade count statistics

🔍 **Filtering & Sorting**
- Time frame filters: 1H, 4H, 24H
- Sort by: ALL, WHALE, MOMENTUM, BLANK, DBC
- Refresh button for updating signals
- Search functionality

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables for theming

## Getting Started

### Installation

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── SignalsList.tsx
│   └── SignalCard.tsx
├── App.tsx
└── App.css
```

## Features Overview

- **Dark/Light Mode** - Toggle between themes with the moon button
- **Real-time Signals** - 50+ mock trading signals with live data
- **Whale Tracking** - Identify large whale transactions
- **Momentum Analysis** - HIGH/LOW momentum indicators
- **Volume Metrics** - Buy/sell volumes in SOL
- **Filtering** - Filter by timeframe (1H, 4H, 24H) and type (ALL, WHALE, MOMENTUM)
- **Navigation** - SIGNALS, BLANK, WATCHLIST, POSITIONS, SETTINGS tabs

## API Integration

To connect real data, replace the mock data generation in `SignalsList.tsx` with your API calls.

Built with ❤️ using React + TypeScript + Vite
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
