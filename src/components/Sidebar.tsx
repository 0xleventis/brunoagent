import './Sidebar.css'

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const tabs = [
    { id: 'signals', label: 'SIGNALS', icon: '📡' },
    { id: 'blank', label: 'BLANK', icon: '📄' },
    { id: 'watchlist', label: 'WATCHLIST', icon: '📌' },
    { id: 'positions', label: 'POSITIONS', icon: '💼' },
    { id: 'settings', label: 'SETTINGS', icon: '⚙️' },
  ]

  return (
    <aside className="sidebar">
      <nav className="nav-menu">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            title={tab.label}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <a href="https://x.com/alphankdotxyz" target="_blank" rel="noopener noreferrer" className="social-link">
          𝕏
        </a>
      </div>
    </aside>
  )
}
