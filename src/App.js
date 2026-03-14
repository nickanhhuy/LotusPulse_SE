import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PatientDashboard from './pages/patient/PatientDashboard';
import PatientRiskDetails from './pages/patient/PatientRiskDetails';
import PatientRiskHistory from './pages/patient/PatientRiskHistory';
import ClinicalDashboard from './pages/clinical/ClinicalDashboard';
import ClinicalPatientRisk from './pages/clinical/ClinicalPatientRisk';
import ClinicalNoteReport from './pages/clinical/ClinicalNoteReport';
import ManageRecords from './pages/records/ManageRecords';
import ReportsPage from './pages/records/ReportsPage';
import PopulationDashboard from './pages/population/PopulationDashboard';
import RiskTrendAnalysis from './pages/population/RiskTrendAnalysis';
import PopulationRiskDashboard from './pages/population/PopulationRiskDashboard';
import PatientRecordSettings from './pages/records/PatientRecordSettings';
import ReportPreview from './pages/records/ReportPreview';
import ReportHistory from './pages/records/ReportHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/risk-details" element={<PatientRiskDetails />} />
          <Route path="/patient/risk-history" element={<PatientRiskHistory />} />
          <Route path="/clinical/dashboard" element={<ClinicalDashboard />} />
          <Route path="/clinical/patient-risk" element={<ClinicalPatientRisk />} />
          <Route path="/clinical/note-report" element={<ClinicalNoteReport />} />
          <Route path="/records/manage" element={<ManageRecords />} />
          <Route path="/records/generate/patient/:id" element={<ReportPreview />} />
          <Route path="/records/manage/history/:id" element={<ReportHistory />} />
          <Route path="/records/manage/patient/:id" element={<PatientRecordSettings />} />
          <Route path="/records/reports" element={<ReportsPage />} />
          <Route path="/population/dashboard" element={<PopulationDashboard />} />
          <Route path="/population/trends" element={<RiskTrendAnalysis />} />
          <Route path="/population/risk-dashboard" element={<PopulationRiskDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
