import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ClinicalNoteReport.css';

function ClinicalNoteReport() {
  const location = useLocation();
  const navigate = useNavigate();

  // Data passed from ClinicalPatientRisk
  const { fullPatient, riskAssessment, mode } = location.state || {};
  const patientInfo = fullPatient?.patientInfo || { name: 'Unknown', age: '-', gender: '-' };

  // ClinicalNote state — matches class diagram: note_date, observation, recommendation
  const [observation, setObservation] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);
  const [savedNote, setSavedNote] = useState(null);

  // ClinicalReport state — matches class diagram: report_ID, report_date, summary
  const [reportGenerated, setReportGenerated] = useState(false);
  const [clinicalReport, setClinicalReport] = useState(null);

  // saveNote() — from ClinicalNote class
  const saveNote = () => {
    const note = {
      note_id: Date.now(),
      patientId: fullPatient?.id,
      note_date: new Date().toISOString(),
      observation,
      recommendation
    };
    setSavedNote(note);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 3000);
  };

  // generateReport() — from ClinicalReport class
  const generateReport = () => {
    const report = {
      report_ID: `CR-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
      patientId: fullPatient?.id,
      report_date: new Date().toISOString(),
      summary: `Patient ${patientInfo.name} (${patientInfo.age}, ${patientInfo.gender}) presents with a risk score of ${riskAssessment?.riskScore ?? 'N/A'} (${riskAssessment?.risk_level ?? 'N/A'} Risk). ` +
        `Primary contributing factors include: ${riskAssessment?.contributingFactors?.slice(0, 3).map(f => f.factor).join(', ') ?? 'N/A'}. ` +
        (observation ? `Clinical observation: ${observation}. ` : '') +
        (recommendation ? `Recommendation: ${recommendation}.` : 'No specific recommendations recorded.')
    };
    setClinicalReport(report);
    setReportGenerated(true);
  };

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className="clinical-note-report">

      {/* Page Header */}
      <div className="page-header">
        <h1>{mode === 'report' ? 'Generate Clinical Report' : 'Add Clinical Note'}</h1>
        <p>Clinical Dashboard — {patientInfo.name}</p>
      </div>

      {/* Patient Info Summary */}
      <div className="patient-info-section">
        <div className="patient-avatar">
          <div className="avatar-placeholder">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="#8B5A6F">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
        <div className="patient-details">
          <div className="info-field">
            <label>Patient Name</label>
            <input type="text" value={patientInfo.name} readOnly />
          </div>
          <div className="info-field">
            <label>Age</label>
            <input type="text" value={patientInfo.age} readOnly />
          </div>
          <div className="info-field">
            <label>Risk Level</label>
            <input
              type="text"
              value={`${riskAssessment?.risk_level ?? 'N/A'} Risk (Score: ${riskAssessment?.riskScore ?? 'N/A'})`}
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Clinical Note Section */}
      <div className="section-header">Clinical Note</div>

      <div className="form-section">
        <div className="form-group">
          <label>Observation</label>
          <textarea
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="Enter clinical observations about the patient's condition..."
            rows="5"
          />
        </div>

        <div className="form-group">
          <label>Recommendation</label>
          <textarea
            value={recommendation}
            onChange={(e) => setRecommendation(e.target.value)}
            placeholder="Enter treatment recommendations and follow-up actions..."
            rows="5"
          />
        </div>

        <button className="save-note-btn" onClick={saveNote}>
          Save Note
        </button>

        {noteSaved && (
          <div className="success-message">
            ✓ Clinical note saved — {formatDate(savedNote.note_date)}
          </div>
        )}
      </div>

      <div className="divider" />

      {/* Generate Clinical Report Section */}
      <div className="section-header">Generate Clinical Report</div>

      <div className="report-actions">
        <button className="report-btn" onClick={generateReport}>
          Generate Report
        </button>
        <button className="report-btn" disabled={!reportGenerated}>
          Download PDF
        </button>
      </div>

      {/* Report Preview — ClinicalReport class: report_ID, report_date, summary */}
      {reportGenerated && clinicalReport && (
        <div className="report-preview">
          <div className="report-preview-header">
            <h3>Clinical Report</h3>
            <span className="report-id">{clinicalReport.report_ID}</span>
          </div>
          <div className="report-meta">
            <span>Patient: <strong>{patientInfo.name}</strong></span>
            <span>Date: <strong>{formatDate(clinicalReport.report_date)}</strong></span>
            <span>Risk Level: <strong>{riskAssessment?.risk_level} Risk</strong></span>
          </div>
          <div className="report-divider" />
          <div className="report-content">
            <p className="report-label">Summary</p>
            <p>{clinicalReport.summary}</p>
          </div>
          {riskAssessment?.contributingFactors && (
            <div className="report-factors">
              <p className="report-label">Top Contributing Factors</p>
              {riskAssessment.contributingFactors.slice(0, 3).map((f, i) => (
                <div key={i} className="report-factor-row">
                  <span>{f.factor}</span>
                  <span className="factor-value">{f.value}</span>
                  <span className="factor-importance">{(f.importance * 100).toFixed(0)}% importance</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="back-btn" onClick={() => navigate(-1)}>
          Back to Patient Risk
        </button>
        <button className="back-btn-secondary" onClick={() => navigate('/clinical/dashboard')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default ClinicalNoteReport;
