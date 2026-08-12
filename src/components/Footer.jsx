import React from 'react';
import { Shield, ExternalLink } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const Footer = ({ onOpenAdmin, onOpenRegister }) => {
  return (
    <footer style={{
      background: '#071F5B',
      color: '#FFFFFF',
      borderTop: '4px solid #F56A00',
      padding: '3.5rem 1.5rem 1.5rem'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '2.5rem'
        }}>
          {/* Column 1: College Info */}
          <div style={{ maxWidth: '480px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '4px',
                background: '#F56A00',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800
              }}>
                SIH
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#FFFFFF' }}>
                SIH Internal Hackathon 2026
              </span>
            </div>
            <p style={{ color: '#E0E0E0', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {hackathonConfig.COLLEGE.name}
            </p>
            <p style={{ color: '#B0C4DE', fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: 1.5 }}>
              {hackathonConfig.COLLEGE.location} <br />
              <strong>Principal:</strong> {hackathonConfig.COLLEGE.principal} • <strong>SPOC:</strong> {hackathonConfig.COLLEGE.spoc}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div style={{ color: '#F56A00', fontWeight: 800, fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Quick Links
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#home" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home Page</a></li>
              <li><a href="#about" style={{ color: '#FFFFFF', textDecoration: 'none' }}>About SIH 2026</a></li>
              <li><a href="#highlights" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Rulebook & Guidelines</a></li>
              <li><a href="#event-info" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Event Schedule</a></li>
            </ul>
          </div>

          {/* Column 3: Portals */}
          <div>
            <div style={{ color: '#F56A00', fontWeight: 800, fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Portals & Login
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={onOpenRegister} style={{ background: 'none', border: 'none', color: '#F56A00', cursor: 'pointer', padding: 0, fontWeight: 700, fontSize: 'inherit' }}>
                  Register 6-Member Team →
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, fontWeight: 600, fontSize: 'inherit' }}>
                  Admin Portal Login
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#B0C4DE'
        }}>
          <div>
            © 2026 {hackathonConfig.COLLEGE.shortName}. Developed for SIH Internal Selection Round.
          </div>
          <div>
            Official Smart India Hackathon Campus Portal
          </div>
        </div>
      </div>
    </footer>
  );
};
