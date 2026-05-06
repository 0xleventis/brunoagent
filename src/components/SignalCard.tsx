import './SignalCard.css'

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

interface SignalCardProps {
  signal: Signal
}

export default function SignalCard({ signal }: SignalCardProps) {
  const isBuy = signal.type === 'BUY'
  const typeColor = isBuy ? '#00ff00' : '#ff4444'
  const buyPressurePercent = signal.buyPressure
  const buyerCount = parseInt(signal.buyerRatio.split('/')[0])
  const sellerCount = parseInt(signal.buyerRatio.split('/')[1])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Contract address copied!')
  }

  const blockchainColor = signal.blockchain === 'Solana' ? '#00d4aa' : '#0052ff'

  return (
    <div className="signal-card">
      <div className="signal-header">
        <div className="signal-info">
          <div className="token-section">
            <div className="token-badge">{signal.token}</div>
            <div className="blockchain-badge" style={{ borderColor: blockchainColor, color: blockchainColor }}>
              {signal.blockchain}
            </div>
          </div>
          <div className="signal-type" style={{ color: typeColor }}>
            {signal.type}
          </div>
          <div className="momentum">{signal.momentum}</div>
          {signal.whales > 0 && <div className="whales">🐋 {signal.whales}</div>}
        </div>
        <div className="signal-actions">
          <button 
            className="action-btn copy-btn" 
            title="Copy contract address"
            onClick={() => copyToClipboard(signal.contractAddress)}
          >
            📋
          </button>
          <button className="action-btn" title="Add to watchlist">🔖</button>
          <button className="action-btn" title="Auto trade">🤖</button>
        </div>
      </div>

      <div className="contract-address">
        <span className="label">Contract:</span>
        <span className="address">{signal.contractAddress.slice(0, 12)}...{signal.contractAddress.slice(-8)}</span>
      </div>

      <div className="signal-volumes">
        <div className="volume-item buy">
          <span className="label">BUY</span>
          <span className="amount">{signal.buyVolume.toFixed(2)} SOL</span>
        </div>
        <div className="volume-item sell">
          <span className="label">SELL</span>
          <span className="amount">{signal.sellVolume.toFixed(2)} SOL</span>
        </div>
      </div>

      <div className="buy-pressure">
        <div className="pressure-bar">
          <div 
            className="pressure-fill" 
            style={{ width: `${buyPressurePercent}%` }}
          ></div>
        </div>
        <span className="pressure-text">{buyPressurePercent}% buy pressure</span>
      </div>

      <div className="signal-stats">
        <div className="stat">
          <svg className="chart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
          <span className="stat-label">VOLUME</span>
          <span className="stat-value">{signal.volume.toFixed(1)} SOL</span>
        </div>
        <div className="stat">
          <span className="stat-icon">⇄</span>
          <span className="stat-label">TRADES</span>
          <span className="stat-value">{signal.trades}</span>
        </div>
        <div className="stat">
          <span className="stat-icon">👥</span>
          <span className="stat-label">BUYERS</span>
          <span className="stat-value">{buyerCount}/{sellerCount}</span>
        </div>
      </div>

      <div className="signal-footer">
        <div className="last-transaction">
          <span className="icon">⏱️</span>
          <span className="text">Last: {signal.lastTransaction} · {signal.timeAgo}</span>
        </div>
      </div>
    </div>
  )
}
