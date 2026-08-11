import React from 'react';
import { CheckCircle2, Download, X } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { hackathonConfig } from '../config/hackathonConfig';

export const RegistrationSuccessModal = ({ registrationData, onClose }) => {
  const { registrationId, teamRecord } = registrationData;

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const margin = 20;

    // Header
    doc.setFillColor(7, 31, 91);
    doc.rect(0, 0, 210, 38, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(15);
    doc.setFont('helvetica', 'bold');
    doc.text("SIH INTERNAL HACKATHON 2026", margin, 16);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(hackathonConfig.COLLEGE.name, margin, 24);

    // Registration Box
    doc.setFillColor(248, 248, 246);
    doc.setDrawColor(245, 106, 0);
    doc.rect(margin, 46, 170, 24, 'FD');

    doc.setTextColor(7, 31, 91);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`REGISTRATION ID: ${registrationId}`, margin + 5, 56);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(85, 85, 85);
    doc.text(`Registered On: ${teamRecord.registrationDate} at ${teamRecord.registrationTime}`, margin + 5, 64);

    // Team Summary
    let y = 82;
    doc.setTextColor(7, 31, 91);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text("TEAM INFORMATION", margin, y);
    y += 6;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text("Team Name:", margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(teamRecord.teamName, margin + 40, y);
    y += 6;

    doc.setFont('helvetica', 'bold');
    doc.text("SIH Theme:", margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(teamRecord.theme, margin + 40, y);
    y += 6;

    doc.setFont('helvetica', 'bold');
    doc.text("Project Title:", margin, y);
    doc.setFont('helvetica', 'normal');
    const splitTitle = doc.splitTextToSize(teamRecord.projectTitle, 125);
    doc.text(splitTitle, margin + 40, y);
    y += (splitTitle.length * 5) + 2;

    doc.setFont('helvetica', 'bold');
    doc.text("Team Leader:", margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(teamRecord.teamLeader, margin + 40, y);
    y += 6;

    doc.setFont('helvetica', 'bold');
    doc.text("Mentor Name:", margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(teamRecord.mentorName || "N/A", margin + 40, y);
    y += 12;

    // Student Members Table
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text("REGISTERED TEAM MEMBERS (6 STUDENTS)", margin, y);
    y += 8;

    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.setFillColor(230, 230, 230);
    doc.rect(margin, y - 4, 170, 7, 'F');
    doc.text("#", margin + 2, y);
    doc.text("Student Name", margin + 10, y);
    doc.text("PRN", margin + 65, y);
    doc.text("Dept", margin + 95, y);
    doc.text("Gender", margin + 120, y);
    doc.text("Mobile", margin + 145, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    teamRecord.members.forEach((m, i) => {
      doc.text(`${i + 1}${m.isLeader ? ' (L)' : ''}`, margin + 2, y);
      doc.text(m.fullName.substring(0, 24), margin + 10, y);
      doc.text(m.prn, margin + 65, y);
      doc.text(m.department, margin + 95, y);
      doc.text(m.gender, margin + 120, y);
      doc.text(m.mobile, margin + 145, y);
      y += 6;
    });

    y += 10;
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("Official SIH Internal Registration Record • JSPM's Sawant College of Engineering Pune", margin, y);

    doc.save(`${teamRecord.teamName}_SIH2026_Registration.pdf`);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content" style={{ maxWidth: '600px', padding: '2.5rem', textAlign: 'center', background: '#FFFFFF' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#555', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>

        {/* Orange Checkmark Icon */}
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: '#ffefe5',
          color: '#F56A00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
          border: '2px solid #F56A00'
        }}>
          <CheckCircle2 size={36} />
        </div>

        {/* Heading */}
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#071F5B', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
          REGISTRATION SUCCESSFUL
        </h2>
        <p style={{ color: '#555555', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
          Your 6-member team registration has been recorded for SIH Internal Hackathon 2026.
        </p>

        {/* Registration ID Box */}
        <div style={{
          background: '#F8F8F6',
          border: '2px solid #071F5B',
          borderRadius: '6px',
          padding: '1.25rem',
          marginBottom: '1.75rem'
        }}>
          <div style={{ fontSize: '0.78rem', color: '#555555', textTransform: 'uppercase', fontWeight: 700 }}>
            OFFICIAL REGISTRATION ID
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F56A00', letterSpacing: '0.05em', marginTop: '0.2rem' }}>
            {registrationId}
          </div>
        </div>

        {/* Summary Table */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E5E5E5',
          borderRadius: '4px',
          padding: '1.25rem',
          textAlign: 'left',
          marginBottom: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          fontSize: '0.9rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#555555' }}>Team Name:</span>
            <strong style={{ color: '#071F5B' }}>{teamRecord.teamName}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#555555' }}>SIH Theme / Domain:</span>
            <strong style={{ color: '#F56A00' }}>{teamRecord.theme}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#555555' }}>Project Title:</span>
            <strong style={{ color: '#071F5B', maxWidth: '280px', textAlign: 'right' }}>{teamRecord.projectTitle}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#555555' }}>Team Leader:</span>
            <strong style={{ color: '#071F5B' }}>{teamRecord.teamLeader}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#555555' }}>Total Members:</span>
            <strong style={{ color: '#198754' }}>6 Students (Female Included)</strong>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={handleDownloadPDF}
            className="btn-sih-orange"
            style={{ padding: '0.75rem 1.5rem' }}
          >
            <Download size={18} /> Download Registration Summary (PDF)
          </button>
          
          <button
            onClick={onClose}
            className="btn-sih-outline"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
