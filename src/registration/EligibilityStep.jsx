import React from 'react';
import { ShieldCheck, AlertOctagon } from 'lucide-react';

export const EligibilityStep = ({ declarations = {}, onChange }) => {
  const handleCheckboxChange = (key, value) => {
    onChange({ ...declarations, [key]: value });
  };

  const declarationList = [
    { key: 'allBonaFide', label: 'I confirm that all six team members are JSCOE students of this college (JSPM JSCOE Pune).' },
    { key: 'notInterCollege', label: 'I confirm that this is not an inter-college team.' },
    { key: 'exactlySixMembers', label: 'I confirm that the team has exactly six student members.' },
    { key: 'atLeastOneFemale', label: 'I confirm that at least one member of the team is female.' },
    { key: 'infoCorrect', label: 'I confirm that all information submitted is correct.' },
    { key: 'collegeCanReject', label: 'I understand that the college may reject or modify the registration if any information is found to be incorrect.' }
  ];

  const allChecked = declarationList.every(item => !!declarations[item.key]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{
        padding: '0.85rem 1.25rem',
        background: '#F8F8F6',
        borderLeft: '4px solid #F56A00',
        border: '1px solid #E5E5E5',
        borderLeftWidth: '4px',
        borderRadius: '4px'
      }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#071F5B' }}>
          03 — ELIGIBILITY DECLARATION
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#555555' }}>
          All 6 statements below are mandatory and must be checked to confirm eligibility.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {declarationList.map((item, idx) => {
          const checked = !!declarations[item.key];
          return (
            <label
              key={item.key}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '0.85rem 1rem',
                background: checked ? '#e6f4ea' : '#FFFFFF',
                border: checked ? '1px solid #198754' : '1px solid #E5E5E5',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => handleCheckboxChange(item.key, e.target.checked)}
                style={{ width: '18px', height: '18px', marginTop: '0.15rem', accentColor: '#F56A00', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '0.9rem', color: checked ? '#071F5B' : '#333333', lineHeight: 1.5, fontWeight: checked ? 700 : 400 }}>
                {idx + 1}. {item.label}
              </span>
            </label>
          );
        })}
      </div>

      {!allChecked && (
        <div style={{
          padding: '0.75rem 1rem',
          background: '#FFF3CD',
          border: '1px solid #FFEBAA',
          borderRadius: '4px',
          fontSize: '0.85rem',
          color: '#856404',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: 600
        }}>
          <AlertOctagon size={16} /> All 6 eligibility declarations must be checked to proceed.
        </div>
      )}
    </div>
  );
};
