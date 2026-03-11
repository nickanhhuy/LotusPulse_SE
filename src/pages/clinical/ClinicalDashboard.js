import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClinicalDashboard.css';

function ClinicalDashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const patients = [
    { id: 1, name: 'Vu Anh Huy Nguyen', age: 45, riskLevel: 'Low', lastAssessment: 'Feb 2, 2026' },
    { id: 2, name: 'Xuan Hoang Ha', age: 38, riskLevel: 'Low', lastAssessment: 'Jan 10, 2026' },
    { id: 3, name: 'John Mendes', age: 62, riskLevel: 'High', lastAssessment: 'Jan 3, 2026' },
    { id: 4, name: 'Park Kim', age: 51, riskLevel: 'Medium', lastAssessment: 'Jan 1, 2026' },
    { id: 5, name: 'Lanag Jun', age: 58, riskLevel: 'High', lastAssessment: 'Dec 25, 2025' }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPatients = patients.length;
  const highRiskCount = patients.filter(p => p.riskLevel === 'High').length;
  const mediumRiskCount = patients.filter(p => p.riskLevel === 'Medium').length;
  const lowRiskCount = patients.filter(p => p.riskLevel === 'Low').length;

  const handleViewPatientRisk = (patient) => {
    navigate('/clinical/patient-risk', { state: { patient } });
  };

  return (
    <div className="clinical-dashboard">
      <div className="clinical-header">
        <h1>Clinical Dashboard</h1>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Patients</h3>
          <p className="stat-value">{totalPatients}</p>
        </div>
        <div className="stat-card">
          <h3>High Risk</h3>
          <p className="stat-value">{highRiskCount}</p>
        </div>
        <div className="stat-card">
          <h3>Medium Risk</h3>
          <p className="stat-value">{mediumRiskCount}</p>
        </div>
        <div className="stat-card">
          <h3>Low Risk</h3>
          <p className="stat-value">{lowRiskCount}</p>
        </div>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search Patient by Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="patient-list-section">
        <div className="section-label">Patient List</div>
        
        <table className="patient-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Risk Level</th>
              <th>Last Assessment</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id} onClick={() => handleViewPatientRisk(patient)}>
                <td>{patient.name}</td>
                <td>
                  <span className={`risk-badge risk-${patient.riskLevel.toLowerCase()}`}>
                    {patient.riskLevel}
                  </span>
                </td>
                <td>{patient.lastAssessment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="action-section">
        <button 
          className="view-patient-button"
          onClick={() => filteredPatients.length > 0 && handleViewPatientRisk(filteredPatients[0])}
        >
          View Patient Risk
        </button>
      </div>
    </div>
  );
}

export default ClinicalDashboard;
