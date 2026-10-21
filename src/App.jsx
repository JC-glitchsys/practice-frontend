
import { useState } from 'react';
import {
  LayoutDashboard,
  ClipboardList,
  FileText,
  ReceiptText,
  Wallet,
  Users,
  GraduationCap,
  UserRoundPlus,
  PhilippinePeso,
  Bell,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  CalendarDays,
  Clock3,
  MoreHorizontal,
  Search,
} from 'lucide-react';
import './App.css';

const navigation = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Admission Form', icon: ClipboardList },
  { label: 'Certificate of Registration', icon: FileText },
  { label: 'Billings', icon: ReceiptText },
  { label: 'Budget Overview', icon: Wallet },
];

const stats = [
  { label: 'Total Students', value: '8,245', change: '12.5%', icon: Users },
  { label: 'Enrolled Students', value: '7,890', change: '8.2%', icon: GraduationCap },
  { label: 'Applications', value: '1,284', change: '5.4%', icon: UserRoundPlus },
  { label: 'Total Collections', value: '₱2.45M', change: '10.1%', icon: PhilippinePeso },
];

const activities = [
  { title: 'New admission application', detail: 'Sample application record', time: '10 min ago', icon: UserRoundPlus },
  { title: 'Registration record updated', detail: 'Sample COR record', time: '35 min ago', icon: FileText },
  { title: 'Billing record generated', detail: 'Sample billing record', time: '1 hour ago', icon: ReceiptText },
];

const monthlyData = [
  { month: 'Jan', value: 48 },
  { month: 'Feb', value: 63 },
  { month: 'Mar', value: 54 },
  { month: 'Apr', value: 70 },
  { month: 'May', value: 60 },
  { month: 'Jun', value: 78 },
  { month: 'Jul', value: 67 },
  { month: 'Aug', value: 88 },
  { month: 'Sep', value: 75 },
  { month: 'Oct', value: 96 },
  { month: 'Nov', value: 82 },
  { month: 'Dec', value: 90 },
];

export default function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">MSU</div>
          <div className="brand-copy">
            <strong>MSU Main Campus</strong>
            <span>Academic Portal</span>
          </div>
        </div>

        <div className="nav-section-label">WORKSPACE</div>
        <nav className="navigation">
          {navigation.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`nav-item ${activePage === label ? 'active' : ''}`}
              onClick={() => setActivePage(label)}
            >
              <Icon size={18} strokeWidth={1.9} />
              <span>{label}</span>
              {activePage === label && <span className="active-indicator" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-status">
            <span className="status-dot" />
            <span>Practice environment</span>
          </div>
          <p>Academic Records &amp; Budget</p>
          <span>Frontend prototype · v1.0</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Workspace</span>
            <span className="breadcrumb-divider">/</span>
            <strong>{activePage}</strong>
          </div>

          <div className="topbar-actions">
            <button className="icon-button" aria-label="Search">
              <Search size={18} />
            </button>
            <button className="icon-button notification-button" aria-label="Notifications">
              <Bell size={18} />
              <span />
            </button>
            <div className="profile-divider" />
            <button className="profile-button">
              <div className="avatar">A</div>
              <div className="profile-copy">
                <strong>Admin User</strong>
                <span>Administrator</span>
              </div>
              <ChevronDown size={15} />
            </button>
          </div>
        </header>

        <div className="page-content">
          <section className="page-heading">
            <div>
              <span className="eyebrow">OVERVIEW</span>
              <h1>{activePage}</h1>
              <p>Welcome back! Here's what's happening in your workspace.</p>
            </div>
            <button className="date-filter">
              <CalendarDays size={16} />
              Academic Year 2026–2027
              <ChevronDown size={15} />
            </button>
          </section>

          {activePage === 'Dashboard' ? (
            <>
              <section className="stats-grid">
                {stats.map(({ label, value, change, icon: Icon }) => (
                  <article className="stat-card" key={label}>
                    <div className="stat-card-header">
                      <span>{label}</span>
                      <div className="stat-icon">
                        <Icon size={19} strokeWidth={1.9} />
                      </div>
                    </div>
                    <div className="stat-value">{value}</div>
                    <div className="stat-footer">
                      <span className="trend">
                        <ArrowUpRight size={14} />
                        {change}
                      </span>
                      <span>vs. last period</span>
                    </div>
                  </article>
                ))}
              </section>

              <section className="dashboard-grid">
                <article className="panel enrollment-panel">
                  <div className="panel-heading">
                    <div>
                      <h2>Enrollment Overview</h2>
                      <p>Monthly activity · Illustrative data</p>
                    </div>
                    <button className="select-filter">
                      This year <ChevronDown size={14} />
                    </button>
                  </div>

                  <div className="chart-summary">
                    <div>
                      <span className="summary-label">Total enrollment</span>
                      <strong>7,890</strong>
                    </div>
                    <span className="summary-trend">
                      <ArrowUpRight size={14} /> 8.2%
                    </span>
                  </div>

                  <div className="chart-area">
                    <div className="chart-grid-lines">
                      <span>10k</span>
                      <span>7.5k</span>
                      <span>5k</span>
                      <span>2.5k</span>
                    </div>
                    <div className="bar-chart">
                      {monthlyData.map((item) => (
                        <div className="bar-column" key={item.month}>
                          <div
                            className={`chart-bar ${item.month === 'Oct' ? 'selected' : ''}`}
                            style={{ height: `${item.value}%` }}
                            title={`${item.month}: sample index ${item.value}`}
                          />
                          <span>{item.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <article className="panel budget-panel">
                  <div className="panel-heading">
                    <div>
                      <h2>Budget Overview</h2>
                      <p>Illustrative planning figures</p>
                    </div>
                    <button className="more-button" aria-label="More budget options">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  <div className="budget-total-label">Sample planned budget</div>
                  <div className="budget-total">₱12,500,000</div>
                  <div className="budget-progress">
                    <div />
                  </div>

                  <div className="budget-stat">
                    <div className="legend-label">
                      <span className="legend-dot allocated" />
                      <span>Sample allocation</span>
                    </div>
                    <strong>68%</strong>
                  </div>
                  <div className="budget-stat">
                    <div className="legend-label">
                      <span className="legend-dot remaining" />
                      <span>Remaining</span>
                    </div>
                    <strong>32%</strong>
                  </div>

                  <div className="budget-notice">
                    Demo figures only. Not official MSU budget data.
                  </div>
                </article>
              </section>

              <section className="panel activity-panel">
                <div className="panel-heading">
                  <div>
                    <h2>Recent Activity</h2>
                    <p>Latest sample updates across the portal</p>
                  </div>
                  <button className="view-all" onClick={() => alert('Activity history will be added later.')}>
                    View activity <ArrowUpRight size={15} />
                  </button>
                </div>

                <div className="activity-list">
                  {activities.map(({ title, detail, time, icon: Icon }) => (
                    <div className="activity-row" key={title}>
                      <div className="activity-icon">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <div className="activity-copy">
                        <strong>{title}</strong>
                        <span>{detail}</span>
                      </div>
                      <div className="activity-time">
                        <Clock3 size={13} />
                        {time}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <section className="panel placeholder-panel">
              <div className="placeholder-icon">
                {(() => {
                  const Icon = navigation.find((item) => item.label === activePage)?.icon || FileText;
                  return <Icon size={25} />;
                })()}
              </div>
              <h2>{activePage}</h2>
              <p>This interface will be developed in the next stage.</p>
              <span>Practice prototype · Mock data only</span>
            </section>
          )}

          <footer className="page-footer">
            <span>Academic Records &amp; Budget Management System</span>
            <span>Practice Prototype · 2026</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
