import React, { useState, useEffect } from 'react';
import DatabaseService from '../services/DatabaseService';
import RiskAssessmentController from '../services/RiskAssessmentController';
import './SavedAssessments.css';

function SavedAssessments({ patientId }) {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  useEffect(() => {
    loadAssessments();
  }, [patientId]);

  const loadAssessments = async () => {
    setLoading(true);
    try {
      let data;
      if (patientId) {
        data = await DatabaseService.getAssessmentsByPatient(patientId);
      } else {
        data = await DatabaseService.getAllAssessments();
      }
      setAssessments(data);
    } catch (error) {
      console.error('Error loading assessments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (assessmentId) => {
    if (window.confirm('Are you sure you want to delete this assessment?')) {
      try {
        await DatabaseService.deleteAssessment(assessmentId);
        await loadAssessments();
        if (selectedAssessment?.id === assessmentId) {
          setSelectedAssessment(null);
        }
      } catch (error) {
        alert('Error deleting assessment: ' + error.message);
      }
    }
  };

  const viewDetails = (assessment) => {
    setSelectedAssessment(selectedAssessment?.id === assessment.id ? null : assessment);
  };

  if (loading) {
    return <div className="saved-assessments-loading">Loading saved assessments...</div>;
  }

  if (assessments.length === 0) {
    return (
      <div className="saved-assessments-empty">
        <p>No saved assessments found.</p>
        <p className="empty-hint">Complete a risk assessment to see it saved here.</p>
      </div>
    );
  }

  return (
    <div className="saved-assessments">
      <div className="saved-assessments-header">
        <h3>Saved Assessments ({assessments.length})</h3>
        <button 
          className="btn btn-small btn-secondary" 
          onClick={loadAssessments}
          title="Refresh list"
        >
          ↻ Refresh
        </button>
      </div>

      <div className="assessments-list">
        {assessments.map((assessment) => (
          <div key={assessment.id} className="assessment-card">
            <div className="assessment-card-header">
              <div className="assessment-info">
                <span className="assessment-date">
                  {new Date(assessment.timestamp).toLocaleString()}
                </span>
                <span 
                  className="assessment-risk-badge"
                  style={{ 
                    backgroundColor: RiskAssessmentController.getRiskLevelColor(assessment.riskLevel),
                    color: 'white'
                  }}
                >
                  {assessment.riskLevel}
                </span>
              </div>
              <div className="assessment-score">
                Score: {assessment.riskScore}/100
              </div>
            </div>

            <div className="assessment-card-actions">
              <button 
                className="btn btn-small btn-primary"
                onClick={() => viewDetails(assessment)}
              >
                {selectedAssessment?.id === assessment.id ? 'Hide Details' : 'View Details'}
              </button>
              <button 
                className="btn btn-small btn-danger"
                onClick={() => handleDelete(assessment.id)}
              >
                Delete
              </button>
            </div>

            {selectedAssessment?.id === assessment.id && (
              <div className="assessment-details-expanded">
                <h4>Contributing Factors</h4>
                <table className="factors-table-compact">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Value</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assessment.contributingFactors.map((factor, index) => (
                      <tr key={index}>
                        <td>{factor.name}</td>
                        <td>{factor.value}</td>
                        <td>
                          <span className={`status-badge-small status-${factor.status.toLowerCase().replace(' ', '-')}`}>
                            {factor.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="assessment-meta">
                  <small>Assessment ID: {assessment.id}</small>
                  <small>Patient ID: {assessment.patientId}</small>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedAssessments;
