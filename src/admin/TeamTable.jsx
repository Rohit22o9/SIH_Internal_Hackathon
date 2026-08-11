import React, { useState } from 'react';
import { Search, Download, Eye, CheckCircle2 } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const TeamTable = ({ teams = [], onSelectTeam }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [themeFilter, setThemeFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [mentorFilter, setMentorFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredTeams = teams.filter(team => {
    const query = searchTerm.toLowerCase().trim();
    const leader = team.members ? team.members.find(m => m.isLeader) || {} : {};
    const leaderName = team.teamLeader || leader.fullName || '';

    const matchesSearch = !query || (
      (team.registrationId && team.registrationId.toLowerCase().includes(query)) ||
      (team.teamName && team.teamName.toLowerCase().includes(query)) ||
      (team.projectTitle && team.projectTitle.toLowerCase().includes(query)) ||
      (leaderName && leaderName.toLowerCase().includes(query)) ||
      (team.members && team.members.some(m =>
        (m.fullName && m.fullName.toLowerCase().includes(query)) ||
        (m.prn && m.prn.toLowerCase().includes(query)) ||
        (m.email && m.email.toLowerCase().includes(query))
      ))
    );

    const matchesDept = !departmentFilter || (
      team.members && team.members.some(m => m.department === departmentFilter)
    );

    const matchesTheme = !themeFilter || team.theme === themeFilter;

    const matchesYear = !yearFilter || (
      team.members && team.members.some(m => m.year === yearFilter)
    );

    const hasMentor = team.mentorName && team.mentorName !== "N/A" && team.mentorName.trim() !== "";
    const matchesMentor = !mentorFilter || (
      mentorFilter === 'with' ? hasMentor : !hasMentor
    );

    const matchesStatus = !statusFilter || team.status === statusFilter;

    return matchesSearch && matchesDept && matchesTheme && matchesYear && matchesMentor && matchesStatus;
  });

  const handleExportCSV = () => {
    if (filteredTeams.length === 0) {
      alert("No data available to export.");
      return;
    }

    const headers = ["Registration ID", "Team Name", "Theme", "Project Title", "Team Leader", "Mentor", "Member Count", "Female Count", "Date", "Status"];
    const rows = filteredTeams.map(t => [
      `"${t.registrationId}"`,
      `"${t.teamName}"`,
      `"${t.theme}"`,
      `"${t.projectTitle.replace(/"/g, '""')}"`,
      `"${t.teamLeader}"`,
      `"${t.mentorName || 'N/A'}"`,
      t.memberCount || 6,
      t.femaleMemberCount || 1,
      `"${t.registrationDate}"`,
      `"${t.status}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `SIH_2026_Teams_Export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="sih-card" style={{ marginTop: '2rem' }}>
      {/* Header & Export Action */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.25rem'
      }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#071F5B', textTransform: 'uppercase' }}>
            Registered Teams ({filteredTeams.length})
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#555555' }}>
            Filter, search, inspect 6-member team details, and export CSV
          </p>
        </div>

        <button onClick={handleExportCSV} className="btn-sih-orange" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
          <Download size={16} /> Export CSV / Excel
        </button>
      </div>

      {/* Filters Bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '1.25rem',
        background: '#F8F8F6',
        padding: '0.85rem',
        borderRadius: '4px',
        border: '1px solid #E5E5E5'
      }}>
        {/* Search */}
        <div style={{ flex: '1 1 240px', position: 'relative' }}>
          <input
            type="text"
            className="form-control"
            style={{ paddingLeft: '2.4rem' }}
            placeholder="Search ID, Team, Leader, PRN, Email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#071F5B' }} />
        </div>

        {/* Dept Filter */}
        <select
          className="form-control"
          style={{ width: 'auto', flex: '1 1 130px' }}
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          <option value="">All Departments</option>
          {hackathonConfig.DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        {/* Theme Filter */}
        <select
          className="form-control"
          style={{ width: 'auto', flex: '1 1 150px' }}
          value={themeFilter}
          onChange={(e) => setThemeFilter(e.target.value)}
        >
          <option value="">All SIH Themes</option>
          {hackathonConfig.THEMES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        {/* Year Filter */}
        <select
          className="form-control"
          style={{ width: 'auto', flex: '1 1 130px' }}
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
        >
          <option value="">All Years</option>
          {hackathonConfig.YEARS_OF_STUDY.map(y => <option key={y} value={y}>{y}</option>)}
        </select>

        {/* Mentor Filter */}
        <select
          className="form-control"
          style={{ width: 'auto', flex: '1 1 130px' }}
          value={mentorFilter}
          onChange={(e) => setMentorFilter(e.target.value)}
        >
          <option value="">Mentor Status</option>
          <option value="with">With Mentor</option>
          <option value="without">Without Mentor</option>
        </select>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#071F5B', color: '#FFFFFF', fontSize: '0.82rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '0.65rem 0.85rem' }}>Reg ID</th>
              <th style={{ padding: '0.65rem 0.85rem' }}>Team Name</th>
              <th style={{ padding: '0.65rem 0.85rem' }}>Team Leader</th>
              <th style={{ padding: '0.65rem 0.85rem' }}>Dept / Theme</th>
              <th style={{ padding: '0.65rem 0.85rem' }}>Members</th>
              <th style={{ padding: '0.65rem 0.85rem' }}>Reg Date</th>
              <th style={{ padding: '0.65rem 0.85rem' }}>Status</th>
              <th style={{ padding: '0.65rem 0.85rem', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeams.length > 0 ? (
              filteredTeams.map((team, idx) => {
                const leaderObj = team.members ? team.members.find(m => m.isLeader) || team.members[0] : null;
                const dept = leaderObj ? leaderObj.department : 'N/A';

                return (
                  <tr key={team.registrationId} style={{ background: idx % 2 === 0 ? '#FFFFFF' : '#F8F8F6', borderBottom: '1px solid #E5E5E5' }}>
                    <td style={{ padding: '0.65rem 0.85rem', fontWeight: 800, color: '#071F5B' }}>
                      {team.registrationId}
                    </td>
                    <td style={{ padding: '0.65rem 0.85rem', fontWeight: 700, color: '#222222' }}>
                      {team.teamName}
                    </td>
                    <td style={{ padding: '0.65rem 0.85rem', color: '#F56A00', fontWeight: 700 }}>
                      {team.teamLeader}
                    </td>
                    <td style={{ padding: '0.65rem 0.85rem' }}>
                      <div style={{ fontWeight: 700, color: '#071F5B' }}>{dept}</div>
                      <div style={{ fontSize: '0.78rem', color: '#666666' }}>{team.theme}</div>
                    </td>
                    <td style={{ padding: '0.65rem 0.85rem' }}>
                      <span className="sih-badge sih-badge-navy">6 Students</span>
                    </td>
                    <td style={{ padding: '0.65rem 0.85rem', color: '#555555', fontSize: '0.82rem' }}>
                      {team.registrationDate}
                    </td>
                    <td style={{ padding: '0.65rem 0.85rem' }}>
                      <span className="sih-badge sih-badge-green">
                        <CheckCircle2 size={12} /> {team.status || 'Verified'}
                      </span>
                    </td>
                    <td style={{ padding: '0.65rem 0.85rem', textAlign: 'right' }}>
                      <button
                        onClick={() => onSelectTeam(team)}
                        className="btn-sih-outline"
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                      >
                        <Eye size={14} /> View Details
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={8} style={{ textAlign: 'center', padding: '2.5rem', color: '#666666' }}>
                  No matching teams found. Try clearing filters or search terms.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
