import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { MOCK_REGISTRATION_TREND } from '../data/dummyData';

export const RegistrationTrend = () => {
  return (
    <div className="sih-card">
      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#071F5B', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
        Team Registration Trend Over Time
      </h3>

      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={MOCK_REGISTRATION_TREND} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
            <XAxis dataKey="date" stroke="#071F5B" fontSize={11} fontWeight={600} />
            <YAxis stroke="#071F5B" fontSize={11} allowDecimals={false} />
            <Tooltip
              contentStyle={{ background: '#FFFFFF', border: '1px solid #071F5B', borderRadius: '4px', color: '#071F5B', fontWeight: 600 }}
            />
            <Line type="monotone" dataKey="teams" stroke="#F56A00" strokeWidth={3} dot={{ fill: '#F56A00', r: 5 }} />
            <Line type="monotone" dataKey="cumulative" stroke="#071F5B" strokeWidth={2} strokeDasharray="4 4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
