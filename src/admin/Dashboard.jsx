import React, { useState, useEffect } from 'react';
import { LogOut, RefreshCw, Database, Shield, LayoutDashboard, Users, UserCheck, Layers, Lightbulb, BarChart3, Settings } from 'lucide-react';
import { StatisticsCards } from './StatisticsCards';
import { DepartmentAnalytics } from './DepartmentAnalytics';
import { GenderAnalytics } from './GenderAnalytics';
import { ThemeAnalytics } from './ThemeAnalytics';
import { RegistrationTrend } from './RegistrationTrend';
import { TeamTable } from './TeamTable';
import { TeamDetailsModal } from './TeamDetailsModal';
import { getStoredTeams, calculateLiveAnalytics } from '../services/googleSheetsService';
import { hackathonConfig } from '../config/hackathonConfig';

export const Dashboard = ({ onLogout }) => {
  const [teams, setTeams] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const fetchDashboardData = async () => {
    setIsLoading(true);
    const data = await getStoredTeams();
    setTeams(data);
    const calculated = calculateLiveAnalytics(data);
    setAnalytics(calculated);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const navMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'teams', label: 'Registered Teams', icon: <Users size={18} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={18} /> },
    { id: 'departments', label: 'Departments', icon: <Layers size={18} /> },
    { id: 'themes', label: 'SIH Themes', icon: <Lightbulb size={18} /> }
  ];

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 60px)', background: '#F8F8F6' }}>
      {/* Deep Navy Sidebar */}
      <aside style={{
        width: '240px',
        background: '#071F5B',
        color: '#FFFFFF',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #001B52'
      }} className="desktop-sidebar">
        <div style={{ padding: '1.25rem 1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Shield size={22} style={{ color: '#F56A00' }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FFFFFF' }}>SIH 2026 ADMIN</div>
            <div style={{ fontSize: '0.72rem', color: '#B0C4DE' }}>{hackathonConfig.COLLEGE.shortName}</div>
          </div>
        </div>

        <nav style={{ padding: '1rem 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: 1 }}>
          {navMenuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  border: 'none',
                  background: isActive ? '#F56A00' : 'transparent',
                  color: '#FFFFFF',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s'
                }}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </nav>

        <div style={{ padding: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <button
            onClick={onLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.6rem',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#FFFFFF',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content View */}
      <main style={{ flex: 1, padding: '2rem 1.75rem 4rem', overflowX: 'hidden' }}>
        {/* Top Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.25rem',
          marginBottom: '2rem',
          paddingBottom: '1.25rem',
          borderBottom: '2px solid #E5E5E5'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <span className="sih-badge sih-badge-navy">SIH 2026 • ADMIN PORTAL</span>
              <span className="sih-badge sih-badge-orange">
                <Database size={12} /> {hackathonConfig.USE_DUMMY_DATA ? 'Local Prototype Mode' : 'Connected to Apps Script'}
              </span>
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#071F5B' }}>
              SIH Internal Hackathon Analytics Dashboard
            </h1>
            <p style={{ color: '#555555', fontSize: '0.88rem' }}>
              {hackathonConfig.COLLEGE.name}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={fetchDashboardData}
              className="btn-sih-outline"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
            >
              <RefreshCw size={15} /> Refresh Data
            </button>
          </div>
        </div>

        {isLoading || !analytics ? (
          <div style={{ padding: '4rem', textAlign: 'center', color: '#555555', fontWeight: 600 }}>
            Loading dashboard data...
          </div>
        ) : (
          <>
            {/* Top Statistics Cards */}
            <StatisticsCards summary={analytics.summary} />

            {/* Analytics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              {/* Department Analytics (8 cols) */}
              <div style={{ gridColumn: 'span 8' }} className="grid-span-12-mobile">
                <DepartmentAnalytics departmentData={analytics.departmentData} />
              </div>

              {/* Gender Analytics (4 cols) */}
              <div style={{ gridColumn: 'span 4' }} className="grid-span-12-mobile">
                <GenderAnalytics genderData={analytics.genderData} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              {/* Theme Analytics (6 cols) */}
              <div style={{ gridColumn: 'span 6' }} className="grid-span-12-mobile">
                <ThemeAnalytics themeData={analytics.themeData} />
              </div>

              {/* Registration Trend (6 cols) */}
              <div style={{ gridColumn: 'span 6' }} className="grid-span-12-mobile">
                <RegistrationTrend />
              </div>
            </div>

            {/* Team Table */}
            <TeamTable
              teams={teams}
              onSelectTeam={setSelectedTeam}
            />

            {/* Team Details Modal */}
            {selectedTeam && (
              <TeamDetailsModal
                team={selectedTeam}
                onClose={() => setSelectedTeam(null)}
              />
            )}
          </>
        )}
      </main>

      <style>{`
        @media (max-width: 992px) {
          .desktop-sidebar { display: none !important; }
          .grid-span-12-mobile { grid-column: span 12 !important; }
        }
      `}</style>
    </div>
  );
};
