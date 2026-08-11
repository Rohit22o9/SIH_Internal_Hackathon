import React from 'react';
import { User, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const StudentFormStep = ({
  studentIndex,
  studentData,
  onChange,
  errors = {}
}) => {
  const isLeader = studentIndex === 0;

  const handleFieldChange = (field, value) => {
    onChange(studentIndex, { ...studentData, [field]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
        alert("Please upload a valid JPG, JPEG, or PNG image.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Image file size must be less than 5MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(studentIndex, {
          ...studentData,
          photoFile: file,
          photoUrl: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Section Header */}
      <div style={{
        padding: '0.85rem 1.25rem',
        background: '#F8F8F6',
        borderLeft: '4px solid #F56A00',
        border: '1px solid #E5E5E5',
        borderLeftWidth: '4px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#071F5B' }}>
            01 — STUDENT INFORMATION ({studentIndex + 1} OF 6)
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#555555' }}>
            {isLeader ? 'Student 1 / Team Leader Details' : `Student ${studentIndex + 1} Member Details`}
          </p>
        </div>
        {isLeader && <span className="sih-badge sih-badge-orange">TEAM LEADER</span>}
      </div>

      {/* Grid Inputs */}
      <div className="grid-2">
        {/* 1. Full Name */}
        <div className="form-group">
          <label className="form-label">
            Full Name as per College Record <span className="required">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            placeholder="e.g. Aarav Rajesh Sharma"
            value={studentData.fullName || ''}
            onChange={(e) => handleFieldChange('fullName', e.target.value)}
          />
          {errors.fullName && <div className="error-text"><AlertCircle size={14} />{errors.fullName}</div>}
        </div>

        {/* 2. PRN Number */}
        <div className="form-group">
          <label className="form-label">
            PRN Number (Digits only) <span className="required">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.prn ? 'is-invalid' : ''}`}
            placeholder="e.g. 72145892"
            value={studentData.prn || ''}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, ''); // Digits only
              handleFieldChange('prn', val);
            }}
          />
          {errors.prn && <div className="error-text"><AlertCircle size={14} />{errors.prn}</div>}
        </div>
      </div>

      <div className="grid-3">
        {/* 3. Branch / Department */}
        <div className="form-group">
          <label className="form-label">
            Branch / Department <span className="required">*</span>
          </label>
          <select
            className={`form-control ${errors.department ? 'is-invalid' : ''}`}
            value={studentData.department || ''}
            onChange={(e) => handleFieldChange('department', e.target.value)}
          >
            <option value="">Select Department</option>
            {hackathonConfig.DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          {errors.department && <div className="error-text"><AlertCircle size={14} />{errors.department}</div>}
        </div>

        {/* 4. Year of Study */}
        <div className="form-group">
          <label className="form-label">
            Year of Study <span className="required">*</span>
          </label>
          <select
            className={`form-control ${errors.year ? 'is-invalid' : ''}`}
            value={studentData.year || ''}
            onChange={(e) => handleFieldChange('year', e.target.value)}
          >
            <option value="">Select Year</option>
            {hackathonConfig.YEARS_OF_STUDY.map((yr) => (
              <option key={yr} value={yr}>{yr}</option>
            ))}
          </select>
          {errors.year && <div className="error-text"><AlertCircle size={14} />{errors.year}</div>}
        </div>

        {/* 5. Semester */}
        <div className="form-group">
          <label className="form-label">
            Semester <span className="required">*</span>
          </label>
          <select
            className={`form-control ${errors.semester ? 'is-invalid' : ''}`}
            value={studentData.semester || ''}
            onChange={(e) => handleFieldChange('semester', e.target.value)}
          >
            <option value="">Select Semester</option>
            {hackathonConfig.SEMESTERS.map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
          {errors.semester && <div className="error-text"><AlertCircle size={14} />{errors.semester}</div>}
        </div>
      </div>

      <div className="grid-3">
        {/* 6. Gender */}
        <div className="form-group">
          <label className="form-label">
            Gender <span className="required">*</span>
          </label>
          <select
            className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
            value={studentData.gender || ''}
            onChange={(e) => handleFieldChange('gender', e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <div className="error-text"><AlertCircle size={14} />{errors.gender}</div>}
        </div>

        {/* 7. Email ID */}
        <div className="form-group">
          <label className="form-label">
            Email ID <span className="required">*</span>
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="student@jscoe.edu.in"
            value={studentData.email || ''}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
          {errors.email && <div className="error-text"><AlertCircle size={14} />{errors.email}</div>}
        </div>

        {/* 8. Mobile Number */}
        <div className="form-group">
          <label className="form-label">
            Mobile Number (10 Digits) <span className="required">*</span>
          </label>
          <input
            type="text"
            maxLength={10}
            className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
            placeholder="9876543210"
            value={studentData.mobile || ''}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, ''); // Digits only
              handleFieldChange('mobile', val);
            }}
          />
          {errors.mobile && <div className="error-text"><AlertCircle size={14} />{errors.mobile}</div>}
        </div>
      </div>

      {/* 9. Technical & Domain Skills */}
      <div className="form-group">
        <label className="form-label">
          Technical & Domain Skills <span className="required">*</span>
        </label>
        <textarea
          className={`form-control ${errors.skills ? 'is-invalid' : ''}`}
          placeholder="e.g. Python, React, Machine Learning, Embedded C, AWS"
          rows={2}
          value={studentData.skills || ''}
          onChange={(e) => handleFieldChange('skills', e.target.value)}
        />
        {errors.skills && <div className="error-text"><AlertCircle size={14} />{errors.skills}</div>}
      </div>

      {/* 10. Student Photograph / ID Card Upload */}
      <div className="form-group">
        <label className="form-label">
          Student Photograph / College ID Card (JPG/PNG) <span className="required">*</span>
        </label>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <label style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#F8F8F6',
            color: '#071F5B',
            border: '1px solid #D9D9D9',
            padding: '0.65rem 1.25rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '0.88rem'
          }}>
            <Upload size={16} style={{ color: '#F56A00' }} />
            {studentData.photoFile ? 'Change Uploaded File' : 'Choose Photograph / ID Card'}
            <input
              type="file"
              accept="image/jpeg,image/jpg,image/png"
              onChange={handlePhotoUpload}
              style={{ display: 'none' }}
            />
          </label>

          {studentData.photoUrl && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <img
                src={studentData.photoUrl}
                alt="Preview"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '4px',
                  objectFit: 'cover',
                  border: '1px solid #071F5B'
                }}
              />
              <span style={{ fontSize: '0.82rem', color: '#198754', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle size={14} /> Image Attached
              </span>
            </div>
          )}
        </div>
        {errors.photo && <div className="error-text"><AlertCircle size={14} />{errors.photo}</div>}
      </div>
    </div>
  );
};
