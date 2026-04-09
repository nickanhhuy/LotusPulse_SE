import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPatientsData } from '../../data/mockData';
import './ClinicalDashboard.css';

function ClinicalDashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Use mockPatientsData directly so names match ClinicalPatientRisk lookup
  const patients = mockPatientsData.map(p => ({
    id: p.id,
    name: p.patientInfo.name,
    age: p.patientInfo.age,
    riskLevel: p.currentRisk.level.split(' ')[0], // "HIGH RISK" → "High"
    lastAssessment: p.patientInfo.lastAssessment
  }));

  // Normalize risk level capitalisation: "HIGH" → "High"
  const normalizeRisk = (level) => {
    const map = { HIGH: 'High', MEDIUM: 'Medium', LOW: 'Low' };
    return map[level.toUpperCase()] || level;
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPatients = patients.length;
  const highRiskCount = patients.filter(p => normalizeRisk(p.riskLevel) === 'High').length;
  const mediumRiskCount = patients.filter(p => normalizeRisk(p.riskLevel) === 'Medium').length;
  const lowRiskCount = patients.filter(p => normalizeRisk(p.riskLevel) === 'Low').length;

  const handleViewPatientRisk = (patient) => {
    navigate('/clinical/patient-risk', { state: { patient: { ...patient, riskLevel: normalizeRisk(patient.riskLevel) } } });
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
                  <span className="risk-badge">
                    {normalizeRisk(patient.riskLevel)}
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
