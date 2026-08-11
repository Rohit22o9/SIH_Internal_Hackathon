import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

export const DepartmentAnalytics = ({ departmentData = [] }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Bar Chart Card */}
      <div className="sih-card">
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#071F5B', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
          Department-Wise Team Registrations
        </h3>

        <div style={{ width: '100%', height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={departmentData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis dataKey="department" stroke="#071F5B" fontSize={11} fontWeight={700} tickLine={false} />
              <YAxis stroke="#071F5B" fontSize={11} allowDecimals={false} />
              <Tooltip
                contentStyle={{ background: '#FFFFFF', border: '1px solid #071F5B', borderRadius: '4px', color: '#071F5B', fontWeight: 600 }}
              />
              <Bar dataKey="teams" fill="#071F5B" radius={[4, 4, 0, 0]}>
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#071F5B' : '#F56A00'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Breakdown */}
      <div className="sih-card">
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#071F5B', marginBottom: '1rem', textTransform: 'uppercase' }}>
          Department Breakdown Table
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ background: '#071F5B', color: '#FFFFFF' }}>
                <th style={{ padding: '0.65rem 0.85rem' }}>Department</th>
                <th style={{ padding: '0.65rem 0.85rem' }}>Teams</th>
                <th style={{ padding: '0.65rem 0.85rem' }}>Total Students</th>
                <th style={{ padding: '0.65rem 0.85rem' }}>Male Students</th>
                <th style={{ padding: '0.65rem 0.85rem' }}>Female Students</th>
              </tr>
            </thead>
            <tbody>
              {departmentData.map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? '#FFFFFF' : '#F8F8F6', borderBottom: '1px solid #E5E5E5' }}>
                  <td style={{ padding: '0.65rem 0.85rem', fontWeight: 700, color: '#071F5B' }}>{row.department}</td>
                  <td style={{ padding: '0.65rem 0.85rem', color: '#F56A00', fontWeight: 800 }}>{row.teams}</td>
                  <td style={{ padding: '0.65rem 0.85rem' }}>{row.students}</td>
                  <td style={{ padding: '0.65rem 0.85rem' }}>{row.male}</td>
                  <td style={{ padding: '0.65rem 0.85rem' }}>{row.female}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
