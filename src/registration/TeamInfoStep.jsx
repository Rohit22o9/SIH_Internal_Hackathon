import React from 'react';
import { Users, AlertCircle } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const TeamInfoStep = ({
  teamInformation,
  onChange,
  students = [],
  errors = {}
}) => {
  const handleFieldChange = (field, value) => {
    onChange({ ...teamInformation, [field]: value });
  };

  const studentLeaderOptions = students
    .map(s => s.fullName ? s.fullName.trim() : '')
    .filter(name => name.length > 0);

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
          02 — TEAM INFORMATION
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#555555' }}>
          Enter unique team identity, project title, SIH theme, and team leader assignment.
        </p>
      </div>

      <div className="grid-2">
        {/* 1. Team Name */}
        <div className="form-group">
          <label className="form-label">
            Team Name <span className="required">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.teamName ? 'is-invalid' : ''}`}
            placeholder="e.g. CyberCrafters, NeuralPulse"
            value={teamInformation.teamName || ''}
            onChange={(e) => handleFieldChange('teamName', e.target.value)}
          />
          {errors.teamName && <div className="error-text"><AlertCircle size={14} />{errors.teamName}</div>}
          <span style={{ fontSize: '0.78rem', color: '#666666', marginTop: '0.2rem' }}>
            Rules: Must be unique. Must NOT contain college names or abbreviations (e.g. JSPM, JSCOE, Sawant, College).
          </span>
        </div>

        {/* 2. Theme / Domain */}
        <div className="form-group">
          <label className="form-label">
            Theme / Domain <span className="required">*</span>
          </label>
          <select
            className={`form-control ${errors.theme ? 'is-invalid' : ''}`}
            value={teamInformation.theme || ''}
            onChange={(e) => handleFieldChange('theme', e.target.value)}
          >
            <option value="">Select SIH Theme</option>
            {hackathonConfig.THEMES.map((th) => (
              <option key={th} value={th}>{th}</option>
            ))}
          </select>
          {errors.theme && <div className="error-text"><AlertCircle size={14} />{errors.theme}</div>}
        </div>
      </div>

      {/* 3. Project Title */}
      <div className="form-group">
        <label className="form-label">
          Project Title <span className="required">*</span>
        </label>
        <input
          type="text"
          className={`form-control ${errors.projectTitle ? 'is-invalid' : ''}`}
          placeholder="e.g. AI-Based Real-Time Ransomware Detection and Automated Response System"
          value={teamInformation.projectTitle || ''}
          onChange={(e) => handleFieldChange('projectTitle', e.target.value)}
        />
        {errors.projectTitle && <div className="error-text"><AlertCircle size={14} />{errors.projectTitle}</div>}
      </div>

      <div className="grid-2">
        {/* 4. Team Leader Name */}
        <div className="form-group">
          <label className="form-label">
            Team Leader Name <span className="required">*</span>
          </label>
          {studentLeaderOptions.length > 0 ? (
            <select
              className={`form-control ${errors.teamLeaderName ? 'is-invalid' : ''}`}
              value={teamInformation.teamLeaderName || ''}
              onChange={(e) => handleFieldChange('teamLeaderName', e.target.value)}
            >
              <option value="">Select Leader from 6 Team Members</option>
              {studentLeaderOptions.map((name, idx) => (
                <option key={idx} value={name}>{name} (Student {idx + 1})</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              className={`form-control ${errors.teamLeaderName ? 'is-invalid' : ''}`}
              placeholder="Enter student full name"
              value={teamInformation.teamLeaderName || ''}
              onChange={(e) => handleFieldChange('teamLeaderName', e.target.value)}
            />
          )}
          {errors.teamLeaderName && <div className="error-text"><AlertCircle size={14} />{errors.teamLeaderName}</div>}
        </div>

        {/* 5. Mentor Name (Optional) */}
        <div className="form-group">
          <label className="form-label">
            Mentor Name (Optional)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Dr. S. K. Kulkarni (Optional)"
            value={teamInformation.mentorName || ''}
            onChange={(e) => handleFieldChange('mentorName', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
