import React, { useState } from 'react';
import { Shield, Sparkles, Menu, X, Award } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const Navbar = ({ onOpenRegister, onOpenAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      background: '#FFFFFF',
      borderBottom: '2px solid #E5E5E5',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      {/* Top Thin Orange Decorative Strip */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, #F56A00, #FF7A00)' }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0.85rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Left Side Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '6px',
            background: '#071F5B',
            color: '#F56A00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1.2rem',
            border: '2px solid #F56A00'
          }}>
            SIH
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#071F5B', letterSpacing: '-0.01em' }}>
                SIH 2026 Internal Hackathon
              </span>
              <span className="sih-badge sih-badge-orange">CAMPUS ROUND</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#555555', fontWeight: 600 }}>
              {hackathonConfig.COLLEGE.name}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-only">
          <a href="#home" style={{ color: '#071F5B', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700 }}>
            HOME
          </a>
          <a href="#about" style={{ color: '#222222', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>
            ABOUT SIH
          </a>
          <a href="#highlights" style={{ color: '#222222', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>
            GUIDELINES
          </a>
          <a href="#event-info" style={{ color: '#222222', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>
            EVENT SCHEDULE
          </a>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: '0.5rem' }}>
            <button 
              onClick={onOpenAdmin}
              className="btn-sih-outline"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              <Shield size={16} /> ADMIN LOGIN
            </button>

            <button 
              onClick={onOpenRegister}
              className="btn-sih-orange"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
            >
              REGISTER NOW
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: '#071F5B', cursor: 'pointer', display: 'none' }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#FFFFFF',
          borderBottom: '2px solid #E5E5E5',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)} style={{ color: '#071F5B', textDecoration: 'none', fontWeight: 700 }}>HOME</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#222222', textDecoration: 'none', fontWeight: 600 }}>ABOUT SIH</a>
          <a href="#highlights" onClick={() => setMobileMenuOpen(false)} style={{ color: '#222222', textDecoration: 'none', fontWeight: 600 }}>GUIDELINES</a>
          <a href="#event-info" onClick={() => setMobileMenuOpen(false)} style={{ color: '#222222', textDecoration: 'none', fontWeight: 600 }}>EVENT SCHEDULE</a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }} className="btn-sih-orange" style={{ width: '100%' }}>
              REGISTER NOW
            </button>
            <button onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }} className="btn-sih-outline" style={{ width: '100%' }}>
              ADMIN LOGIN
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
