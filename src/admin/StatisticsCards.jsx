import React from 'react';
import { Users, UserCheck, Layers, Lightbulb, UserPlus, UserMinus } from 'lucide-react';

export const StatisticsCards = ({ summary }) => {
  const cards = [
    { title: "Total Teams Registered", value: summary.totalTeams, icon: <Users size={22} color="#F56A00" /> },
    { title: "Total Students", value: summary.totalStudents, icon: <UserCheck size={22} color="#071F5B" /> },
    { title: "Male Students", value: summary.maleStudents, icon: <UserCheck size={22} color="#071F5B" /> },
    { title: "Female Students", value: summary.femaleStudents, icon: <UserCheck size={22} color="#F56A00" /> },
    { title: "Active Departments", value: summary.totalDepartments, icon: <Layers size={22} color="#071F5B" /> },
    { title: "Total Projects", value: summary.totalProjects, icon: <Lightbulb size={22} color="#F56A00" /> },
    { title: "Teams with Mentors", value: summary.teamsWithMentors, icon: <UserPlus size={22} color="#198754" /> },
    { title: "Teams without Mentors", value: summary.teamsWithoutMentors, icon: <UserMinus size={22} color="#071F5B" /> }
  ];

  return (
    <div className="grid-4" style={{ marginBottom: '2rem' }}>
      {cards.map((card, index) => (
        <div
          key={index}
          className="sih-card"
          style={{
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '3px solid #F56A00',
            background: '#FFFFFF'
          }}
        >
          <div>
            <div style={{ fontSize: '0.78rem', color: '#555555', fontWeight: 700, textTransform: 'uppercase' }}>
              {card.title}
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#071F5B', marginTop: '0.2rem' }}>
              {card.value}
            </div>
          </div>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '4px',
            background: '#F8F8F6',
            border: '1px solid #E5E5E5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};
