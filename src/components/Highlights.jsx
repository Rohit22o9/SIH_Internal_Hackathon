import React from 'react';
import { ShieldCheck, CheckCircle, AlertCircle } from 'lucide-react';

export const Highlights = () => {
  const rules = [
    { title: "Team Size Requirement", desc: "Each team must consist of exactly 6 student members. Neither more nor less than 6 members will be accepted." },
    { title: "Female Representation Mandate", desc: "Per official SIH guidelines, every team must include at least one female student member." },
    { title: "Only JSCOE Students Requirement", desc: "All 6 team members must be registered students of JSPM JSCOE Pune. Inter-college teams are strictly disallowed." },
    { title: "Team Name Criteria", desc: "Team names must be unique and must NOT include college names or abbreviations (e.g. JSPM, JSCOE, Sawant, College)." },
    { title: "Single Team Membership", desc: "A student can be a part of only ONE team. Duplicate PRNs/Emails/Mobiles within teams will be rejected." },
    { title: "Optional Mentor", desc: "Teams can optionally include one faculty or industry mentor to guide their prototype development." }
  ];

  return (
    <section id="highlights" style={{ padding: '4rem 1.5rem', background: '#FFFFFF', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-heading-navy">
            HIGHLIGHTS & <span style={{ color: '#F56A00' }}>RULES</span>
          </h2>
          <div style={{ width: '80px', height: '3px', background: '#F56A00', margin: '0.5rem auto 1rem' }} />
          <p style={{ color: '#555555', fontSize: '1rem' }}>
            Please ensure complete adherence to official SIH team formation rules before registering.
          </p>
        </div>

        <div className="grid-3">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="sih-card"
              style={{
                borderLeft: '4px solid #F56A00',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  background: '#071F5B',
                  color: '#FFFFFF',
                  width: '24px',
                  height: '24px',
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}>
                  {idx + 1}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#071F5B' }}>
                  {rule.title}
                </h3>
              </div>
              <p style={{ color: '#444444', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '0.2rem' }}>
                {rule.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
