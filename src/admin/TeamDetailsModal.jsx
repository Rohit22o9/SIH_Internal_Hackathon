import React from 'react';
import { X, Crown, Mail, Phone, Code, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TeamDetailsModal = ({ team, onClose }) => {
  if (!team) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content" style={{ maxWidth: '920px', padding: '2rem', background: '#FFFFFF' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#555', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid #E5E5E5', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span className="sih-badge sih-badge-orange">{team.registrationId}</span>
            <span className="sih-badge sih-badge-green"><CheckCircle2 size={12} /> {team.status || 'Verified'}</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#071F5B' }}>
            {team.teamName}
          </h2>
          <p style={{ color: '#F56A00', fontSize: '1rem', fontWeight: 700, marginTop: '0.2rem' }}>
            {team.projectTitle}
          </p>
        </div>

        {/* Overview Box */}
        <div style={{
          background: '#F8F8F6',
          border: '1px solid #E5E5E5',
          borderRadius: '4px',
          padding: '1rem 1.25rem',
          marginBottom: '1.75rem'
        }} className="grid-3">
          <div>
            <div style={{ fontSize: '0.75rem', color: '#555555', textTransform: 'uppercase', fontWeight: 700 }}>SIH Theme</div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#071F5B', marginTop: '0.2rem' }}>{team.theme}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#555555', textTransform: 'uppercase', fontWeight: 700 }}>Team Leader</div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#F56A00', marginTop: '0.2rem' }}>{team.teamLeader}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#555555', textTransform: 'uppercase', fontWeight: 700 }}>Mentor Name</div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#071F5B', marginTop: '0.2rem' }}>{team.mentorName || 'N/A'}</div>
          </div>
        </div>

        {/* 6 Members Detailed Grid */}
        <div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#071F5B', marginBottom: '1rem', textTransform: 'uppercase' }}>
            REGISTERED 6 TEAM MEMBERS
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {team.members && team.members.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: member.isLeader ? '#ffefe5' : '#FFFFFF',
                  border: member.isLeader ? '1px solid #ffd3b3' : '1px solid #E5E5E5',
                  borderLeft: member.isLeader ? '4px solid #F56A00' : '4px solid #071F5B',
                  borderRadius: '4px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  alignItems: 'center'
                }}
              >
                {/* Photo Preview */}
                <div style={{ position: 'relative' }}>
                  <img
                    src={member.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.fullName)}&background=071F5B&color=fff`}
                    alt={member.fullName}
                    style={{
                      width: '65px',
                      height: '65px',
                      borderRadius: '4px',
                      objectFit: 'cover',
                      border: '1px solid #071F5B'
                    }}
                  />
                  {member.isLeader && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-4px',
                      right: '-4px',
                      background: '#F56A00',
                      color: '#FFFFFF',
                      borderRadius: '50%',
                      padding: '2px'
                    }}>
                      <Crown size={12} />
                    </div>
                  )}
                </div>

                {/* Member Details */}
                <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#071F5B' }}>
                      {member.fullName}
                    </span>
                    {member.isLeader && <span className="sih-badge sih-badge-orange">LEADER</span>}
                    <span className="sih-badge sih-badge-navy">{member.gender}</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', fontSize: '0.82rem', color: '#333333', marginTop: '0.2rem' }}>
                    <span><strong>PRN:</strong> {member.prn}</span>
                    <span><strong>Dept:</strong> {member.department}</span>
                    <span><strong>Year:</strong> {member.year}</span>
                    <span><strong>Sem:</strong> {member.semester}</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', fontSize: '0.8rem', color: '#555555', marginTop: '0.2rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Mail size={12} /> {member.email}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Phone size={12} /> {member.mobile}</span>
                  </div>
                </div>

                {/* Skills */}
                <div style={{ flex: '1 1 200px', background: '#F8F8F6', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid #E5E5E5' }}>
                  <div style={{ fontSize: '0.72rem', color: '#071F5B', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Code size={12} /> Technical Skills
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#222222', fontWeight: 600, marginTop: '0.2rem' }}>
                    {member.skills}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
