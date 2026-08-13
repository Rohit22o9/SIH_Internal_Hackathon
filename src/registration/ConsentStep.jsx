import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const ConsentStep = ({ consentAccepted, onChange }) => {
  const terms = [
    `I voluntarily agree to participate in the SIH Internal Hackathon organized by ${hackathonConfig.COLLEGE.name}.`,
    "I confirm that all information provided by me is correct and that I am a registered student of this college.",
    "I agree to follow all SIH and college rules, regulations, and instructions.",
    "I agree to accept the final decision of the Jury, Department, Principal, and College SPOC regarding team selection.",
    "I understand that any misbehavior, misconduct, indiscipline, or violation of rules may result in disciplinary action by the college.",
    "I consent to the use of my name, photographs, videos, and project details for official academic and promotional purposes."
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{
        padding: '0.75rem 1rem',
        background: '#F8F8F6',
        borderLeft: '4px solid #F56A00',
        border: '1px solid #E5E5E5',
        borderLeftWidth: '4px',
        borderRadius: '6px'
      }}>
        <h3 style={{ fontSize: 'clamp(0.95rem, 3.2vw, 1.1rem)', fontWeight: 800, color: '#071F5B', margin: 0, lineHeight: 1.3 }}>
          04 — STUDENT CONSENT
        </h3>
        <p style={{ fontSize: '0.78rem', color: '#555555', margin: '0.1rem 0 0' }}>
          Read the official student participation consent terms below.
        </p>
      </div>

      <div style={{
        background: '#F8F8F6',
        border: '1px solid #E5E5E5',
        borderRadius: '4px',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        {terms.map((term, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#222222', lineHeight: 1.5 }}>
            <span style={{ color: '#F56A00', fontWeight: 800 }}>{index + 1}.</span>
            <span>{term}</span>
          </div>
        ))}
      </div>

      <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem 1.25rem',
        background: consentAccepted ? '#e6f4ea' : '#FFFFFF',
        border: consentAccepted ? '1px solid #198754' : '1px solid #E5E5E5',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '0.5rem'
      }}>
        <input
          type="checkbox"
          checked={consentAccepted}
          onChange={(e) => onChange(e.target.checked)}
          style={{ width: '20px', height: '20px', accentColor: '#F56A00', cursor: 'pointer' }}
        />
        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#071F5B' }}>
          I have read, understood, and agree to all the above terms and conditions. <span style={{ color: '#F56A00' }}>*</span>
        </span>
      </label>

      {!consentAccepted && (
        <div style={{ fontSize: '0.82rem', color: '#DC3545', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
          <AlertCircle size={15} /> Consent checkbox must be accepted before submitting registration.
        </div>
      )}
    </div>
  );
};
