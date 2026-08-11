import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { EventInfo } from './components/EventInfo';
import { Footer } from './components/Footer';
import { RegistrationModal } from './registration/RegistrationModal';
import { AdminLogin } from './admin/AdminLogin';
import { Dashboard } from './admin/Dashboard';

export function App() {
  const [currentView, setCurrentView] = useState('public'); // 'public' | 'admin-login' | 'admin-dashboard'
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleOpenRegister = () => {
    setShowRegisterModal(true);
  };

  const handleCloseRegister = () => {
    setShowRegisterModal(false);
  };

  const handleOpenAdmin = () => {
    if (isAdminAuthenticated) {
      setCurrentView('admin-dashboard');
    } else {
      setCurrentView('admin-login');
    }
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    setCurrentView('admin-dashboard');
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentView('public');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* PUBLIC LANDING PAGE VIEW */}
      {currentView === 'public' && (
        <>
          <Navbar
            onOpenRegister={handleOpenRegister}
            onOpenAdmin={handleOpenAdmin}
          />
          <main style={{ flex: 1 }}>
            <Hero onOpenRegister={handleOpenRegister} />
            <About />
            <Highlights />
            <EventInfo />
          </main>
          <Footer
            onOpenAdmin={handleOpenAdmin}
            onOpenRegister={handleOpenRegister}
          />
        </>
      )}

      {/* ADMIN LOGIN MODAL */}
      {currentView === 'admin-login' && (
        <AdminLogin
          onLoginSuccess={handleAdminLoginSuccess}
          onClose={() => setCurrentView('public')}
        />
      )}

      {/* ADMIN DASHBOARD VIEW */}
      {currentView === 'admin-dashboard' && (
        <>
          <nav style={{
            background: '#090d16',
            padding: '0.75rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: '#f8fafc' }}>
              SIH 2026 Admin Portal • JSCOE Pune
            </div>
            <button
              onClick={() => setCurrentView('public')}
              className="btn-secondary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              ← Back to Public Website
            </button>
          </nav>
          <main style={{ flex: 1 }}>
            <Dashboard onLogout={handleAdminLogout} />
          </main>
        </>
      )}

      {/* REGISTRATION MODAL */}
      {showRegisterModal && (
        <RegistrationModal
          onClose={handleCloseRegister}
          onRegistrationSuccess={() => {
            // Can refresh local stats
          }}
        />
      )}
    </div>
  );
}

export default App;
