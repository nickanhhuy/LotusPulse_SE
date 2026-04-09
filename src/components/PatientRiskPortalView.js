import React, { useState } from 'react';
import './PatientRiskPortalView.css';
import RiskAssessmentController from '../services/RiskAssessmentController';
import DatabaseService from '../services/DatabaseService';

// Initialize services
RiskAssessmentController.setDatabaseService(DatabaseService);

function PatientRiskPortalView({ patientId, onAssessmentComplete }) {
  const [healthMetrics, setHealthMetrics] = useState({
    age: '',
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    cholesterol: '',
    heartRate: '',
    weight: '',
    height: '',
    gender: 'Male'
  });

  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [saveStatus, setSaveStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHealthMetrics(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSaveStatus(null);

    try {
      // Convert string inputs to numbers
      const metricsToSubmit = {
        age: parseInt(healthMetrics.age),
        bloodPressureSystolic: parseInt(healthMetrics.bloodPressureSystolic),
        bloodPressureDiastolic: parseInt(healthMetrics.bloodPressureDiastolic),
        cholesterol: parseInt(healthMetrics.cholesterol),
        heartRate: parseInt(healthMetrics.heartRate),
        weight: parseFloat(healthMetrics.weight),
        height: parseFloat(healthMetrics.height),
        gender: healthMetrics.gender
      };

      // Submit health data through controller
      setSaveStatus('Calculating risk assessment...');
      const result = await RiskAssessmentController.submitHealthData(
        patientId || 'new_patient',
        metricsToSubmit
      );

      if (result.success) {
        setSaveStatus('Assessment saved successfully!');
        setAssessment(result.assessment);
        
        // Show save confirmation for 2 seconds
        setTimeout(() => {
          setSaveStatus(null);
        }, 3000);
        
        if (onAssessmentComplete) {
          onAssessmentComplete(result.assessment);
        }
      } else {
        setError(result.error);
        setSaveStatus(null);
      }
    } catch (err) {
      setError(err.message || 'An error occurred during assessment');
      setSaveStatus(null);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setHealthMetrics({
      age: '',
      bloodPressureSystolic: '',
      bloodPressureDiastolic: '',
      cholesterol: '',
      heartRate: '',
      weight: '',
      height: '',
      gender: 'Male'
    });
    setAssessment(null);
    setError(null);
    setSaveStatus(null);
  };

  if (assessment) {
    return (
      <div className="risk-assessment-result">
        <h2>Heart Disease Risk Assessment</h2>
        
        {saveStatus && (
          <div className="save-status-message success">
            ✓ {saveStatus}
          </div>
        )}
        
        <div className="risk-score-display">
          <div 
            className="risk-level-badge" 
            style={{ 
              backgroundColor: RiskAssessmentController.getRiskLevelColor(assessment.riskLevel),
              color: 'white'
            }}
          >
            {assessment.riskLevel}
          </div>
          <div className="risk-score">
            Risk Score: {assessment.riskScore}/100
          </div>
        </div>

        <div className="assessment-details">
          <h3>Contributing Factors</h3>
          <table className="factors-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Value</th>
                <th>Status</th>
                <th>Impact</th>
              </tr>
            </thead>
            <tbody>
              {assessment.contributingFactors.map((factor, index) => (
                <tr key={index}>
                  <td>{factor.name}</td>
                  <td>{factor.value}</td>
                  <td>
                    <span className={`status-badge status-${factor.status.toLowerCase().replace(' ', '-')}`}>
                      {factor.status}
                    </span>
                  </td>
                  <td>{(factor.importance * 100).toFixed(0)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="assessment-timestamp">
          <div>Assessment Date: {new Date(assessment.timestamp).toLocaleString()}</div>
          {assessment.id && (
            <div className="assessment-id">Assessment ID: {assessment.id}</div>
          )}
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary" onClick={resetForm}>
            New Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-risk-portal-view">
      <h2>Enter Health Metrics</h2>
      <p className="instruction-text">
        Please provide your current health information for an accurate cardiovascular risk assessment. All fields are required.
      </p>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {saveStatus && (
        <div className="save-status-message">
          {saveStatus}
        </div>
      )}

      <form onSubmit={handleSubmit} className="health-metrics-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Age (years)</label>
            <input
              type="number"
              id="age"
              name="age"
              value={healthMetrics.age}
              onChange={handleInputChange}
              required
              min="1"
              max="120"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={healthMetrics.gender}
              onChange={handleInputChange}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="bloodPressureSystolic">Blood Pressure - Systolic (mmHg)</label>
            <input
              type="number"
              id="bloodPressureSystolic"
              name="bloodPressureSystolic"
              value={healthMetrics.bloodPressureSystolic}
              onChange={handleInputChange}
              required
              min="70"
              max="250"
              placeholder="e.g., 120"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bloodPressureDiastolic">Blood Pressure - Diastolic (mmHg)</label>
            <input
              type="number"
              id="bloodPressureDiastolic"
              name="bloodPressureDiastolic"
              value={healthMetrics.bloodPressureDiastolic}
              onChange={handleInputChange}
              required
              min="40"
              max="150"
              placeholder="e.g., 80"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cholesterol">Total Cholesterol (mg/dL)</label>
            <input
              type="number"
              id="cholesterol"
              name="cholesterol"
              value={healthMetrics.cholesterol}
              onChange={handleInputChange}
              required
              min="100"
              max="400"
              placeholder="e.g., 200"
            />
          </div>

          <div className="form-group">
            <label htmlFor="heartRate">Heart Rate (bpm)</label>
            <input
              type="number"
              id="heartRate"
              name="heartRate"
              value={healthMetrics.heartRate}
              onChange={handleInputChange}
              required
              min="40"
              max="200"
              placeholder="e.g., 72"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={healthMetrics.weight}
              onChange={handleInputChange}
              required
              min="30"
              max="300"
              step="0.1"
              placeholder="e.g., 75"
            />
          </div>

          <div className="form-group">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              value={healthMetrics.height}
              onChange={handleInputChange}
              required
              min="100"
              max="250"
              step="0.1"
              placeholder="e.g., 175"
            />
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Calculating...' : 'Calculate Risk Level'}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={resetForm}
            disabled={loading}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default PatientRiskPortalView;
