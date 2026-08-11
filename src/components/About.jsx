import React from 'react';
import { Target, Lightbulb, Trophy, Users, Shield, Cpu, BookOpen } from 'lucide-react';

export const About = () => {
  const whyParticipateList = [
    {
      title: "INNOVATION",
      desc: "Develop creative technical solutions for real-world challenge statements provided by Government Ministries and Industry partners."
    },
    {
      title: "TEAMWORK",
      desc: "Collaborate in a 6-member student team across diverse engineering and management departments to build comprehensive prototypes."
    },
    {
      title: "PROBLEM SOLVING",
      desc: "Enhance your hands-on coding, hardware integration, and system architectural skills under expert faculty mentorship."
    },
    {
      title: "RECOGNITION",
      desc: "Earn campus nomination for SIH 2026 National Finale, national visibility, certificates of merit, and college innovation grants."
    }
  ];

  return (
    <div id="about">
      {/* SECTION 1: ABOUT SIH INTERNAL HACKATHON */}
      <section style={{ padding: '4rem 1.5rem', background: '#FFFFFF', borderBottom: '1px solid #E5E5E5' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-heading-orange">
              ABOUT SIH INTERNAL HACKATHON
            </h2>
            <div style={{ width: '80px', height: '3px', background: '#071F5B', margin: '0.5rem auto 1rem' }} />
            <p style={{ color: '#555555', maxWidth: '780px', margin: '0 auto', fontSize: '1.05rem' }}>
              Smart India Hackathon (SIH) is a nationwide initiative by MoE's Innovation Cell to provide students with a platform to solve pressing challenges faced by government ministries, departments, industries, and organizations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }} className="grid-2-mobile">
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#071F5B' }}>
                Campus Evaluation & Selection Process
              </h3>
              <p style={{ color: '#333333', fontSize: '0.98rem', lineHeight: 1.7 }}>
                The Internal Campus Hackathon at JSCOE Pune serves as the initial screening phase. All registered 6-member teams will showcase their software/hardware solutions before an expert internal jury panel.
              </p>
              <p style={{ color: '#333333', fontSize: '0.98rem', lineHeight: 1.7 }}>
                Shortlisted top teams will be officially nominated and uploaded onto the official National SIH 2026 portal to compete at the national level grand finale.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
                <div style={{ borderLeft: '4px solid #F56A00', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#071F5B' }}>100%</div>
                  <div style={{ fontSize: '0.82rem', color: '#555555', fontWeight: 600 }}>Bona Fide JSCOE Teams</div>
                </div>
                <div style={{ borderLeft: '4px solid #071F5B', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F56A00' }}>6 Members</div>
                  <div style={{ fontSize: '0.82rem', color: '#555555', fontWeight: 600 }}>Mandatory Team Size</div>
                </div>
              </div>
            </div>

            {/* Right Card Panel */}
            <div className="sih-card" style={{ background: '#F8F8F6', borderLeft: '5px solid #071F5B', padding: '2rem' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#071F5B', marginBottom: '1rem', textTransform: 'uppercase' }}>
                Internal Hackathon Highlights
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: '#222' }}>
                  <span style={{ color: '#F56A00', fontWeight: 800 }}>✔</span>
                  <span><strong>Cross-Department Collaboration:</strong> Form teams across IT, Comp, E&TC, AI&DS, Mechanical, Electrical, BCA, MCA, MBA.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: '#222' }}>
                  <span style={{ color: '#F56A00', fontWeight: 800 }}>✔</span>
                  <span><strong>Female Member Rule:</strong> Mandatory inclusion of at least 1 female student per team.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: '#222' }}>
                  <span style={{ color: '#F56A00', fontWeight: 800 }}>✔</span>
                  <span><strong>Jury Evaluation:</strong> Evaluation based on innovation, feasibility, impact, and technical execution.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY PARTICIPATE (SIH OFFICIAL OPEN LAYOUT) */}
      <section style={{ padding: '4rem 1.5rem', background: '#F8F8F6', borderBottom: '1px solid #E5E5E5' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-heading-orange">
              WHY PARTICIPATE?
            </h2>
            <div style={{ width: '80px', height: '3px', background: '#071F5B', margin: '0.5rem auto 0' }} />
          </div>

          <div className="grid-4">
            {whyParticipateList.map((item, idx) => (
              <div key={idx} style={{ padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#071F5B', letterSpacing: '0.02em' }}>
                  {item.title}
                </h3>
                {/* Small Orange Underline Accent */}
                <div style={{ width: '40px', height: '3px', background: '#F56A00' }} />
                <p style={{ color: '#444444', fontSize: '0.92rem', lineHeight: 1.6, marginTop: '0.5rem' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .grid-2-mobile { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
