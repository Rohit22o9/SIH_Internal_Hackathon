import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const EventInfo = () => {
  const timeline = [
    { step: "01", title: "Registration & Idea Submission", date: "Until Sep 15, 2026", status: "Active", desc: "Teams register all 6 student members and submit problem title & theme." },
    { step: "02", title: "Team & Data Verification", date: "Sep 16 - Sep 17, 2026", status: "Upcoming", desc: "SPOC & Department coordinators verify bona fide student credentials and PRNs." },
    { step: "03", title: "Internal Campus Hackathon Round", date: "Sep 25 - Sep 26, 2026", status: "Upcoming", desc: "Offline presentation & prototype evaluation by internal and external jury panels." },
    { step: "04", title: "National SIH Portal Nomination", date: "Oct 01, 2026", status: "Upcoming", desc: "Nominated winner teams uploaded directly to official MoE National SIH Portal." }
  ];

  return (
    <section id="event-info" style={{ padding: '4rem 1.5rem', background: '#F8F8F6', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="section-heading-orange">
            EVENT SCHEDULE & TIMELINE
          </h2>
          <div style={{ width: '80px', height: '3px', background: '#071F5B', margin: '0.5rem auto 1rem' }} />
          <p style={{ color: '#555555', fontSize: '1rem' }}>
            Milestones for SIH Internal Hackathon 2026 at JSCOE Pune
          </p>
        </div>

        {/* Timeline Container */}
        <div className="grid-4" style={{ position: 'relative' }}>
          {timeline.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E5E5',
                borderTop: '4px solid #F56A00',
                borderRadius: '6px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{
                    background: '#071F5B',
                    color: '#FFFFFF',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>
                    PHASE {item.step}
                  </span>
                  <span className={`sih-badge ${item.status === 'Active' ? 'sih-badge-orange' : 'sih-badge-navy'}`}>
                    {item.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#071F5B', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#555555', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>

              <div style={{
                marginTop: '1.25rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid #E5E5E5',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#F56A00'
              }}>
                <Clock size={16} /> {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
