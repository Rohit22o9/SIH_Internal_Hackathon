import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export const ThemeAnalytics = ({ themeData = [] }) => {
  return (
    <div className="sih-card">
      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#071F5B', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
        SIH Theme / Domain Breakdown
      </h3>

      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={themeData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
            <XAxis type="number" stroke="#071F5B" fontSize={11} allowDecimals={false} />
            <YAxis dataKey="theme" type="category" stroke="#071F5B" fontSize={10} width={150} />
            <Tooltip
              contentStyle={{ background: '#FFFFFF', border: '1px solid #071F5B', borderRadius: '4px', color: '#071F5B', fontWeight: 600 }}
            />
            <Bar dataKey="count" fill="#F56A00" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
