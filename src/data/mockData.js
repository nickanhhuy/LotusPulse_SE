// Mock data for the application

export const mockPatientData = {
  patientInfo: {
    name: 'John Doe',
    age: 55,
    gender: 'Male',
    bloodType: 'O+',
    height: '5\'10"',
    weight: '185 lbs',
    lastAssessment: 'March 11, 2026'
  },
  currentRisk: {
    level: 'HIGH RISK',
    score: 78,
    color: '#ef4444'
  },
  keyFactors: [
    { name: 'Blood Pressure', value: '145 / 90 mmHg (High)' },
    { name: 'Cholesterol', value: '240 mg/dL (High)' },
    { name: 'Heart Rate', value: '78 bpm (Normal)' },
    { name: 'BMI', value: '28.5 (Overweight)' }
  ],
  riskHistory: [
    { month: 'Mar 2025', score: 45 },
    { month: 'Apr 2025', score: 48 },
    { month: 'May 2025', score: 52 },
    { month: 'Jun 2025', score: 55 },
    { month: 'Jul 2025', score: 58 },
    { month: 'Aug 2025', score: 62 },
    { month: 'Sep 2025', score: 65 },
    { month: 'Oct 2025', score: 68 },
    { month: 'Nov 2025', score: 72 },
    { month: 'Dec 2025', score: 74 },
    { month: 'Jan 2026', score: 76 },
    { month: 'Feb 2026', score: 78 }
  ]
};

export const mockClinicalData = {};

export const mockRecordsData = {};

export const mockPopulationData = {};
