import React, { useState } from 'react';
import { Shield, Lock, User, AlertTriangle, ArrowRight, X } from 'lucide-react';
import { hackathonConfig } from '../config/hackathonConfig';

export const AdminLogin = ({ onLoginSuccess, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username.trim() === hackathonConfig.ADMIN_CREDENTIALS.username &&
      password.trim() === hackathonConfig.ADMIN_CREDENTIALS.password
    ) {
      onLoginSuccess();
    } else {
      setError("Invalid username or password. Access restricted.");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content" style={{ maxWidth: '440px', padding: '2.25rem', background: '#FFFFFF' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#555', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '6px',
            background: '#071F5B',
            color: '#F56A00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            border: '2px solid #F56A00'
          }}>
            <Shield size={28} />
          </div>

          <div className="sih-badge sih-badge-orange" style={{ marginBottom: '0.4rem' }}>
            ADMINISTRATOR PORTAL
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#071F5B' }}>
            SIH Admin Login
          </h2>
          <p style={{ fontSize: '0.82rem', color: '#555555', marginTop: '0.2rem' }}>
            {hackathonConfig.COLLEGE.shortName} Campus Hackathon
          </p>
        </div>

        {error && (
          <div style={{ padding: '0.65rem 1rem', background: '#F8D7DA', color: '#721C24', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '1rem' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Username / Email</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="form-control"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="Enter admin email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <User size={18} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#071F5B' }} />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                className="form-control"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock size={18} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#071F5B' }} />
            </div>
          </div>

          <button type="submit" className="btn-sih-orange" style={{ width: '100%', marginTop: '0.5rem' }}>
            LOGIN TO DASHBOARD <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};
