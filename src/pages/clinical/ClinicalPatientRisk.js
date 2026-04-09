import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mockPatientsData, mockClinicalData } from '../../data/mockData';
import './ClinicalPatientRisk.css';

function ClinicalPatientRisk() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('assessment');

  // Get patient passed from Clinical Dashboard
  const selectedPatient = location.state?.patient;

  // Match with full patient data from mockData
  const fullPatient = mockPatientsData.find(p =>
    p.patientInfo.name === selectedPatient?.name
  ) || mockPatientsData[0];

  const patientInfo = fullPatient.patientInfo;

  // Get RiskAssessment object for this patient (from Step 1 data)
  const riskAssessment = mockClinicalData.riskAssessments[fullPatient.id];

  // Get existing clinical notes for this patient
  const patientNotes = mockClinicalData.clinicalNotes.filter(
    n => n.patientId === fullPatient.id
  );

  // Format timestamp for display
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className="clinical-patient-risk">

      {/* Header */}
      <div className="page-header">
        <h1>Patient Risk Assessment</h1>
        <p>Reviewed by Clinical Dashboard — {formatDate(riskAssessment.timestamp)}</p>
      </div>

      {/* Patient Info + Risk Score */}
      <div className="patient-summary">
        <div className="summary-card">
          <h3>Patient Information</h3>
          <div className="info-row">
            <span className="label">Name</span>
            <span className="value">{patientInfo.name}</span>
          </div>
          <div className="info-row">
            <span className="label">Age</span>
            <span className="value">{patientInfo.age}</span>
          </div>
          <div className="info-row">
            <span className="label">Gender</span>
            <span className="value">{patientInfo.gender}</span>
          </div>
          <div className="info-row">
            <span className="label">Blood Type</span>
            <span className="value">{patientInfo.bloodType}</span>
          </div>
          <div className="info-row">
            <span className="label">Last Assessment</span>
            <span className="value">{patientInfo.lastAssessment}</span>
          </div>
        </div>

        <div className="summary-card risk-card">
          <h3>Current Risk Assessment</h3>
          <div className="risk-display">
            <div className="risk-score-circle">
              <span className="risk-score-value">{riskAssessment.riskScore}</span>
              <span className="risk-score-label">Risk Score</span>
            </div>
            <div className={`risk-level-badge risk-${riskAssessment.risk_level.toLowerCase()}`}>
              {riskAssessment.risk_level} Risk
            </div>
            <p className="risk-timestamp">
              Assessed: {formatDate(riskAssessment.timestamp)}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs: Risk Explanation | Risk History */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'assessment' ? 'active' : ''}`}
          onClick={() => setActiveTab('assessment')}
        >
          View Risk Explanation
        </button>
        <button
          className={`tab ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Compare Risk History
        </button>
        <button
          className={`tab ${activeTab === 'notes' ? 'active' : ''}`}
          onClick={() => setActiveTab('notes')}
        >
          Clinical Notes
        </button>
      </div>

      {/* Tab: View Risk Explanation — Feature Importance from Risk Engine */}
      {activeTab === 'assessment' && (
        <div className="content-section">
          <h2>Contributing Risk Factors</h2>
          <p className="section-desc">
            The following factors were identified by the Risk Prediction Engine as the primary contributors to this patient's risk score.
          </p>
          <table className="factors-table">
            <thead>
              <tr>
                <th>Risk Factor</th>
                <th>Patient Value</th>
                <th>Status</th>
                <th>Importance</th>
              </tr>
            </thead>
            <tbody>
              {riskAssessment.contributingFactors.map((factor, index) => (
                <tr key={index}>
                  <td>{factor.factor}</td>
                  <td>{factor.value}</td>
                  <td>
                    <span className={`status-badge status-${factor.status.toLowerCase().replace(/\s/g, '-')}`}>
                      {factor.status}
                    </span>
                  </td>
                  <td>
                    <div className="importance-bar-wrap">
                      <div
                        className="importance-bar"
                        style={{ width: `${factor.importance * 100}%` }}
                      />
                      <span>{(factor.importance * 100).toFixed(0)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab: Compare Risk History — Historical Risk Data */}
      {activeTab === 'history' && (
        <div className="content-section">
          <h2>Risk History Comparison</h2>
          <p className="section-desc">
            Historical risk assessments retrieved from the Risk Engine for trend analysis.
          </p>
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Risk Score</th>
                <th>Blood Pressure</th>
                <th>Cholesterol</th>
                <th>Heart Rate</th>
                <th>Clinical Notes</th>
              </tr>
            </thead>
            <tbody>
              {fullPatient.detailedRiskHistory.slice(0, 6).map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>
                    <span className="score-pill">{record.riskScore}</span>
                  </td>
                  <td>{record.bloodPressure}</td>
                  <td>{record.cholesterol} mg/dL</td>
                  <td>{record.heartRate} bpm</td>
                  <td className="notes-cell">{record.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab: Clinical Notes */}
      {activeTab === 'notes' && (
        <div className="content-section">
          <h2>Clinical Notes</h2>
          {patientNotes.length > 0 ? (
            patientNotes.map((note, index) => (
              <div key={index} className="note-card">
                <div className="note-header">
                  <span className="note-date">{formatDate(note.note_date)}</span>
                </div>
                <div className="note-body">
                  <p><strong>Observation:</strong> {note.observation}</p>
                  <p><strong>Recommendation:</strong> {note.recommendation}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-notes">No clinical notes recorded for this patient yet.</p>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="btn-secondary" onClick={() => navigate('/clinical/dashboard')}>
          Back to Dashboard
        </button>
        <button
          className="btn-primary"
          onClick={() => navigate('/clinical/note-report', { state: { patient: selectedPatient, fullPatient, riskAssessment, mode: 'note' } })}
        >
          Add Clinical Note
        </button>
        <button
          className="btn-primary"
          onClick={() => navigate('/clinical/note-report', { state: { patient: selectedPatient, fullPatient, riskAssessment, mode: 'report' } })}
        >
          Generate Clinical Report
        </button>
      </div>
    </div>
  );
}

export default ClinicalPatientRisk;
