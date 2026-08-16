import React from 'react';
import { X, Lock, Clock, Calendar, Mail, AlertTriangle } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const RegistrationClosedModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div 
        className="modal-content" 
        style={{ 
          maxWidth: '560px', 
          padding: 0, 
          background: '#FFFFFF', 
          borderRadius: '12px', 
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}
      >
        {/* Top Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: '#071F5B',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'rgba(220, 53, 69, 0.15)',
              border: '1px solid #DC3545',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#DC3545'
            }}>
              <Lock size={22} />
            </div>
            <div>
              <div className="sih-badge" style={{ background: '#DC3545', color: '#FFFFFF', fontSize: '0.62rem', padding: '0.1rem 0.45rem', marginBottom: '0.2rem' }}>
                STATUS: CLOSED
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#FFFFFF' }}>
                Registrations Closed
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '0.35rem', borderRadius: '50%', display: 'flex', alignItems: 'center' }}
            aria-label="Close Modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Decorative Strip */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #DC3545, #F56A00)' }} />

        {/* Body */}
        <div style={{ padding: '1.75rem', textAlign: 'center' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#FFF0F0',
            color: '#DC3545',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            border: '2px solid #F5C6CB'
          }}>
            <AlertTriangle size={34} />
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#071F5B', marginBottom: '0.6rem' }}>
            Registration Deadline Has Passed
          </h3>

          <p style={{ fontSize: '0.92rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '440px', margin: '0 auto 1.5rem' }}>
            The registration window for the <strong>SIH Internal Hackathon 2026</strong> at {hackathonConfig.COLLEGE.shortName} is now officially closed.
          </p>

          {/* Details Card */}
          <div style={{
            background: '#F8F8F6',
            border: '1px solid #E5E5E5',
            borderRadius: '8px',
            padding: '1.1rem',
            textAlign: 'left',
            marginBottom: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            fontSize: '0.88rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#222222' }}>
              <Clock size={18} style={{ color: '#DC3545', flexShrink: 0 }} />
              <div>
                <strong>Closed On:</strong> {hackathonConfig.EVENT_PLACEHOLDERS.registrationDeadline}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#222222' }}>
              <Calendar size={18} style={{ color: '#071F5B', flexShrink: 0 }} />
              <div>
                <strong>Event Date:</strong> {hackathonConfig.EVENT_PLACEHOLDERS.eventDate}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#222222' }}>
              <Mail size={18} style={{ color: '#F56A00', flexShrink: 0 }} />
              <div>
                <strong>Queries / Assistance:</strong> Contact Campus SPOC ({hackathonConfig.COLLEGE.spoc})
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-sih-orange"
            style={{ width: '100%', padding: '0.75rem', fontSize: '0.95rem', background: '#071F5B' }}
          >
            Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
