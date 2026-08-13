import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

import minEduLogo from '../assets/logos/ministry of education.png';
import aicteLogo from '../assets/logos/aictc.jpg';
import moeLogo from '../assets/logos/moe innovation cell.jpg';
import sihLogo from '../assets/logos/sih 2026.png';

import jspmLogo from '../assets/logos/jspm-logo.png';
import jscoeLogo from '../assets/logos/jscoe-logo.png';
import iicLogo from '../assets/logos/iic-logo.png';
import sdg1Logo from '../assets/logos/SDG 1.jpg';

export const Hero = ({ onOpenRegister }) => {
  return (
    <section id="home" style={{
      background: '#F8F8F6',
      borderBottom: '1px solid #E5E5E5',
      paddingBottom: '4rem'
    }}>
      {/* Logos Strip Below Navbar */}
      <div style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E5E5E5',
        padding: '0.85rem 1rem',
        marginBottom: '2.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem 1.5rem'
        }}>
          <img src={minEduLogo} alt="Ministry of Education" style={{ height: 'clamp(32px, 5vw, 45px)', maxWidth: '140px', objectFit: 'contain' }} />
          <img src={aicteLogo} alt="AICTE" style={{ height: 'clamp(32px, 5vw, 45px)', maxWidth: '140px', objectFit: 'contain' }} />
          <img src={moeLogo} alt="MoE Innovation Cell" style={{ height: 'clamp(32px, 5vw, 45px)', maxWidth: '140px', objectFit: 'contain' }} />
          <img src={sihLogo} alt="SIH 2026" style={{ height: 'clamp(32px, 5vw, 45px)', maxWidth: '140px', objectFit: 'contain' }} />
          <img src={jspmLogo} alt="JSPM" style={{ height: 'clamp(32px, 5vw, 45px)', maxWidth: '140px', objectFit: 'contain' }} />
          <img src={jscoeLogo} alt="JSCOE" style={{ height: 'clamp(32px, 5vw, 45px)', maxWidth: '140px', objectFit: 'contain' }} />
          <img src={iicLogo} alt="IIC" style={{ height: 'clamp(32px, 5vw, 45px)', maxWidth: '140px', objectFit: 'contain' }} />
          <img src={sdg1Logo} alt="SDG 1" style={{ height: 'clamp(32px, 5vw, 45px)', maxWidth: '140px', objectFit: 'contain' }} />
        </div>
      </div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.25rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Top Official Banner Tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          background: '#071F5B',
          color: '#FFFFFF',
          padding: '0.4rem 1rem',
          borderRadius: '4px',
          fontSize: 'clamp(0.72rem, 2.2vw, 0.85rem)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
          marginBottom: '1.25rem',
          textAlign: 'center',
          maxWidth: '100%'
        }}>
          <Award size={16} style={{ color: '#F56A00', flexShrink: 0 }} />
          <span>SMART INDIA HACKATHON 2026 • OFFICIAL CAMPUS SELECTION</span>
        </div>

        {/* College Subheading */}
        <div style={{
          fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
          fontWeight: 700,
          color: '#F56A00',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
          marginBottom: '0.5rem'
        }}>
          {hackathonConfig.COLLEGE.name}
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(1.9rem, 5vw, 3.8rem)',
          fontWeight: 800,
          color: '#071F5B',
          lineHeight: 1.15,
          marginBottom: '1rem',
          maxWidth: '920px'
        }}>
          SIH Internal Hackathon <span style={{ color: '#F56A00' }}>2026</span>
        </h1>

        {/* Tagline */}
        <div style={{
          fontSize: 'clamp(1.15rem, 3vw, 1.8rem)',
          fontWeight: 700,
          color: '#071F5B',
          marginBottom: '1.25rem'
        }}>
          Turn Ideas Into Impact. Innovate. Build. Solve.
        </div>

        {/* Institutional Description */}
        <p style={{
          fontSize: 'clamp(0.92rem, 2vw, 1.08rem)',
          color: '#444444',
          maxWidth: '820px',
          lineHeight: 1.6,
          marginBottom: '2rem'
        }}>
          Welcome to the official internal hackathon selection round organized by JSPM's Jayawantrao Sawant College of Engineering, Pune. Form your 6-member student team to solve real-world problem statements and get nominated for the National Smart India Hackathon 2026 finale.
        </p>

        {/* Register CTA Button */}
        <div style={{ marginBottom: '3rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <button 
            onClick={onOpenRegister}
            className="btn-sih-orange"
            style={{ padding: '0.85rem 2.25rem', fontSize: '1.05rem', borderRadius: '4px', maxWidth: '100%' }}
          >
            REGISTER NOW <ArrowRight size={20} />
          </button>
        </div>

        {/* Event Information 4 Columns Strip */}
        <div className="grid-4" style={{ width: '100%', maxWidth: '1150px' }}>
          {/* Event Date */}
          <div className="sih-card" style={{ textAlign: 'left', borderTop: '4px solid #F56A00' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <Calendar size={20} style={{ color: '#F56A00' }} />
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#071F5B', textTransform: 'uppercase' }}>
                EVENT DATE
              </div>
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#222222' }}>
              {hackathonConfig.EVENT_PLACEHOLDERS.eventDate}
            </div>
          </div>

          {/* Registration Deadline */}
          <div className="sih-card" style={{ textAlign: 'left', borderTop: '4px solid #071F5B' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <Clock size={20} style={{ color: '#071F5B' }} />
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#071F5B', textTransform: 'uppercase' }}>
                REGISTRATION DEADLINE
              </div>
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#222222' }}>
              {hackathonConfig.EVENT_PLACEHOLDERS.registrationDeadline}
            </div>
          </div>

          {/* Venue */}
          <div className="sih-card" style={{ textAlign: 'left', borderTop: '4px solid #F56A00' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <MapPin size={20} style={{ color: '#F56A00' }} />
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#071F5B', textTransform: 'uppercase' }}>
                VENUE
              </div>
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#222222' }}>
              {hackathonConfig.EVENT_PLACEHOLDERS.venue}
            </div>
          </div>

          {/* Team Size Rule */}
          <div className="sih-card" style={{ textAlign: 'left', borderTop: '4px solid #071F5B' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <Users size={20} style={{ color: '#071F5B' }} />
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#071F5B', textTransform: 'uppercase' }}>
                TEAM SIZE
              </div>
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#222222' }}>
              Exactly 6 Students (Min 1 Female)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
