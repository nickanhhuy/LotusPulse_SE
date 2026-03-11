import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ClinicalPatientRisk.css';

function ClinicalPatientRisk() {
  const location = useLocation();
  const navigate = useNavigate();
  const patient = location.state?.patient || { name: 'John Doe', age: 52, riskLevel: 'High', lastAssessment: 'Mar 10, 2026' };

  const riskScore = patient.riskLevel === 'High' ? 0.82 : patient.riskLevel === 'Medium' ? 0.55 : 0.28;

  const contributingFactors = [
    'High blood pressure',
    'High cholesterol',
    'Smoking history',
    'Low physical activity',
    'Family history of heart disease'
  ];

  const riskHistory = [
    { year: '2024', level: 'Medium', score: 0.52 },
    { year: '2025', level: 'High', score: 0.75 },
    { year: '2026', level: patient.riskLevel, score: riskScore }
  ];

  return (
    <div className="clinical-patient-risk">
      <div className="page-header">
        <h1>Patient Risk Assessment</h1>
      </div>

      <div className="patient-summary">
        <div className="summary-card">
          <h3>Patient Information</h3>
          <div className="info-row">
            <span className="label">Name:</span>
            <span className="value">{patient.name}</span>
          </div>
          <div className="info-row">
            <span className="label">Age:</span>
            <span className="value">{patient.age}</span>
          </div>
          <div className="info-row">
            <span className="label">Last Assessment:</span>
            <span className="value">{patient.lastAssessment}</span>
          </div>
        </div>

        <div className="summary-card">
          <h3>Current Risk Assessment</h3>
          <div className="risk-display">
            <div className="risk-score">{riskScore}</div>
            <div className={`risk-level-badge risk-${patient.riskLevel.toLowerCase()}`}>
              {patient.riskLevel} Risk
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Contributing Risk Factors</h2>
        <ul className="factors-list">
          {contributingFactors.map((factor, index) => (
            <li key={index}>{factor}</li>
          ))}
        </ul>
      </div>

      <div className="content-section">
        <h2>Risk History</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Risk Level</th>
              <th>Risk Score</th>
            </tr>
          </thead>
          <tbody>
            {riskHistory.map((record, index) => (
              <tr key={index}>
                <td>{record.year}</td>
                <td>
                  <span className={`risk-badge risk-${record.level.toLowerCase()}`}>
                    {record.level}
                  </span>
                </td>
                <td>{record.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="action-buttons">
        <button className="btn-secondary" onClick={() => navigate('/clinical/dashboard')}>
          Back to Dashboard
        </button>
        <button className="btn-primary" onClick={() => navigate('/clinical/note-report', { state: { patient } })}>
          Add Clinical Note
        </button>
        <button className="btn-primary" onClick={() => navigate('/clinical/note-report', { state: { patient } })}>
          Generate Clinical Report
        </button>
      </div>
    </div>
  );
}

export default ClinicalPatientRisk;
