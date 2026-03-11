import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ClinicalNoteReport.css';

function ClinicalNoteReport() {
  const location = useLocation();
  const navigate = useNavigate();
  const patient = location.state?.patient || { name: 'Tom Park', age: 60 };
  
  const [observation, setObservation] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleSaveNote = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleGenerateReport = () => {
    setReportGenerated(true);
  };

  return (
    <div className="clinical-note-report">
      {/* Clinical Note Section */}
      <div className="section-header">Clinical Note</div>
      
      <div className="patient-info-section">
        <div className="patient-avatar">
          <div className="avatar-placeholder">
            <div className="avatar-x">✕</div>
          </div>
        </div>
        
        <div className="patient-details">
          <div className="info-field">
            <label>Patient Name:</label>
            <input type="text" value={patient.name} readOnly />
          </div>
          <div className="info-field">
            <label>Age:</label>
            <input type="text" value={patient.age} readOnly />
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>Observation:</label>
          <textarea
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="Informat..."
            rows="6"
          />
        </div>

        <div className="form-group">
          <label>Recommendation:</label>
          <textarea
            value={recommendation}
            onChange={(e) => setRecommendation(e.target.value)}
            placeholder="Information here"
            rows="6"
          />
        </div>

        <button className="save-note-btn" onClick={handleSaveNote}>
          Save Note
        </button>

        {showSuccess && (
          <div className="success-message">Note saved successfully!</div>
        )}
      </div>

      <div className="divider"></div>

      {/* Generate Clinical Report Section */}
      <div className="section-header">Generate Clinical Report</div>

      <div className="report-actions">
        <button className="report-btn" onClick={handleGenerateReport}>
          Generate Report
        </button>
        <button className="report-btn">
          Download PDF
        </button>
      </div>

      {reportGenerated && (
        <div className="report-preview">
          <h3>Clinical Report Preview</h3>
          <div className="report-content">
            <p><strong>Patient:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
            <hr />
            <p><strong>Observation:</strong></p>
            <p>{observation || 'No observation recorded'}</p>
            <p><strong>Recommendation:</strong></p>
            <p>{recommendation || 'No recommendation recorded'}</p>
          </div>
        </div>
      )}

      <button className="back-btn" onClick={() => navigate(-1)}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default ClinicalNoteReport;
