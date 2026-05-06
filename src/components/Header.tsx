import './Header.css'

interface HeaderProps {
  onToggleDarkMode: () => void
}

export default function Header({ onToggleDarkMode }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">🤖 BRUNO AGENT</h1>
      </div>
      <div className="header-center">
        <input type="text" className="search-input" placeholder="🔍 Search" />
      </div>
      <div className="header-right">
        <button className="icon-btn" onClick={onToggleDarkMode} title="Toggle dark mode">
          🌙
        </button>
        <button className="icon-btn" title="Notifications">
          🔔
        </button>
        <button className="icon-btn" title="Account">
          👤
        </button>
      </div>
    </header>
  )
}
