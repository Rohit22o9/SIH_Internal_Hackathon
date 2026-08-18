import React, { useState } from 'react';
import { Search, Download, Eye, CheckCircle2, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const TeamTable = ({ teams = [], onSelectTeam }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [themeFilter, setThemeFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [mentorFilter, setMentorFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  // Sort state
  const [sortConfig, setSortConfig] = useState({ key: 'registrationId', direction: 'asc' });

  const getTeamLeaderObj = (team) => {
    if (!team || !team.members || !Array.isArray(team.members) || team.members.length === 0) return null;
    return (
      team.members.find(m => m && (m.isLeader === true || m.isLeader === "true" || m.isLeader === 1)) || 
      team.members.find(m => m && m.studentNumber === 1) || 
      team.members.find(m => m && team.teamLeader && m.fullName && m.fullName.trim().toLowerCase() === team.teamLeader.trim().toLowerCase()) ||
      team.members[0]
    );
  };

  const getLeaderDept = (team) => {
    if (!team) return 'N/A';
    const leader = getTeamLeaderObj(team);
    if (leader && leader.department) return leader.department.toString().trim();
    if (team.department) return team.department.toString().trim();
    return 'N/A';
  };

  const handleSort = (key) => {
    setSortConfig(prev => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const filteredTeams = teams.filter(team => {
    const query = searchTerm.toLowerCase().trim();
    const leader = getTeamLeaderObj(team) || {};
    const leaderName = team.teamLeader || leader.fullName || '';

    const matchesSearch = !query || (
      (team.registrationId && team.registrationId.toLowerCase().includes(query)) ||
      (team.teamName && team.teamName.toLowerCase().includes(query)) ||
      (team.projectTitle && team.projectTitle.toLowerCase().includes(query)) ||
      (leaderName && leaderName.toLowerCase().includes(query)) ||
      (team.members && Array.isArray(team.members) && team.members.some(m =>
        m && (
          (m.fullName && m.fullName.toLowerCase().includes(query)) ||
          (m.prn && m.prn.toLowerCase().includes(query)) ||
          (m.email && m.email.toLowerCase().includes(query))
        )
      ))
    );

    // Filter STRICTLY by Team Leader's Department
    const leaderDept = getLeaderDept(team);
    const matchesDept = !departmentFilter || (
      leaderDept && leaderDept.toString().trim().toUpperCase() === departmentFilter.toString().trim().toUpperCase()
    );

    const matchesTheme = !themeFilter || team.theme === themeFilter;

    const matchesYear = !yearFilter || (
      team.members && Array.isArray(team.members) && team.members.some(m => m && m.year === yearFilter)
    );

    const hasMentor = team.mentorName && team.mentorName !== "N/A" && team.mentorName.trim() !== "";
    const matchesMentor = !mentorFilter || (
      mentorFilter === 'with' ? hasMentor : !hasMentor
    );

    const matchesStatus = !statusFilter || team.status === statusFilter;

    return matchesSearch && matchesDept && matchesTheme && matchesYear && matchesMentor && matchesStatus;
  });

  // Sort filtered teams
  const sortedTeams = [...filteredTeams].sort((a, b) => {
    const { key, direction } = sortConfig;
    let valA = '';
    let valB = '';

    if (key === 'registrationId') {
      valA = a.registrationId || '';
      valB = b.registrationId || '';
    } else if (key === 'teamName') {
      valA = (a.teamName || '').toLowerCase();
      valB = (b.teamName || '').toLowerCase();
    } else if (key === 'teamLeader') {
      valA = (a.teamLeader || '').toLowerCase();
      valB = (b.teamLeader || '').toLowerCase();
    } else if (key === 'department') {
      valA = (getLeaderDept(a) || '').toLowerCase();
      valB = (getLeaderDept(b) || '').toLowerCase();
    } else if (key === 'registrationDate') {
      valA = new Date(a.registrationDate || 0).getTime();
      valB = new Date(b.registrationDate || 0).getTime();
    } else if (key === 'status') {
      valA = (a.status || '').toLowerCase();
      valB = (b.status || '').toLowerCase();
    }

    if (valA < valB) return direction === 'asc' ? -1 : 1;
    if (valA > valB) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <ArrowUpDown size={13} style={{ opacity: 0.5, marginLeft: '4px' }} />;
    return sortConfig.direction === 'asc' 
      ? <ArrowUp size={13} style={{ color: '#F56A00', marginLeft: '4px' }} />
      : <ArrowDown size={13} style={{ color: '#F56A00', marginLeft: '4px' }} />;
  };

  const handleExportCSV = () => {
    if (sortedTeams.length === 0) {
      alert("No data available to export.");
      return;
    }

    const headers = ["Registration ID", "Team Name", "Theme", "Project Title", "Team Leader", "Leader Dept", "Mentor", "Member Count", "Female Count", "Date", "Status"];
    const rows = sortedTeams.map(t => [
      `"${t.registrationId}"`,
      `"${t.teamName}"`,
      `"${t.theme}"`,
      `"${t.projectTitle ? t.projectTitle.replace(/"/g, '""') : ''}"`,
      `"${t.teamLeader}"`,
      `"${getLeaderDept(t)}"`,
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
            Registered Teams ({sortedTeams.length})
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#555555' }}>
            Filter by leader department, search, sort columns, inspect team details, and export CSV
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
          style={{ width: 'auto', flex: '1 1 150px' }}
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          <option value="">All Leader Depts</option>
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
              <th style={{ padding: '0.65rem 0.85rem', cursor: 'pointer' }} onClick={() => handleSort('registrationId')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>Reg ID {renderSortIcon('registrationId')}</div>
              </th>
              <th style={{ padding: '0.65rem 0.85rem', cursor: 'pointer' }} onClick={() => handleSort('teamName')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>Team Name {renderSortIcon('teamName')}</div>
              </th>
              <th style={{ padding: '0.65rem 0.85rem', cursor: 'pointer' }} onClick={() => handleSort('teamLeader')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>Team Leader {renderSortIcon('teamLeader')}</div>
              </th>
              <th style={{ padding: '0.65rem 0.85rem', cursor: 'pointer' }} onClick={() => handleSort('department')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>Dept / Theme {renderSortIcon('department')}</div>
              </th>
              <th style={{ padding: '0.65rem 0.85rem' }}>Members</th>
              <th style={{ padding: '0.65rem 0.85rem', cursor: 'pointer' }} onClick={() => handleSort('registrationDate')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>Reg Date {renderSortIcon('registrationDate')}</div>
              </th>
              <th style={{ padding: '0.65rem 0.85rem', cursor: 'pointer' }} onClick={() => handleSort('status')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>Status {renderSortIcon('status')}</div>
              </th>
              <th style={{ padding: '0.65rem 0.85rem', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeams.length > 0 ? (
              sortedTeams.map((team, idx) => {
                const dept = getLeaderDept(team);

                return (
                  <tr key={`${team.registrationId}_${team.teamName}_${idx}`} style={{ background: idx % 2 === 0 ? '#FFFFFF' : '#F8F8F6', borderBottom: '1px solid #E5E5E5' }}>
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
                      <span className="sih-badge sih-badge-navy">{team.memberCount || 6} Students</span>
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
                  No matching teams found for the selected filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


