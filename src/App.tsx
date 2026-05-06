import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import SignalsList from './components/SignalsList'

function App() {
  const [activeTab, setActiveTab] = useState('signals')
  const [timeframe, setTimeframe] = useState('1H')
  const [sortBy, setSortBy] = useState('ALL')
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="main-container">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <main className="content">
          {activeTab === 'signals' && (
            <SignalsList 
              timeframe={timeframe}
              onTimeframeChange={setTimeframe}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          )}
          {activeTab === 'blank' && <div className="page-placeholder">BLANK - Coming Soon</div>}
          {activeTab === 'watchlist' && <div className="page-placeholder">WATCHLIST - Coming Soon</div>}
          {activeTab === 'positions' && <div className="page-placeholder">POSITIONS - Coming Soon</div>}
          {activeTab === 'settings' && <div className="page-placeholder">SETTINGS - Coming Soon</div>}
        </main>
      </div>
    </div>
  )
}

export default App
