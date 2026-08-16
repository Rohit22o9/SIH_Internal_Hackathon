import React, { useState, useRef, useEffect } from 'react';
import { Shield, Sparkles, Menu, X, Award, ChevronDown, Download, FileText, Lock } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const Navbar = ({ onOpenRegister, onOpenAdmin, onOpenJuryRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResourcesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const resourceFiles = [
    {
      name: 'SIH Evaluation Sheet 2026',
      filename: 'SIH Evaluation Sheet 2026.docx',
      path: '/resources/SIH Evaluation Sheet 2026.docx',
      type: 'DOCX'
    },
    {
      name: 'SIH 2026 Guidelines JSCOE',
      filename: 'SIH_2026_Guidelines_JSCOE.pptx',
      path: '/resources/SIH_2026_Guidelines_JSCOE.pptx',
      type: 'PPTX'
    },
    {
      name: 'SIH 2026 Idea Presentation Format',
      filename: 'SIH2026-IDEA-Presentation-Format.pptx',
      path: '/resources/SIH2026-IDEA-Presentation-Format.pptx',
      type: 'PPTX'
    }
  ];

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
        maxWidth: '1440px',
        width: '96%',
        margin: '0 auto',
        padding: '0.85rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        {/* Left Side Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 1, minWidth: 0 }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '6px',
            background: '#071F5B',
            color: '#F56A00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1.1rem',
            border: '2px solid #F56A00',
            flexShrink: 0
          }}>
            SIH
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 800, fontSize: 'clamp(0.9rem, 3.6vw, 1.1rem)', color: '#071F5B', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                SIH 2026 Internal Hackathon
              </span>
              <span className="sih-badge sih-badge-orange" style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem' }}>CAMPUS ROUND</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#555555', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {hackathonConfig.COLLEGE.name}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-only">
          <a href="#home" style={{ color: '#071F5B', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
            HOME
          </a>
          <a href="#about" style={{ color: '#222222', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
            ABOUT SIH
          </a>
          <a href="#highlights" style={{ color: '#222222', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
            GUIDELINES
          </a>
          <a href="#event-info" style={{ color: '#222222', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
            EVENT SCHEDULE
          </a>

          {/* Resources Dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: resourcesDropdownOpen ? '#F56A00' : '#222222',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.2rem 0',
                whiteSpace: 'nowrap'
              }}
            >
              RESOURCES
              <ChevronDown
                size={15}
                style={{
                  transition: 'transform 0.2s ease',
                  transform: resourcesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </button>

            {resourcesDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 0.5rem)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#FFFFFF',
                border: '1px solid #E5E5E5',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(7, 31, 91, 0.12)',
                minWidth: '300px',
                padding: '0.6rem',
                zIndex: 200
              }}>
                <div style={{
                  padding: '0.4rem 0.6rem 0.6rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#888888',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #F0F0F0',
                  marginBottom: '0.4rem'
                }}>
                  Official Resources & Downloads
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {resourceFiles.map((file, index) => (
                    <a
                      key={index}
                      href={file.path}
                      download={file.filename}
                      onClick={() => setResourcesDropdownOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        color: '#071F5B',
                        transition: 'background 0.2s ease',
                        background: '#F8F8F6'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#EEF2FF'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#F8F8F6'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <FileText size={18} style={{ color: '#F56A00', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#071F5B' }}>
                          {file.name}
                        </span>
                      </div>
                      <span style={{
                        background: '#071F5B',
                        color: '#FFFFFF',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                      }}>
                        <Download size={10} /> {file.type}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginLeft: '0.25rem', flexShrink: 0 }}>
            <button 
              onClick={onOpenJuryRegister}
              className="btn-sih-outline"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem', whiteSpace: 'nowrap', borderColor: '#F56A00', color: '#F56A00' }}
            >
              <Award size={15} /> JURY REGISTRATION
            </button>

            <button 
              onClick={onOpenAdmin}
              className="btn-sih-outline"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem', whiteSpace: 'nowrap' }}
            >
              <Shield size={15} /> ADMIN LOGIN
            </button>

            <button 
              onClick={onOpenRegister}
              className={hackathonConfig.IS_REGISTRATION_OPEN ? "btn-sih-orange" : "btn-sih-outline"}
              style={{
                padding: '0.5rem 1.1rem',
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
                background: hackathonConfig.IS_REGISTRATION_OPEN ? undefined : '#DC3545',
                color: hackathonConfig.IS_REGISTRATION_OPEN ? undefined : '#FFFFFF',
                borderColor: hackathonConfig.IS_REGISTRATION_OPEN ? undefined : '#DC3545',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              {hackathonConfig.IS_REGISTRATION_OPEN ? (
                'REGISTER NOW'
              ) : (
                <>
                  <Lock size={15} /> REGISTRATION CLOSED
                </>
              )}
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
          
          {/* Mobile Resources Section */}
          <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '0.85rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F56A00', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              RESOURCES & DOWNLOADS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {resourceFiles.map((file, index) => (
                <a
                  key={index}
                  href={file.path}
                  download={file.filename}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.75rem',
                    background: '#F8F8F6',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    color: '#071F5B',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={16} style={{ color: '#F56A00' }} />
                    {file.name}
                  </span>
                  <Download size={14} style={{ color: '#071F5B' }} />
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }} 
              className={hackathonConfig.IS_REGISTRATION_OPEN ? "btn-sih-orange" : "btn-sih-outline"} 
              style={{ 
                width: '100%',
                background: hackathonConfig.IS_REGISTRATION_OPEN ? undefined : '#DC3545',
                color: hackathonConfig.IS_REGISTRATION_OPEN ? undefined : '#FFFFFF',
                borderColor: hackathonConfig.IS_REGISTRATION_OPEN ? undefined : '#DC3545',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              {hackathonConfig.IS_REGISTRATION_OPEN ? (
                'REGISTER NOW (TEAMS)'
              ) : (
                <>
                  <Lock size={16} /> REGISTRATION CLOSED
                </>
              )}
            </button>
            <button onClick={() => { setMobileMenuOpen(false); onOpenJuryRegister(); }} className="btn-sih-outline" style={{ width: '100%', borderColor: '#F56A00', color: '#F56A00' }}>
              <Award size={16} /> JURY REGISTRATION
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
