import React, { useState, useEffect } from 'react';
import { Award, Download, Search, RefreshCw, Mail, Phone, Building2, Briefcase, User } from 'lucide-react';
import { getStoredJury } from '../services/juryService';

export const JuryTable = () => {
  const [juryList, setJuryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchJuryList = async () => {
    setIsLoading(true);
    const data = await getStoredJury();
    setJuryList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJuryList();
  }, []);

  const filteredJury = juryList.filter(item => {
    const term = searchTerm.toLowerCase();
    return (
      item.name?.toLowerCase().includes(term) ||
      item.designation?.toLowerCase().includes(term) ||
      item.organizationDepartment?.toLowerCase().includes(term) ||
      item.email?.toLowerCase().includes(term) ||
      item.mobile?.includes(term)
    );
  });

  const exportToCSV = () => {
    if (juryList.length === 0) return;
    const headers = ["Jury ID", "Name", "Designation", "Organization / Department", "Mobile No", "Email ID", "Date", "Time"];
    const rows = juryList.map(j => [
      `"${j.juryId || ''}"`,
      `"${j.name || ''}"`,
      `"${j.designation || ''}"`,
      `"${j.organizationDepartment || ''}"`,
      `"${j.mobile || ''}"`,
      `"${j.email || ''}"`,
      `"${j.registrationDate || ''}"`,
      `"${j.registrationTime || ''}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `SIH_2026_Registered_Jury_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid #E5E5E5',
      borderRadius: '8px',
      padding: '1.25rem',
      boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Award size={22} style={{ color: '#F56A00' }} />
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#071F5B', margin: 0 }}>
              Registered Jury Members ({juryList.length})
            </h3>
            <span style={{ fontSize: '0.78rem', color: '#666666' }}>
              Official evaluation panel members registered for SIH 2026
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', minWidth: '240px' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder="Search jury by name, org..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ paddingLeft: '2.25rem', fontSize: '0.85rem' }}
            />
          </div>

          <button
            onClick={fetchJuryList}
            className="btn-sih-outline"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}
          >
            <RefreshCw size={14} /> Refresh
          </button>

          <button
            onClick={exportToCSV}
            className="btn-sih-orange"
            style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
          >
            <Download size={14} /> Export CSV
          </button>
        </div>
      </div>

      {isLoading ? (
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>Loading Jury data...</div>
      ) : filteredJury.length === 0 ? (
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          {searchTerm ? 'No jury members match your search.' : 'No jury members registered yet.'}
        </div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ background: '#071F5B', color: '#FFFFFF', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem 1rem', borderRadius: '4px 0 0 0' }}>Jury ID</th>
                <th style={{ padding: '0.75rem 1rem' }}>Name of the Jury</th>
                <th style={{ padding: '0.75rem 1rem' }}>Designation of Jury</th>
                <th style={{ padding: '0.75rem 1rem' }}>Organization/Department</th>
                <th style={{ padding: '0.75rem 1rem' }}>Mobile No</th>
                <th style={{ padding: '0.75rem 1rem', borderRadius: '0 4px 0 0' }}>Email ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredJury.map((jury, index) => (
                <tr
                  key={jury.juryId || index}
                  style={{
                    borderBottom: '1px solid #E5E5E5',
                    background: index % 2 === 0 ? '#FFFFFF' : '#F8F8F6'
                  }}
                >
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 800, color: '#F56A00' }}>
                    {jury.juryId || `JURY-${index + 1}`}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#071F5B' }}>
                    {jury.name}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: '#333333' }}>
                    {jury.designation}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: '#333333' }}>
                    {jury.organizationDepartment}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: '#333333' }}>
                    {jury.mobile}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: '#071F5B', fontWeight: 600 }}>
                    {jury.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
