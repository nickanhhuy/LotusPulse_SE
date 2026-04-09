import React, { useState } from 'react';
import PatientRiskPortalView from '../../components/PatientRiskPortalView';
import SavedAssessments from '../../components/SavedAssessments';
import './ViewHeartDiseaseRisk.css';

function ViewHeartDiseaseRisk() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAssessmentComplete = (assessment) => {
    // Trigger refresh of SavedAssessments component
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="view-heart-disease-risk-page">
      <div className="page-header">
        <h1>Heart Disease Risk Assessment</h1>
        <p className="page-description">
          Complete the health metrics form below to receive your personalized heart disease risk assessment.
        </p>
      </div>

      <div className="assessment-container">
        <PatientRiskPortalView 
          patientId="current_user"
          onAssessmentComplete={handleAssessmentComplete}
        />
      </div>

      <div className="saved-assessments-section">
        <SavedAssessments key={refreshKey} patientId="current_user" />
      </div>
    </div>
  );
}

export default ViewHeartDiseaseRisk;
