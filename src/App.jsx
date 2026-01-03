import React, { useState, useEffect, useMemo } from 'react';
import { SOURCES, CLAIMS, TIMELINE, ANALYSIS_DIMENSIONS, BUILD_INFO } from './data/sources.js';

// Utility functions
const statusBadge = (status) => {
  const styles = {
    canonical: { borderColor: 'rgba(34,197,94,.35)', color: 'rgba(34,197,94,.95)' },
    verified: { borderColor: 'rgba(34,197,94,.35)', color: 'rgba(34,197,94,.95)' },
    credible_claim: { borderColor: 'rgba(245,158,11,.35)', color: 'rgba(245,158,11,.95)' },
    framework: { borderColor: 'var(--border)', color: 'var(--muted)' }
  };
  const style = styles[status] || styles.framework;
  const label = status?.replace('_', ' ').toUpperCase() || 'UNKNOWN';
  return <span className="badge" style={style}>{label}</span>;
};

const sourceTypeLabel = (t) => (t || '').replaceAll('_', ' ');

// Header Component
function Header({ theme, toggleTheme, onExportJson, onExportCsv }) {
  return (
    <header className="main-header">
      <div className="brand">
        <div className="logo" aria-hidden="true"></div>
        <div>
          <h1>Shadow State Tracker <span className="badge b-dim">v5</span></h1>
          <div className="subtitle">
            Merged evidence tracker + research platform |
            <span className="badge b-ok">CANONICAL</span> /
            <span className="badge b-warn">CREDIBLE CLAIM</span> /
            <span className="badge">FRAMEWORK</span>
          </div>
        </div>
      </div>
      <div className="pillbar">
        <div className="pill">
          <span className="badge b-dim">BUILD</span>
          <span className="meta">{BUILD_INFO.build_date_utc}</span>
        </div>
        <button className="btn" onClick={toggleTheme}>Toggle theme</button>
        <button className="btn" onClick={onExportJson}>Export JSON</button>
        <button className="btn" onClick={onExportCsv}>Export CSV</button>
      </div>
    </header>
  );
}

// Tab Navigation Component
function TabNav({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="tablist" role="tablist">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.icon} {tab.label}
        </button>
      ))}
    </div>
  );
}

// Overview Panel
function OverviewPanel({ onViewClaim }) {
  return (
    <div className="panel">
      <div className="grid">
        <div className="card span-7">
          <h2>What This App Does</h2>
          <p>
            Separates <strong>what a source directly contains</strong> from <strong>what an analyst infers</strong>.
            Every claim is labeled and backed by explicit source records.
          </p>
          <ul className="list">
            <li className="item">
              <div className="item-title">
                <strong>CANONICAL</strong>
                <span className="badge b-ok">direct URL</span>
              </div>
              <div className="small">Resolvable article/video/official document URL.</div>
            </li>
            <li className="item">
              <div className="item-title">
                <strong>CREDIBLE CLAIM</strong>
                <span className="badge b-warn">serious media</span>
              </div>
              <div className="small">Serious outlet reports it; primary artifact not present here.</div>
            </li>
            <li className="item">
              <div className="item-title">
                <strong>FRAMEWORK</strong>
                <span className="badge">conceptual</span>
              </div>
              <div className="small">Structural explanation; not a case-specific fact claim.</div>
            </li>
          </ul>
        </div>

        <div className="card span-5">
          <h2>Quick Stats</h2>
          <div className="stats-grid">
            <div className="card stat-card">
              <div className="kpi">
                <div className="val">{SOURCES.length}</div>
                <div className="lab">Sources</div>
              </div>
              <span className="badge b-ok">canonical</span>
            </div>
            <div className="card stat-card">
              <div className="kpi">
                <div className="val">{CLAIMS.length}</div>
                <div className="lab">Claims</div>
              </div>
              <span className="badge b-warn">labeled</span>
            </div>
            <div className="card stat-card">
              <div className="kpi">
                <div className="val">{TIMELINE.length}</div>
                <div className="lab">Timeline Events</div>
              </div>
              <span className="badge">tracked</span>
            </div>
          </div>
        </div>

        <div className="card span-12">
          <h2>Key Claims (click for evidence)</h2>
          <p className="small">Claims are phrased to avoid un-sourced specifics. Open a claim to see its evidence list.</p>
          <ul className="list">
            {CLAIMS.map(claim => (
              <li key={claim.id} className="item">
                <div className="item-title">
                  <strong>{claim.title}</strong>
                  {statusBadge(claim.status)}
                </div>
                <div className="small">{claim.claim}</div>
                <button className="btn" onClick={() => onViewClaim(claim)}>View evidence</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Timeline Panel
function TimelinePanel() {
  return (
    <div className="panel">
      <h2 className="section-title">Timeline with Analytical Depth</h2>
      <p className="intro-text">
        Not just dates - understand the <em>mechanism</em> at each stage. What happened, why it mattered, what it reveals about media ecosystems.
      </p>
      <div className="timeline">
        {TIMELINE.map(event => (
          <div key={event.id} className="timeline-item">
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-content">
              <h4>{event.title}</h4>
              <p>{event.content}</p>
              <div className="significance">
                <strong>Why it matters:</strong> {event.significance}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Analysis Panel
function AnalysisPanel() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="panel">
      <h2 className="section-title">Why This Matters: Five Critical Dimensions</h2>
      {ANALYSIS_DIMENSIONS.map(dim => (
        <div key={dim.id} className={`expandable ${expandedId === dim.id ? 'open' : ''}`}>
          <div
            className="expandable-header"
            onClick={() => setExpandedId(expandedId === dim.id ? null : dim.id)}
          >
            <h4>{dim.title}</h4>
            <span className="expandable-arrow">→</span>
          </div>
          <div className="expandable-content">
            <p className="summary">{dim.summary}</p>
            <div className="content-text">
              {dim.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Dataset Panel
function DatasetPanel() {
  const [filterCase, setFilterCase] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const types = useMemo(() =>
    [...new Set(SOURCES.map(s => s.type))].sort(),
    []
  );

  const filteredSources = useMemo(() => {
    return SOURCES.filter(s => {
      if (filterCase !== 'all' && s.case !== filterCase) return false;
      if (filterType !== 'all' && s.type !== filterType) return false;
      if (filterStatus !== 'all' && s.status !== filterStatus) return false;
      if (searchQuery) {
        const hay = `${s.case} ${s.type} ${s.status} ${s.publisher} ${s.title} ${s.notes}`.toLowerCase();
        if (!hay.includes(searchQuery.toLowerCase())) return false;
      }
      return true;
    });
  }, [filterCase, filterType, filterStatus, searchQuery]);

  return (
    <div className="panel">
      <div className="card">
        <div className="controls">
          <div className="left">
            <label>
              Case
              <select value={filterCase} onChange={e => setFilterCase(e.target.value)}>
                <option value="all">All</option>
                <option value="Qatar-Gate">Qatar-Gate</option>
                <option value="Project Raven">Project Raven</option>
              </select>
            </label>
            <label>
              Type
              <select value={filterType} onChange={e => setFilterType(e.target.value)}>
                <option value="all">All</option>
                {types.map(t => (
                  <option key={t} value={t}>{sourceTypeLabel(t)}</option>
                ))}
              </select>
            </label>
            <label>
              Status
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="canonical">canonical</option>
                <option value="credible_claim">credible_claim</option>
                <option value="framework">framework</option>
                <option value="verified">verified</option>
              </select>
            </label>
            <label>
              Search
              <input
                type="search"
                placeholder="title, publisher, notes..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </label>
          </div>
          <div className="right">
            <span className="meta">{filteredSources.length} rows</span>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Case</th>
                <th>Type</th>
                <th>Status</th>
                <th>Publisher</th>
                <th>Title</th>
                <th>Date</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {filteredSources.map(s => (
                <tr key={s.id}>
                  <td>{s.case}</td>
                  <td>{sourceTypeLabel(s.type)}</td>
                  <td>{statusBadge(s.status)}</td>
                  <td>{s.publisher}</td>
                  <td><strong>{s.title}</strong></td>
                  <td className="meta">{s.date}</td>
                  <td className="urlcell">
                    {s.url?.startsWith('http') ? (
                      <a href={s.url} target="_blank" rel="noopener noreferrer">{s.url}</a>
                    ) : (
                      <span className="meta">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Sources Panel
function SourcesPanel() {
  return (
    <div className="panel">
      <div className="card">
        <h2>Sources (clickable if canonical URL is present)</h2>
        <p className="small">If a canonical URL isn't present, store it as a "credible claim" pointer - not as primary evidence.</p>
        <ul className="list">
          {SOURCES.sort((a, b) => (a.publisher || '').localeCompare(b.publisher || '')).map(s => (
            <li key={s.id} className="item">
              <div className="item-title">
                <strong>{s.title}</strong>
                <span className="badge b-dim">{s.case}</span>
              </div>
              <div className="meta">
                {s.publisher} | {s.date} | {sourceTypeLabel(s.type)} | {statusBadge(s.status)}
              </div>
              <div className="small">{s.notes}</div>
              {s.url?.startsWith('http') ? (
                <a className="link" href={s.url} target="_blank" rel="noopener noreferrer">
                  Open source →
                </a>
              ) : (
                <span className="link disabled">No URL available</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Comparison Panel
function ComparisonPanel() {
  return (
    <div className="panel">
      <div className="grid">
        <div className="card span-6">
          <h2>Structural Similarity (framework)</h2>
          <p>Both illustrate <strong>regulatory arbitrage</strong>: contractors can wield state-like authority while operating under different accountability regimes.</p>
        </div>
        <div className="card span-6">
          <h2>Key Difference (evidence density)</h2>
          <p>Project Raven includes enforcement artifacts (DOJ/State). Qatar-Gate here is mostly serious-media reporting, labeled accordingly.</p>
        </div>
        <div className="card span-12">
          <h2>Comparison Matrix</h2>
          <table>
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Qatar-Gate</th>
                <th>Project Raven</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary artifacts included</strong></td>
                <td>Mixed (canonical reporting URLs; some claims only in investigative reporting)</td>
                <td>Strong (DOJ + State docs, Reuters investigations)</td>
              </tr>
              <tr>
                <td><strong>Primary risk</strong></td>
                <td>Information influence / narrative laundering (as reported)</td>
                <td>Offensive cyber capability exported via contractors</td>
              </tr>
              <tr>
                <td><strong>Review posture</strong></td>
                <td>Default to "credible claim" unless canonical artifacts exist</td>
                <td>Support with official records + investigative reporting</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Modal Component
function ClaimModal({ claim, onClose }) {
  if (!claim) return null;

  const evidenceSources = claim.evidence_ids
    ?.map(id => SOURCES.find(s => s.id === id))
    .filter(Boolean) || [];

  return (
    <div className="backdrop open" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <header>
          <div>
            <h3>{claim.title}</h3>
            <div className="meta">{claim.case} | {claim.status}</div>
          </div>
          <button className="btn" onClick={onClose}>Close</button>
        </header>
        <div className="body">
          <div className="card">
            <h2>Claim</h2>
            <div className="small">{claim.claim}</div>
          </div>
          <div className="card">
            <h2>Evidence List</h2>
            <ul className="list">
              {evidenceSources.map(s => (
                <li key={s.id} className="item">
                  <div className="item-title">
                    <strong>{s.title}</strong>
                    {statusBadge(s.status)}
                  </div>
                  <div className="meta">{s.publisher} | {s.date} | {sourceTypeLabel(s.type)}</div>
                  <div className="small">{s.notes}</div>
                  {s.url?.startsWith('http') && (
                    <a className="link" href={s.url} target="_blank" rel="noopener noreferrer">
                      Open source →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2>Notes</h2>
            <div className="small">{claim.notes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedClaim, setSelectedClaim] = useState(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '' },
    { id: 'timeline', label: 'Timeline', icon: '' },
    { id: 'analysis', label: 'Why It Matters', icon: '' },
    { id: 'qatar', label: 'Qatar-Gate', icon: '' },
    { id: 'raven', label: 'Project Raven', icon: '' },
    { id: 'comparison', label: 'Comparison', icon: '' },
    { id: 'dataset', label: 'Dataset', icon: '' },
    { id: 'sources', label: 'Sources', icon: '' }
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sst_theme', theme);
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem('sst_theme');
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  const downloadFile = (filename, content, type) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const exportJson = () => {
    const data = { build: BUILD_INFO, sources: SOURCES, claims: CLAIMS, timeline: TIMELINE };
    downloadFile('shadow_state_tracker_v5.json', JSON.stringify(data, null, 2), 'application/json');
  };

  const exportCsv = () => {
    const header = ['case', 'type', 'status', 'publisher', 'title', 'date', 'url', 'notes'];
    const esc = v => {
      const s = String(v ?? '');
      return /[",\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
    };
    const rows = SOURCES.map(r => header.map(k => esc(r[k])).join(','));
    downloadFile('shadow_state_tracker_v5.csv', [header.join(','), ...rows].join('\n'), 'text/csv');
  };

  const renderPanel = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewPanel onViewClaim={setSelectedClaim} />;
      case 'timeline':
        return <TimelinePanel />;
      case 'analysis':
        return <AnalysisPanel />;
      case 'qatar':
        return (
          <div className="panel">
            <h2 className="section-title">Qatar-Gate Evidence</h2>
            <ul className="list">
              {SOURCES.filter(s => s.case === 'Qatar-Gate').map(s => (
                <li key={s.id} className="item">
                  <div className="item-title">
                    <strong>{s.title}</strong>
                    {statusBadge(s.status)}
                  </div>
                  <div className="meta">{s.publisher} | {s.date}</div>
                  <div className="small">{s.notes}</div>
                  {s.url?.startsWith('http') && (
                    <a className="link" href={s.url} target="_blank" rel="noopener noreferrer">Open source →</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'raven':
        return (
          <div className="panel">
            <h2 className="section-title">Project Raven Evidence</h2>
            <ul className="list">
              {SOURCES.filter(s => s.case === 'Project Raven').map(s => (
                <li key={s.id} className="item">
                  <div className="item-title">
                    <strong>{s.title}</strong>
                    {statusBadge(s.status)}
                  </div>
                  <div className="meta">{s.publisher} | {s.date}</div>
                  <div className="small">{s.notes}</div>
                  {s.url?.startsWith('http') && (
                    <a className="link" href={s.url} target="_blank" rel="noopener noreferrer">Open source →</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'comparison':
        return <ComparisonPanel />;
      case 'dataset':
        return <DatasetPanel />;
      case 'sources':
        return <SourcesPanel />;
      default:
        return <OverviewPanel onViewClaim={setSelectedClaim} />;
    }
  };

  return (
    <div className="app">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onExportJson={exportJson}
        onExportCsv={exportCsv}
      />
      <div className="wrap">
        <div className="tabs">
          <TabNav activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          {renderPanel()}
        </div>
        <footer>
          <div>Shadow State Tracker v5.0 | Merged from v4 + Qatar-Gate Research Platform | React/JSX upgrade</div>
          <div>Evidence labeling is explicit; "verified" reserved for canonical/official records only.</div>
        </footer>
      </div>
      <ClaimModal claim={selectedClaim} onClose={() => setSelectedClaim(null)} />
    </div>
  );
}
