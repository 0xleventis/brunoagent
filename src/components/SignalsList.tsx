import { useState, useEffect } from 'react'
import './SignalsList.css'
import SignalCard from './SignalCard'

interface Signal {
  id: string
  token: string
  contractAddress: string
  blockchain: 'Solana' | 'Base'
  type: 'BUY' | 'SELL'
  momentum: 'HIGH MOM' | 'LOW MOM'
  whales: number
  buyVolume: number
  sellVolume: number
  buyPressure: number
  volume: number
  trades: number
  buyerRatio: string
  lastTransaction: string
  timeAgo: string
}

interface SignalsListProps {
  timeframe: string
  onTimeframeChange: (timeframe: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

// Mock data generation
const generateMockSignals = (): Signal[] => {
  const solanaTokens = ['DBC', 'SOL', 'USDC', 'JTO', 'ORCA', 'RAY', 'COPE', 'BONK', 'GMT', 'PYTH', 'MANGO', 'SBR']
  const baseTokens = ['BASE', 'DEGEN', 'AERODROME', 'CBETH', 'USDBC', 'STARGATE']
  const allTokens = [...solanaTokens, ...baseTokens]
  
  const generateAddress = () => {
    return 'A' + Math.random().toString(36).substring(2, 44).toUpperCase()
  }

  const signals: Signal[] = []
  
  for (let i = 0; i < 50; i++) {
    const isBase = Math.random() > 0.7
    const tokenPool = isBase ? baseTokens : solanaTokens
    const token = tokenPool[Math.floor(Math.random() * tokenPool.length)]
    const blockchain = isBase ? 'Base' : 'Solana'
    const type = Math.random() > 0.5 ? 'BUY' : 'SELL'
    const momentum = Math.random() > 0.4 ? 'HIGH MOM' : 'LOW MOM'
    const whales = Math.random() > 0.7 ? Math.floor(Math.random() * 100) + 1 : 0
    const buyVolume = Math.random() * 5000
    const sellVolume = Math.random() * 5000
    const buyPressure = Math.floor(Math.random() * 100)
    const volume = buyVolume + sellVolume
    const trades = Math.floor(Math.random() * 500)
    const buyerRatio = `${Math.floor(Math.random() * 500)}/${Math.floor(Math.random() * 500)}`
    const lastTransaction = `${type} ${(Math.random() * 100).toFixed(2)} SOL`
    const timeAgo = `${Math.floor(Math.random() * 30)}m ago`
    
    signals.push({
      id: `${token}-${i}`,
      token,
      contractAddress: generateAddress(),
      blockchain,
      type,
      momentum,
      whales,
      buyVolume,
      sellVolume,
      buyPressure,
      volume,
      trades,
      buyerRatio,
      lastTransaction,
      timeAgo
    })
  }
  
  return signals
}

export default function SignalsList({ 
  timeframe, 
  onTimeframeChange, 
  sortBy, 
  onSortChange 
}: SignalsListProps) {
  const [signals, setSignals] = useState<Signal[]>([])
  const [filteredSignals, setFilteredSignals] = useState<Signal[]>([])

  useEffect(() => {
    const mockSignals = generateMockSignals()
    setSignals(mockSignals)
  }, [])

  useEffect(() => {
    let filtered = [...signals]

    // Apply sort filter
    if (sortBy === 'WHALE') {
      filtered = filtered.filter(s => s.whales > 0).sort((a, b) => b.whales - a.whales)
    } else if (sortBy === 'MOMENTUM') {
      filtered = filtered.sort((a, b) => b.buyPressure - a.buyPressure)
    } else if (sortBy === 'BLANK') {
      filtered = filtered.filter(s => Math.random() > 0.5)
    }

    setFilteredSignals(filtered)
  }, [signals, sortBy])

  const timeframes = ['1H', '4H', '24H']
  const sortOptions = ['ALL', 'WHALE', 'MOMENTUM', 'BLANK', 'DBC']

  return (
    <div className="signals-list-container">
      <div className="signals-header">
        <div className="title-section">
          <h2>SIGNALS</h2>
          <span className="signal-count">{filteredSignals.length} signals</span>
          <span className="update-time">updated {new Date().toLocaleTimeString()}</span>
        </div>

        <div className="controls">
          <div className="timeframe-controls">
            {timeframes.map((tf) => (
              <button
                key={tf}
                className={`timeframe-btn ${timeframe === tf ? 'active' : ''}`}
                onClick={() => onTimeframeChange(tf)}
              >
                {tf}
              </button>
            ))}
            <button className="refresh-btn" onClick={() => setSignals(generateMockSignals())}>
              🔄 REFRESH
            </button>
          </div>

          <div className="sort-controls">
            {sortOptions.map((option) => (
              <button
                key={option}
                className={`sort-btn ${sortBy === option ? 'active' : ''}`}
                onClick={() => onSortChange(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="signals-grid">
        {filteredSignals.map((signal) => (
          <SignalCard key={signal.id} signal={signal} />
        ))}
      </div>

      {filteredSignals.length === 0 && (
        <div className="no-signals">
          <p>No signals found</p>
        </div>
      )}
    </div>
  )
}
