import React, { useState } from 'react';
import { X, Award, Send, CheckCircle2, AlertCircle, Building2, User, Phone, Mail, Briefcase } from 'lucide-react';
import { validateJuryData, submitJuryRegistration } from '../services/juryService';
import { hackathonConfig } from '../config/hackathonConfig';

export const JuryRegistrationModal = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organizationDepartment: '',
    mobile: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateJuryData(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitJuryRegistration(formData);
      setIsSubmitting(false);
      if (result && result.success) {
        setSubmittedData(result.record);
        if (onSuccess) onSuccess(result.record);
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Jury registration submission error:", err);
      setIsSubmitting(false);
      alert("An error occurred during submission. Please try again.");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content" style={{ maxWidth: '640px', padding: 0, background: '#FFFFFF', display: 'flex', flexDirection: 'column', borderRadius: '12px', overflow: 'hidden' }}>
        
        {/* Header */}
        <div style={{
          padding: '1.1rem 1.5rem',
          background: '#071F5B',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              background: 'rgba(245, 106, 0, 0.15)',
              border: '1px solid #F56A00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F56A00'
            }}>
              <Award size={24} />
            </div>
            <div>
              <div className="sih-badge sih-badge-orange" style={{ marginBottom: '0.2rem', fontSize: '0.62rem', padding: '0.1rem 0.45rem' }}>
                OFFICIAL EVALUATION PANEL
              </div>
              <h2 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)', fontWeight: 800, margin: 0, lineHeight: 1.2, color: '#FFFFFF' }}>
                Jury Member Registration
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

        {/* Top Decorative Line */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #F56A00, #FF7A00)' }} />

        {/* Content Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', maxHeight: 'calc(90vh - 120px)' }}>
          
          {submittedData ? (
            /* SUCCESS VIEW */
            <div style={{ textAlign: 'center', padding: '1rem 0.5rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#E6F4EA',
                color: '#198754',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}>
                <CheckCircle2 size={38} />
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#071F5B', margin: '0 0 0.5rem' }}>
                Registration Submitted Successfully!
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#555555', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.5 }}>
                Thank you, <strong>{submittedData.name}</strong>. Your details as a Jury Member for SIH 2026 Internal Hackathon at {hackathonConfig.COLLEGE.shortName} have been recorded.
              </p>

              {/* Receipt Summary Card */}
              <div style={{
                background: '#F8F8F6',
                border: '1px solid #E5E5E5',
                borderRadius: '8px',
                padding: '1.25rem',
                textAlign: 'left',
                marginBottom: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.88rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E5E5E5', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#666666', fontWeight: 600 }}>Jury Reference ID:</span>
                  <span style={{ fontWeight: 800, color: '#F56A00' }}>{submittedData.juryId}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666666', fontWeight: 600 }}>Full Name:</span>
                  <span style={{ fontWeight: 700, color: '#071F5B' }}>{submittedData.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666666', fontWeight: 600 }}>Designation:</span>
                  <span style={{ fontWeight: 700, color: '#071F5B' }}>{submittedData.designation}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666666', fontWeight: 600 }}>Organization/Department:</span>
                  <span style={{ fontWeight: 700, color: '#071F5B' }}>{submittedData.organizationDepartment}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666666', fontWeight: 600 }}>Mobile Number:</span>
                  <span style={{ fontWeight: 700, color: '#071F5B' }}>{submittedData.mobile}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666666', fontWeight: 600 }}>Email ID:</span>
                  <span style={{ fontWeight: 700, color: '#071F5B' }}>{submittedData.email}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="btn-sih-orange"
                style={{ padding: '0.65rem 2rem', fontSize: '0.95rem', width: '100%' }}
              >
                Close Window
              </button>
            </div>
          ) : (
            /* FORM VIEW */
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{
                padding: '0.85rem 1rem',
                background: '#EEF2FF',
                borderLeft: '4px solid #071F5B',
                borderRadius: '6px'
              }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#071F5B' }}>
                  SIH 2026 Jury Member Profile Details
                </div>
                <div style={{ fontSize: '0.78rem', color: '#555555', marginTop: '0.2rem' }}>
                  Please enter your official details below to register as an evaluator for the SIH 2026 Internal Hackathon.
                </div>
              </div>

              {/* 1. Name of the Jury */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <User size={15} style={{ color: '#F56A00' }} />
                  Name of the Jury <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="e.g. Dr. Ramesh Patil / Ms. Sneha Kulkarni"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
                {errors.name && <div className="error-text"><AlertCircle size={14} />{errors.name}</div>}
              </div>

              {/* 2. Designation of Jury */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Briefcase size={15} style={{ color: '#F56A00' }} />
                  Designation of Jury <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                  placeholder="e.g. Senior Tech Lead / Associate Professor / Vice President"
                  value={formData.designation}
                  onChange={(e) => handleChange('designation', e.target.value)}
                />
                {errors.designation && <div className="error-text"><AlertCircle size={14} />{errors.designation}</div>}
              </div>

              {/* 3. Organization/Department of Jury */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Building2 size={15} style={{ color: '#F56A00' }} />
                  Organization/Department of Jury <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.organizationDepartment ? 'is-invalid' : ''}`}
                  placeholder="e.g. Infosys / Dept. of Computer Engineering, COEP"
                  value={formData.organizationDepartment}
                  onChange={(e) => handleChange('organizationDepartment', e.target.value)}
                />
                {errors.organizationDepartment && <div className="error-text"><AlertCircle size={14} />{errors.organizationDepartment}</div>}
              </div>

              {/* 4. Mobile No of Jury */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Phone size={15} style={{ color: '#F56A00' }} />
                  Mobile No of Jury <span className="required">*</span>
                </label>
                <input
                  type="text"
                  maxLength={10}
                  className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                  placeholder="e.g. 9876543210"
                  value={formData.mobile}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, '');
                    handleChange('mobile', digits);
                  }}
                />
                {errors.mobile && <div className="error-text"><AlertCircle size={14} />{errors.mobile}</div>}
              </div>

              {/* 5. Email ID of Jury */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Mail size={15} style={{ color: '#F56A00' }} />
                  Email ID of Jury <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="e.g. jury.member@organization.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && <div className="error-text"><AlertCircle size={14} />{errors.email}</div>}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '0.85rem',
                justifyContent: 'flex-end',
                marginTop: '0.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid #E5E5E5'
              }}>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-sih-outline"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-sih-orange"
                  style={{ padding: '0.6rem 1.5rem', fontSize: '0.88rem' }}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT JURY DETAILS'} <Send size={16} />
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
