import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

interface LaunchItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'Projects' | 'Infrastructure' | 'Tools & Dev';
  icon: string;
  tag: string;
  keywords?: string[];
}

interface EdgeStatus {
  status: string;
  colo: string;
  country: string;
  latencyMs: number;
}

const LAUNCHPAD_ITEMS: LaunchItem[] = [
  // Projects
  {
    id: 'spykey-central',
    title: 'Spykey Central',
    description: 'Primary edge web application and personal command hub.',
    url: 'https://spykeycentral.com',
    category: 'Projects',
    icon: '⚡',
    tag: 'PROD',
    keywords: ['home', 'main', 'hub'],
  },
  {
    id: 'github-repos',
    title: 'GitHub Repositories',
    description: 'Source code, Vite + React builds, and Worker templates.',
    url: 'https://github.com',
    category: 'Projects',
    icon: '📦',
    tag: 'GIT',
    keywords: ['code', 'source', 'repo'],
  },
  {
    id: 'zenodo-archive',
    title: 'Research Archive',
    description: 'Published research documentation and DOI records.',
    url: 'https://doi.org/10.5281/zenodo.15101445',
    category: 'Projects',
    icon: '📄',
    tag: 'DOI',
    keywords: ['paper', 'publication', 'zenodo'],
  },

  // Infrastructure & Self-Hosted
  {
    id: 'cf-dashboard',
    title: 'Cloudflare Dashboard',
    description: 'Workers, D1 databases, KV namespaces, DNS, and Zero Trust.',
    url: 'https://dash.cloudflare.com',
    category: 'Infrastructure',
    icon: '☁️',
    tag: 'EDGE',
    keywords: ['dns', 'workers', 'pages', 'd1'],
  },
  {
    id: 'local-gateway',
    title: 'Home Lab / Router',
    description: 'Local network gateway, WireGuard tunnels, and DNS.',
    url: 'http://192.168.1.1',
    category: 'Infrastructure',
    icon: '🛡️',
    tag: 'LAN',
    keywords: ['router', 'wireguard', 'vpn', 'network'],
  },
  {
    id: 'proxmox-node',
    title: 'Self-Hosted Services',
    description: 'Containers, media server, and local Linux host management.',
    url: 'https://localhost:8006',
    category: 'Infrastructure',
    icon: '🖥️',
    tag: 'NODE',
    keywords: ['docker', 'server', 'ubuntu', 'linux'],
  },

  // Tools & Dev
  {
    id: 'cf-analytics',
    title: 'Worker Observability',
    description: 'Real-time request logs, CPU time, and edge invocation metrics.',
    url: 'https://dash.cloudflare.com/?to=/:account/workers-and-pages',
    category: 'Tools & Dev',
    icon: '📊',
    tag: 'LOGS',
    keywords: ['metrics', 'traces', 'debug'],
  },
  {
    id: 'regex-json',
    title: 'JSON & JWT Inspector',
    description: 'Format payloads, inspect headers, and decode tokens.',
    url: 'https://jwt.io',
    category: 'Tools & Dev',
    icon: '🔑',
    tag: 'UTIL',
    keywords: ['token', 'decode', 'auth'],
  },
  {
    id: 'crontab-guru',
    title: 'Cron Schedule Builder',
    description: 'Quick expression editor for Cloudflare Cron Triggers & Linux.',
    url: 'https://crontab.guru',
    category: 'Tools & Dev',
    icon: '⏱️',
    tag: 'CRON',
    keywords: ['schedule', 'timer', 'linux'],
  },
];

const CATEGORIES: LaunchItem['category'][] = [
  'Projects',
  'Infrastructure',
  'Tools & Dev',
];

export function App() {
  const [now, setNow] = useState(() => new Date());
  const [edgeStatus, setEdgeStatus] = useState<EdgeStatus | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch edge status from Cloudflare Worker
  useEffect(() => {
    let active = true;
    const checkEdge = async () => {
      const start = performance.now();
      try {
        const res = await fetch('/api/status');
        const latencyMs = Math.round(performance.now() - start);
        if (res.ok && active) {
          const data = await res.json();
          setEdgeStatus({
            status: data.status || 'OPERATIONAL',
            colo: data.colo || 'EDGE',
            country: data.country || 'SE',
            latencyMs,
          });
        }
      } catch {
        if (active) {
          setEdgeStatus({
            status: 'LOCAL / STATIC',
            colo: 'DEV',
            country: 'LOCAL',
            latencyMs: Math.round(performance.now() - start),
          });
        }
      }
    };
    checkEdge();
    return () => {
      active = false;
    };
  }, []);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (paletteOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [paletteOpen]);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LAUNCHPAD_ITEMS;
    return LAUNCHPAD_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.keywords?.some((k) => k.includes(q))
    );
  }, [query]);

  const handlePaletteKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        filteredItems.length ? (prev + 1) % filteredItems.length : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        filteredItems.length
          ? (prev - 1 + filteredItems.length) % filteredItems.length
          : 0
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        window.open(filteredItems[selectedIndex].url, '_blank', 'noopener');
        setPaletteOpen(false);
      } else if (query.trim()) {
        window.open(
          `https://www.google.com/search?q=${encodeURIComponent(query.trim())}`,
          '_blank',
          'noopener'
        );
        setPaletteOpen(false);
      }
    }
  };

  const formattedTime = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDate = now.toLocaleDateString([], {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="hub-container">
      {/* Header */}
      <header className="hub-header">
        <div className="brand-group">
          <h1>
            <span className="brand-dot" />
            SPYKEY CENTRAL
          </h1>
          <p className="brand-subtitle">
            spykeycentral.com // edge command hub
          </p>
        </div>

        <div className="header-controls">
          <button
            type="button"
            className="cmd-trigger"
            onClick={() => setPaletteOpen(true)}
          >
            <span>Quick launch or search...</span>
            <span className="kbd">Ctrl K</span>
          </button>
        </div>
      </header>

      {/* Live Telemetry Strip */}
      <section className="telemetry-bar" aria-label="System Telemetry">
        <div className="telemetry-card">
          <div className="telemetry-label">Edge Status</div>
          <div className="telemetry-value">
            <span className="status-pill">
              <span className="status-dot" />
              {edgeStatus ? edgeStatus.status : 'CHECKING...'}
            </span>
          </div>
        </div>

        <div className="telemetry-card">
          <div className="telemetry-label">Cloudflare Node & RTT</div>
          <div className="telemetry-value">
            {edgeStatus
              ? `${edgeStatus.colo} (${edgeStatus.country}) · ${edgeStatus.latencyMs}ms`
              : '—'}
          </div>
        </div>

        <div className="telemetry-card">
          <div className="telemetry-label">Local Time</div>
          <div className="telemetry-value">
            {formattedTime}{' '}
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {formattedDate}
            </span>
          </div>
        </div>
      </section>

      {/* Launchpad Categories */}
      <main>
        {CATEGORIES.map((category) => {
          const items = LAUNCHPAD_ITEMS.filter((i) => i.category === category);
          return (
            <section key={category} className="section-block">
              <div className="section-header">
                <h2 className="section-title">{category}</h2>
              </div>

              <div className="cards-grid">
                {items.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hub-card"
                  >
                    <div>
                      <div className="card-top">
                        <div className="card-icon">{item.icon}</div>
                        <span className="card-tag">{item.tag}</span>
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.description}</p>
                    </div>

                    <div className="card-footer">
                      <span>{item.url.replace(/^https?:\/\//, '')}</span>
                      <span>↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Ctrl+K Command Palette */}
      {paletteOpen && (
        <div
          className="cmd-backdrop"
          onClick={() => setPaletteOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cmd-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cmd-input-wrap">
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                &gt;_
              </span>
              <input
                ref={inputRef}
                type="text"
                className="cmd-input"
                placeholder="Filter apps, self-hosted links, or press Enter to search web..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handlePaletteKeyDown}
              />
              <span className="kbd">ESC</span>
            </div>

            <div className="cmd-results">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`cmd-item ${idx === selectedIndex ? 'selected' : ''}`}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onClick={() => {
                      window.open(item.url, '_blank', 'noopener');
                      setPaletteOpen(false);
                    }}
                  >
                    <div className="cmd-item-left">
                      <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                      <div>
                        <div className="cmd-item-title">{item.title}</div>
                        <div className="cmd-item-sub">{item.description}</div>
                      </div>
                    </div>
                    <span className="card-tag">{item.tag}</span>
                  </div>
                ))
              ) : (
                <div
                  className="cmd-item selected"
                  onClick={() => {
                    window.open(
                      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
                      '_blank',
                      'noopener'
                    );
                    setPaletteOpen(false);
                  }}
                >
                  <div className="cmd-item-left">
                    <span>🔍</span>
                    <div>
                      <div className="cmd-item-title">
                        Search Google for "{query}"
                      </div>
                      <div className="cmd-item-sub">No matching launchpad card</div>
                    </div>
                  </div>
                  <span className="kbd">ENTER</span>
                </div>
              )}
            </div>

            <div className="cmd-hint">
              <span>↑↓ Navigate · Enter to launch</span>
              <span>Spykey Central Command</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
