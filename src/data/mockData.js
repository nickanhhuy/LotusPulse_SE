// Mock data for the application

export const mockPatientData = {
  patientInfo: {
    name: 'Michael Anderson',
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
  attributes: [
    { name: 'Blood Pressure', value: '145 / 90 mmHg (High)', status: 'warning' },
    { name: 'Cholesterol', value: '240 mg/dL (High)', status: 'warning' },
    { name: 'LDL Cholesterol', value: '160 mg/dL (High)', status: 'warning' },
    { name: 'HDL Cholesterol', value: '35 mg/dL (Low)', status: 'warning' },
    { name: 'Triglycerides', value: '200 mg/dL (Borderline High)', status: 'caution' },
    { name: 'Heart Rate', value: '78 bpm (Normal)', status: 'normal' },
    { name: 'BMI', value: '28.5 (Overweight)', status: 'caution' },
    { name: 'Blood Glucose', value: '110 mg/dL (Normal)', status: 'normal' },
    { name: 'Smoking Status', value: 'Former Smoker', status: 'caution' },
    { name: 'Exercise Frequency', value: '2 times/week', status: 'caution' },
    { name: 'Family History', value: 'Yes - Father had heart disease', status: 'warning' },
    { name: 'Stress Level', value: 'Moderate', status: 'caution' }
  ],
  alertSettings: {
    riskThreshold: 'High Risk',
    notificationMethod: 'Email',
    alertFrequency: 'Immediate',
    emailAddress: '[email]',
    phoneNumber: '[phone_number]',
    enableEmailAlerts: true,
    enableSMSAlerts: false
  },
  riskHistory: [
    { month: 'Mar 2025', score: 45, date: '2025-03-01' },
    { month: 'Apr 2025', score: 48, date: '2025-04-01' },
    { month: 'May 2025', score: 52, date: '2025-05-01' },
    { month: 'Jun 2025', score: 55, date: '2025-06-01' },
    { month: 'Jul 2025', score: 58, date: '2025-07-01' },
    { month: 'Aug 2025', score: 62, date: '2025-08-01' },
    { month: 'Sep 2025', score: 65, date: '2025-09-01' },
    { month: 'Oct 2025', score: 68, date: '2025-10-01' },
    { month: 'Nov 2025', score: 72, date: '2025-11-01' },
    { month: 'Dec 2025', score: 74, date: '2025-12-01' },
    { month: 'Jan 2026', score: 76, date: '2026-01-01' },
    { month: 'Feb 2026', score: 78, date: '2026-02-01' }
  ],
  detailedRiskHistory: [
    { 
      date: 'Feb 2026', 
      riskScore: 78, 
      bloodPressure: '145/90', 
      cholesterol: 240, 
      heartRate: 78,
      notes: 'Blood pressure elevated, medication adjustment recommended'
    },
    { 
      date: 'Jan 2026', 
      riskScore: 76, 
      bloodPressure: '142/88', 
      cholesterol: 238, 
      heartRate: 76,
      notes: 'Slight improvement in blood pressure'
    },
    { 
      date: 'Dec 2025', 
      riskScore: 74, 
      bloodPressure: '140/88', 
      cholesterol: 235, 
      heartRate: 75,
      notes: 'Continue current treatment plan'
    },
    { 
      date: 'Nov 2025', 
      riskScore: 72, 
      bloodPressure: '138/86', 
      cholesterol: 232, 
      heartRate: 74,
      notes: 'Patient showing gradual improvement'
    },
    { 
      date: 'Oct 2025', 
      riskScore: 68, 
      bloodPressure: '135/85', 
      cholesterol: 228, 
      heartRate: 73,
      notes: 'Lifestyle changes showing positive effect'
    },
    { 
      date: 'Sep 2025', 
      riskScore: 65, 
      bloodPressure: '132/84', 
      cholesterol: 225, 
      heartRate: 72,
      notes: 'Regular exercise routine established'
    },
    { 
      date: 'Aug 2025', 
      riskScore: 62, 
      bloodPressure: '130/82', 
      cholesterol: 222, 
      heartRate: 71,
      notes: 'Diet modifications showing results'
    },
    { 
      date: 'Jul 2025', 
      riskScore: 58, 
      bloodPressure: '128/80', 
      cholesterol: 218, 
      heartRate: 70,
      notes: 'Weight loss of 5 lbs noted'
    },
    { 
      date: 'Jun 2025', 
      riskScore: 55, 
      bloodPressure: '126/80', 
      cholesterol: 215, 
      heartRate: 69,
      notes: 'Patient compliant with medication'
    },
    { 
      date: 'May 2025', 
      riskScore: 52, 
      bloodPressure: '124/78', 
      cholesterol: 212, 
      heartRate: 68,
      notes: 'Stress management techniques implemented'
    },
    { 
      date: 'Apr 2025', 
      riskScore: 48, 
      bloodPressure: '122/76', 
      cholesterol: 208, 
      heartRate: 67,
      notes: 'Good progress, continue current plan'
    },
    { 
      date: 'Mar 2025', 
      riskScore: 45, 
      bloodPressure: '120/75', 
      cholesterol: 205, 
      heartRate: 66,
      notes: 'Baseline assessment completed'
    }
  ]
};

export const mockClinicalData = {};

export const mockRecordsData = {};

export const mockPopulationData = {};
