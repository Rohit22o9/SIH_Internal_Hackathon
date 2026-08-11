import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const GenderAnalytics = ({ genderData = [] }) => {
  // Use strictly Navy Blue (#071F5B) and SIH Orange (#F56A00)
  const sihGenderColors = ['#071F5B', '#F56A00', '#555555'];

  const formattedData = genderData.map((d, i) => ({
    ...d,
    color: sihGenderColors[i % sihGenderColors.length]
  }));

  return (
    <div className="sih-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#071F5B', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
        Gender Distribution
      </h3>

      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={formattedData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={85}
              paddingAngle={4}
              dataKey="value"
            >
              {formattedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: '#FFFFFF', border: '1px solid #071F5B', borderRadius: '4px', color: '#071F5B', fontWeight: 600 }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #E5E5E5' }}>
        {formattedData.map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.78rem', color: '#555555', fontWeight: 600 }}>{item.name}</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: item.color }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
