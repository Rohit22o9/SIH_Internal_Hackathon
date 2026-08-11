import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, CheckCircle2, Shield, AlertTriangle, Send } from 'lucide-react';
import { StudentFormStep } from './StudentFormStep';
import { TeamInfoStep } from './TeamInfoStep';
import { EligibilityStep } from './EligibilityStep';
import { ConsentStep } from './ConsentStep';
import { RegistrationSuccessModal } from './RegistrationSuccessModal';
import { validateFullRegistration } from '../services/registrationService';
import { submitTeamRegistration, getStoredTeams } from '../services/googleSheetsService';
import { hackathonConfig } from '../config/hackathonConfig';

const initialStudentState = {
  fullName: '',
  prn: '',
  department: '',
  year: '',
  semester: '',
  gender: '',
  email: '',
  mobile: '',
  skills: '',
  photoFile: null,
  photoUrl: ''
};

export const RegistrationModal = ({ onClose, onRegistrationSuccess }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [students, setStudents] = useState(
    Array.from({ length: 6 }, (_, i) => ({ ...initialStudentState }))
  );
  const [teamInformation, setTeamInformation] = useState({
    teamName: '',
    theme: '',
    projectTitle: '',
    teamLeaderName: '',
    mentorName: ''
  });
  const [declarations, setDeclarations] = useState({
    allBonaFide: false,
    notInterCollege: false,
    exactlySixMembers: false,
    atLeastOneFemale: false,
    infoCorrect: false,
    collegeCanReject: false
  });
  const [consentAccepted, setConsentAccepted] = useState(false);

  const [validationErrors, setValidationErrors] = useState({ globalErrors: [], studentErrors: [] });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const steps = [
    { title: "Student 1 (Leader)", short: "S1" },
    { title: "Student 2", short: "S2" },
    { title: "Student 3", short: "S3" },
    { title: "Student 4", short: "S4" },
    { title: "Student 5", short: "S5" },
    { title: "Student 6", short: "S6" },
    { title: "Team Details", short: "Team" },
    { title: "Eligibility", short: "Rules" },
    { title: "Consent & Submit", short: "Submit" }
  ];

  const handleStudentChange = (index, updatedStudentData) => {
    const updated = [...students];
    updated[index] = updatedStudentData;
    setStudents(updated);

    if (index === 0 && updatedStudentData.fullName && !teamInformation.teamLeaderName) {
      setTeamInformation(prev => ({ ...prev, teamLeaderName: updatedStudentData.fullName }));
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const existingTeams = await getStoredTeams();

    const formData = {
      students,
      teamInformation,
      declarations,
      consentAccepted
    };

    const validation = validateFullRegistration(formData, existingTeams);
    setValidationErrors(validation);

    if (!validation.isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitTeamRegistration(formData);
      setIsSubmitting(false);
      if (result.success) {
        setSuccessData(result);
        if (onRegistrationSuccess) onRegistrationSuccess();
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setIsSubmitting(false);
      alert("Submission error occurred. Please try again.");
    }
  };

  if (successData) {
    return (
      <RegistrationSuccessModal
        registrationData={successData}
        onClose={onClose}
      />
    );
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content" style={{ maxWidth: '940px', padding: 0, background: '#FFFFFF' }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          background: '#071F5B',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div className="sih-badge sih-badge-orange" style={{ marginBottom: '0.25rem' }}>
              6-MEMBER TEAM REGISTRATION
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800 }}>
              SIH Internal Hackathon 2026 Registration Form
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          background: '#F8F8F6',
          padding: '0.75rem 1.25rem',
          gap: '0.4rem',
          borderBottom: '1px solid #E5E5E5'
        }}>
          {steps.map((step, idx) => {
            const isActive = idx === currentStep;
            const isCompleted = idx < currentStep;
            return (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '4px',
                  border: isActive ? '2px solid #F56A00' : isCompleted ? '1px solid #198754' : '1px solid #D9D9D9',
                  background: isActive ? '#F56A00' : isCompleted ? '#e6f4ea' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : isCompleted ? '#198754' : '#071F5B',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {isCompleted ? <CheckCircle2 size={13} /> : (idx + 1)}
                <span>{step.short}</span>
              </button>
            );
          })}
        </div>

        {/* Body Content */}
        <div style={{ padding: '1.75rem', overflowY: 'auto', maxHeight: 'calc(85vh - 170px)' }}>
          {/* Validation Banner Errors */}
          {validationErrors.globalErrors.length > 0 && (
            <div style={{
              padding: '1rem',
              background: '#F8D7DA',
              border: '1px solid #F5C6CB',
              borderRadius: '4px',
              marginBottom: '1.5rem',
              color: '#721C24',
              fontSize: '0.88rem'
            }}>
              <div style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <AlertTriangle size={18} /> Please correct the following registration errors:
              </div>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {validationErrors.globalErrors.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Step View */}
          {currentStep < 6 && (
            <StudentFormStep
              studentIndex={currentStep}
              studentData={students[currentStep]}
              onChange={handleStudentChange}
              errors={validationErrors.studentErrors[currentStep] || {}}
            />
          )}

          {currentStep === 6 && (
            <TeamInfoStep
              teamInformation={teamInformation}
              onChange={setTeamInformation}
              students={students}
              errors={{}}
            />
          )}

          {currentStep === 7 && (
            <EligibilityStep
              declarations={declarations}
              onChange={setDeclarations}
            />
          )}

          {currentStep === 8 && (
            <ConsentStep
              consentAccepted={consentAccepted}
              onChange={setConsentAccepted}
            />
          )}
        </div>

        {/* Footer Controls */}
        <div style={{
          padding: '1rem 1.75rem',
          background: '#F8F8F6',
          borderTop: '1px solid #E5E5E5',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="btn-sih-outline"
            style={{ opacity: currentStep === 0 ? 0.3 : 1, cursor: currentStep === 0 ? 'not-allowed' : 'pointer' }}
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div style={{ fontSize: '0.85rem', color: '#071F5B', fontWeight: 700, textAlign: 'center' }}>
            Step {currentStep + 1} of {steps.length} — {steps[currentStep].title}
          </div>

          {currentStep < steps.length - 1 ? (
            <button onClick={handleNext} className="btn-sih-orange">
              Next Step <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-sih-orange"
              style={{ padding: '0.75rem 2rem' }}
            >
              {isSubmitting ? 'Validating...' : 'SUBMIT REGISTRATION'} <Send size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
