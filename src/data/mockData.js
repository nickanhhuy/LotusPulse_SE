// Mock data for the application

export const mockPatientsData = [
  {
    id: 1,
    patientInfo: {
      name: 'John Mendes',
      age: 55,
      gender: 'Male',
      bloodType: 'O+',
      height: '5\'10"',
      weight: '84 kg',
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
      { name: 'HbA1c', value: '6.2% (Prediabetes)', status: 'caution' },
      { name: 'C-Reactive Protein', value: '4.5 mg/L (High)', status: 'warning' },
      { name: 'Homocysteine', value: '18 µmol/L (Elevated)', status: 'warning' },
      { name: 'Lipoprotein(a)', value: '65 mg/dL (Elevated)', status: 'caution' },
      { name: 'Ejection Fraction', value: '52% (Mildly Reduced)', status: 'caution' },
      { name: 'Coronary Calcium Score', value: '250 (Moderate)', status: 'warning' },
      { name: 'Smoking Status', value: 'Former Smoker', status: 'caution' },
      { name: 'Exercise Frequency', value: '2 times/week', status: 'caution' },
      { name: 'Family History', value: 'Yes - Father had heart disease', status: 'warning' },
      { name: 'Stress Level', value: 'Moderate', status: 'caution' },
      { name: 'Sleep Quality', value: 'Poor (5 hrs/night)', status: 'warning' },
      { name: 'Alcohol Consumption', value: 'Moderate (3-4 drinks/week)', status: 'caution' }
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
      { date: 'Feb 2026', riskScore: 78, bloodPressure: '145/90', cholesterol: 240, heartRate: 78, notes: 'Blood pressure elevated, medication adjustment recommended' },
      { date: 'Jan 2026', riskScore: 76, bloodPressure: '142/88', cholesterol: 238, heartRate: 76, notes: 'Slight improvement in blood pressure' },
      { date: 'Dec 2025', riskScore: 74, bloodPressure: '140/88', cholesterol: 235, heartRate: 75, notes: 'Continue current treatment plan' },
      { date: 'Nov 2025', riskScore: 72, bloodPressure: '138/86', cholesterol: 232, heartRate: 74, notes: 'Patient showing gradual improvement' },
      { date: 'Oct 2025', riskScore: 68, bloodPressure: '135/85', cholesterol: 228, heartRate: 73, notes: 'Lifestyle changes showing positive effect' },
      { date: 'Sep 2025', riskScore: 65, bloodPressure: '132/84', cholesterol: 225, heartRate: 72, notes: 'Regular exercise routine established' },
      { date: 'Aug 2025', riskScore: 62, bloodPressure: '130/82', cholesterol: 222, heartRate: 71, notes: 'Diet modifications showing results' },
      { date: 'Jul 2025', riskScore: 58, bloodPressure: '128/80', cholesterol: 218, heartRate: 70, notes: 'Weight loss of 5 lbs noted' },
      { date: 'Jun 2025', riskScore: 55, bloodPressure: '126/80', cholesterol: 215, heartRate: 69, notes: 'Patient compliant with medication' },
      { date: 'May 2025', riskScore: 52, bloodPressure: '124/78', cholesterol: 212, heartRate: 68, notes: 'Stress management techniques implemented' },
      { date: 'Apr 2025', riskScore: 48, bloodPressure: '122/76', cholesterol: 208, heartRate: 67, notes: 'Good progress, continue current plan' },
      { date: 'Mar 2025', riskScore: 45, bloodPressure: '120/75', cholesterol: 205, heartRate: 66, notes: 'Baseline assessment completed' }
    ]
  },
  {
    id: 2,
    patientInfo: {
      name: 'Park Kim',
      age: 48,
      gender: 'Female',
      bloodType: 'A+',
      height: '5\'6"',
      weight: '73 kg',
      lastAssessment: 'March 10, 2026'
    },
    currentRisk: {
      level: 'MEDIUM RISK',
      score: 52,
      color: '#f59e0b'
    },
    keyFactors: [
      { name: 'Blood Pressure', value: '130 / 82 mmHg (Elevated)' },
      { name: 'Cholesterol', value: '210 mg/dL (Borderline High)' },
      { name: 'Heart Rate', value: '72 bpm (Normal)' },
      { name: 'BMI', value: '25.8 (Overweight)' }
    ],
    attributes: [
      { name: 'Blood Pressure', value: '130 / 82 mmHg (Elevated)', status: 'caution' },
      { name: 'Cholesterol', value: '210 mg/dL (Borderline High)', status: 'caution' },
      { name: 'LDL Cholesterol', value: '135 mg/dL (Borderline High)', status: 'caution' },
      { name: 'HDL Cholesterol', value: '48 mg/dL (Normal)', status: 'normal' },
      { name: 'Triglycerides', value: '165 mg/dL (Normal)', status: 'normal' },
      { name: 'Heart Rate', value: '72 bpm (Normal)', status: 'normal' },
      { name: 'BMI', value: '25.8 (Overweight)', status: 'caution' },
      { name: 'Blood Glucose', value: '98 mg/dL (Normal)', status: 'normal' },
      { name: 'HbA1c', value: '5.4% (Normal)', status: 'normal' },
      { name: 'C-Reactive Protein', value: '2.1 mg/L (Average)', status: 'caution' },
      { name: 'Homocysteine', value: '11 µmol/L (Normal)', status: 'normal' },
      { name: 'Lipoprotein(a)', value: '28 mg/dL (Normal)', status: 'normal' },
      { name: 'Ejection Fraction', value: '58% (Normal)', status: 'normal' },
      { name: 'Coronary Calcium Score', value: '45 (Mild)', status: 'caution' },
      { name: 'Smoking Status', value: 'Never Smoked', status: 'normal' },
      { name: 'Exercise Frequency', value: '3 times/week', status: 'normal' },
      { name: 'Family History', value: 'No significant history', status: 'normal' },
      { name: 'Stress Level', value: 'Low', status: 'normal' },
      { name: 'Sleep Quality', value: 'Good (7 hrs/night)', status: 'normal' },
      { name: 'Alcohol Consumption', value: 'Light (1-2 drinks/week)', status: 'normal' }
    ],
    alertSettings: {
      riskThreshold: 'Medium Risk',
      notificationMethod: 'Both',
      alertFrequency: 'Daily',
      emailAddress: '[email]',
      phoneNumber: '[phone_number]',
      enableEmailAlerts: true,
      enableSMSAlerts: true
    },
    riskHistory: [
      { month: 'Mar 2025', score: 58, date: '2025-03-01' },
      { month: 'Apr 2025', score: 57, date: '2025-04-01' },
      { month: 'May 2025', score: 56, date: '2025-05-01' },
      { month: 'Jun 2025', score: 55, date: '2025-06-01' },
      { month: 'Jul 2025', score: 54, date: '2025-07-01' },
      { month: 'Aug 2025', score: 53, date: '2025-08-01' },
      { month: 'Sep 2025', score: 53, date: '2025-09-01' },
      { month: 'Oct 2025', score: 52, date: '2025-10-01' },
      { month: 'Nov 2025', score: 52, date: '2025-11-01' },
      { month: 'Dec 2025', score: 52, date: '2025-12-01' },
      { month: 'Jan 2026', score: 52, date: '2026-01-01' },
      { month: 'Feb 2026', score: 52, date: '2026-02-01' }
    ],
    detailedRiskHistory: [
      { date: 'Feb 2026', riskScore: 52, bloodPressure: '130/82', cholesterol: 210, heartRate: 72, notes: 'Stable condition, maintain current lifestyle' },
      { date: 'Jan 2026', riskScore: 52, bloodPressure: '130/82', cholesterol: 210, heartRate: 72, notes: 'Good adherence to exercise routine' },
      { date: 'Dec 2025', riskScore: 52, bloodPressure: '128/80', cholesterol: 208, heartRate: 71, notes: 'Continue healthy diet plan' },
      { date: 'Nov 2025', riskScore: 52, bloodPressure: '128/80', cholesterol: 208, heartRate: 71, notes: 'Weight stable, good progress' },
      { date: 'Oct 2025', riskScore: 52, bloodPressure: '130/82', cholesterol: 210, heartRate: 72, notes: 'Regular checkups recommended' },
      { date: 'Sep 2025', riskScore: 53, bloodPressure: '132/82', cholesterol: 212, heartRate: 73, notes: 'Minor fluctuation in readings' },
      { date: 'Aug 2025', riskScore: 53, bloodPressure: '132/82', cholesterol: 212, heartRate: 73, notes: 'Stress management effective' },
      { date: 'Jul 2025', riskScore: 54, bloodPressure: '132/84', cholesterol: 214, heartRate: 73, notes: 'Continue current treatment' },
      { date: 'Jun 2025', riskScore: 55, bloodPressure: '134/84', cholesterol: 216, heartRate: 74, notes: 'Slight improvement needed' },
      { date: 'May 2025', riskScore: 56, bloodPressure: '134/84', cholesterol: 218, heartRate: 74, notes: 'Dietary adjustments recommended' },
      { date: 'Apr 2025', riskScore: 57, bloodPressure: '136/86', cholesterol: 220, heartRate: 75, notes: 'Started exercise program' },
      { date: 'Mar 2025', riskScore: 58, bloodPressure: '136/86', cholesterol: 222, heartRate: 75, notes: 'Initial assessment completed' }
    ]
  },
  {
    id: 3,
    patientInfo: {
      name: 'Vu Anh Huy Nguyen',
      age: 62,
      gender: 'Male',
      bloodType: 'B+',
      height: '5\'8"',
      weight: '77 kg',
      lastAssessment: 'March 9, 2026'
    },
    currentRisk: {
      level: 'LOW RISK',
      score: 32,
      color: '#10b981'
    },
    keyFactors: [
      { name: 'Blood Pressure', value: '118 / 76 mmHg (Normal)' },
      { name: 'Cholesterol', value: '185 mg/dL (Normal)' },
      { name: 'Heart Rate', value: '68 bpm (Normal)' },
      { name: 'BMI', value: '23.2 (Normal)' }
    ],
    attributes: [
      { name: 'Blood Pressure', value: '118 / 76 mmHg (Normal)', status: 'normal' },
      { name: 'Cholesterol', value: '185 mg/dL (Normal)', status: 'normal' },
      { name: 'LDL Cholesterol', value: '110 mg/dL (Normal)', status: 'normal' },
      { name: 'HDL Cholesterol', value: '58 mg/dL (Good)', status: 'normal' },
      { name: 'Triglycerides', value: '125 mg/dL (Normal)', status: 'normal' },
      { name: 'Heart Rate', value: '68 bpm (Normal)', status: 'normal' },
      { name: 'BMI', value: '23.2 (Normal)', status: 'normal' },
      { name: 'Blood Glucose', value: '92 mg/dL (Normal)', status: 'normal' },
      { name: 'HbA1c', value: '5.1% (Normal)', status: 'normal' },
      { name: 'C-Reactive Protein', value: '0.8 mg/L (Low)', status: 'normal' },
      { name: 'Homocysteine', value: '8 µmol/L (Normal)', status: 'normal' },
      { name: 'Lipoprotein(a)', value: '15 mg/dL (Normal)', status: 'normal' },
      { name: 'Ejection Fraction', value: '62% (Normal)', status: 'normal' },
      { name: 'Coronary Calcium Score', value: '0 (None)', status: 'normal' },
      { name: 'Smoking Status', value: 'Never Smoked', status: 'normal' },
      { name: 'Exercise Frequency', value: '5 times/week', status: 'normal' },
      { name: 'Family History', value: 'No significant history', status: 'normal' },
      { name: 'Stress Level', value: 'Low', status: 'normal' },
      { name: 'Sleep Quality', value: 'Excellent (8 hrs/night)', status: 'normal' },
      { name: 'Alcohol Consumption', value: 'Minimal (Occasional)', status: 'normal' }
    ],
    alertSettings: {
      riskThreshold: 'High Risk',
      notificationMethod: 'Email',
      alertFrequency: 'Weekly',
      emailAddress: '[email]',
      phoneNumber: '[phone_number]',
      enableEmailAlerts: true,
      enableSMSAlerts: false
    },
    riskHistory: [
      { month: 'Mar 2025', score: 35, date: '2025-03-01' },
      { month: 'Apr 2025', score: 34, date: '2025-04-01' },
      { month: 'May 2025', score: 34, date: '2025-05-01' },
      { month: 'Jun 2025', score: 33, date: '2025-06-01' },
      { month: 'Jul 2025', score: 33, date: '2025-07-01' },
      { month: 'Aug 2025', score: 32, date: '2025-08-01' },
      { month: 'Sep 2025', score: 32, date: '2025-09-01' },
      { month: 'Oct 2025', score: 32, date: '2025-10-01' },
      { month: 'Nov 2025', score: 32, date: '2025-11-01' },
      { month: 'Dec 2025', score: 32, date: '2025-12-01' },
      { month: 'Jan 2026', score: 32, date: '2026-01-01' },
      { month: 'Feb 2026', score: 32, date: '2026-02-01' }
    ],
    detailedRiskHistory: [
      { date: 'Feb 2026', riskScore: 32, bloodPressure: '118/76', cholesterol: 185, heartRate: 68, notes: 'Excellent health status maintained' },
      { date: 'Jan 2026', riskScore: 32, bloodPressure: '118/76', cholesterol: 185, heartRate: 68, notes: 'Continue current healthy lifestyle' },
      { date: 'Dec 2025', riskScore: 32, bloodPressure: '118/76', cholesterol: 185, heartRate: 68, notes: 'All metrics within normal range' },
      { date: 'Nov 2025', riskScore: 32, bloodPressure: '118/76', cholesterol: 185, heartRate: 68, notes: 'Exemplary health management' },
      { date: 'Oct 2025', riskScore: 32, bloodPressure: '118/76', cholesterol: 185, heartRate: 68, notes: 'No concerns, annual checkup scheduled' },
      { date: 'Sep 2025', riskScore: 32, bloodPressure: '118/76', cholesterol: 185, heartRate: 68, notes: 'Consistent exercise routine maintained' },
      { date: 'Aug 2025', riskScore: 32, bloodPressure: '118/76', cholesterol: 185, heartRate: 68, notes: 'Healthy diet adherence excellent' },
      { date: 'Jul 2025', riskScore: 33, bloodPressure: '120/78', cholesterol: 188, heartRate: 69, notes: 'Minor seasonal variation' },
      { date: 'Jun 2025', riskScore: 33, bloodPressure: '120/78', cholesterol: 188, heartRate: 69, notes: 'Overall health excellent' },
      { date: 'May 2025', riskScore: 34, bloodPressure: '120/78', cholesterol: 190, heartRate: 69, notes: 'Continue preventive care' },
      { date: 'Apr 2025', riskScore: 34, bloodPressure: '120/78', cholesterol: 190, heartRate: 69, notes: 'Good health status' },
      { date: 'Mar 2025', riskScore: 35, bloodPressure: '122/78', cholesterol: 192, heartRate: 70, notes: 'Baseline assessment - healthy' }
    ]
  },
  {
    id: 4,
    patientInfo: {
      name: 'Lanag Jun',
      age: 58,
      gender: 'Female',
      bloodType: 'AB+',
      height: '5\'4"',
      weight: '88 kg',
      lastAssessment: 'March 8, 2026'
    },
    currentRisk: {
      level: 'HIGH RISK',
      score: 82,
      color: '#ef4444'
    },
    keyFactors: [
      { name: 'Blood Pressure', value: '152 / 95 mmHg (Stage 2 High)' },
      { name: 'Cholesterol', value: '265 mg/dL (High)' },
      { name: 'Heart Rate', value: '85 bpm (Elevated)' },
      { name: 'BMI', value: '33.5 (Obese)' }
    ],
    attributes: [
      { name: 'Blood Pressure', value: '152 / 95 mmHg (Stage 2 High)', status: 'warning' },
      { name: 'Cholesterol', value: '265 mg/dL (High)', status: 'warning' },
      { name: 'LDL Cholesterol', value: '180 mg/dL (Very High)', status: 'warning' },
      { name: 'HDL Cholesterol', value: '32 mg/dL (Low)', status: 'warning' },
      { name: 'Triglycerides', value: '245 mg/dL (High)', status: 'warning' },
      { name: 'Heart Rate', value: '85 bpm (Elevated)', status: 'caution' },
      { name: 'BMI', value: '33.5 (Obese)', status: 'warning' },
      { name: 'Blood Glucose', value: '128 mg/dL (Prediabetes)', status: 'warning' },
      { name: 'HbA1c', value: '6.8% (Prediabetes)', status: 'warning' },
      { name: 'C-Reactive Protein', value: '6.2 mg/L (Very High)', status: 'warning' },
      { name: 'Homocysteine', value: '22 µmol/L (High)', status: 'warning' },
      { name: 'Lipoprotein(a)', value: '85 mg/dL (High)', status: 'warning' },
      { name: 'Ejection Fraction', value: '48% (Reduced)', status: 'warning' },
      { name: 'Coronary Calcium Score', value: '420 (Severe)', status: 'warning' },
      { name: 'Smoking Status', value: 'Current Smoker (10/day)', status: 'warning' },
      { name: 'Exercise Frequency', value: 'Rarely (< 1 time/week)', status: 'warning' },
      { name: 'Family History', value: 'Yes - Both parents had CVD', status: 'warning' },
      { name: 'Stress Level', value: 'High', status: 'warning' },
      { name: 'Sleep Quality', value: 'Very Poor (4 hrs/night)', status: 'warning' },
      { name: 'Alcohol Consumption', value: 'Heavy (Daily)', status: 'warning' }
    ],
    alertSettings: {
      riskThreshold: 'High Risk',
      notificationMethod: 'Both',
      alertFrequency: 'Immediate',
      emailAddress: '[email]',
      phoneNumber: '[phone_number]',
      enableEmailAlerts: true,
      enableSMSAlerts: true
    },
    riskHistory: [
      { month: 'Mar 2025', score: 68, date: '2025-03-01' },
      { month: 'Apr 2025', score: 70, date: '2025-04-01' },
      { month: 'May 2025', score: 72, date: '2025-05-01' },
      { month: 'Jun 2025', score: 74, date: '2025-06-01' },
      { month: 'Jul 2025', score: 76, date: '2025-07-01' },
      { month: 'Aug 2025', score: 77, date: '2025-08-01' },
      { month: 'Sep 2025', score: 78, date: '2025-09-01' },
      { month: 'Oct 2025', score: 79, date: '2025-10-01' },
      { month: 'Nov 2025', score: 80, date: '2025-11-01' },
      { month: 'Dec 2025', score: 81, date: '2025-12-01' },
      { month: 'Jan 2026', score: 82, date: '2026-01-01' },
      { month: 'Feb 2026', score: 82, date: '2026-02-01' }
    ],
    detailedRiskHistory: [
      { date: 'Feb 2026', riskScore: 82, bloodPressure: '152/95', cholesterol: 265, heartRate: 85, notes: 'Urgent intervention required, multiple risk factors' },
      { date: 'Jan 2026', riskScore: 82, bloodPressure: '152/95', cholesterol: 265, heartRate: 85, notes: 'Patient non-compliant with medication' },
      { date: 'Dec 2025', riskScore: 81, bloodPressure: '150/94', cholesterol: 262, heartRate: 84, notes: 'Continued deterioration, counseling scheduled' },
      { date: 'Nov 2025', riskScore: 80, bloodPressure: '150/92', cholesterol: 260, heartRate: 83, notes: 'Lifestyle modifications not implemented' },
      { date: 'Oct 2025', riskScore: 79, bloodPressure: '148/92', cholesterol: 258, heartRate: 83, notes: 'Weight gain noted, diet plan revised' },
      { date: 'Sep 2025', riskScore: 78, bloodPressure: '148/90', cholesterol: 255, heartRate: 82, notes: 'Smoking cessation program recommended' },
      { date: 'Aug 2025', riskScore: 77, bloodPressure: '146/90', cholesterol: 252, heartRate: 81, notes: 'Multiple risk factors identified' },
      { date: 'Jul 2025', riskScore: 76, bloodPressure: '145/88', cholesterol: 250, heartRate: 80, notes: 'Medication compliance issues' },
      { date: 'Jun 2025', riskScore: 74, bloodPressure: '144/88', cholesterol: 248, heartRate: 80, notes: 'Stress management needed' },
      { date: 'May 2025', riskScore: 72, bloodPressure: '142/86', cholesterol: 245, heartRate: 79, notes: 'Initial treatment plan established' },
      { date: 'Apr 2025', riskScore: 70, bloodPressure: '140/86', cholesterol: 242, heartRate: 78, notes: 'Comprehensive assessment completed' },
      { date: 'Mar 2025', riskScore: 68, bloodPressure: '138/84', cholesterol: 240, heartRate: 77, notes: 'Baseline - multiple concerns identified' }
    ]
  },
  {
    id: 5,
    patientInfo: {
      name: 'Xuan Hoang Ha',
      age: 45,
      gender: 'Male',
      bloodType: 'O-',
      height: '6\'1"',
      weight: '81 kg',
      lastAssessment: 'March 12, 2026'
    },
    currentRisk: {
      level: 'MEDIUM RISK',
      score: 48,
      color: '#f59e0b'
    },
    keyFactors: [
      { name: 'Blood Pressure', value: '128 / 80 mmHg (Elevated)' },
      { name: 'Cholesterol', value: '205 mg/dL (Borderline High)' },
      { name: 'Heart Rate', value: '70 bpm (Normal)' },
      { name: 'BMI', value: '23.5 (Normal)' }
    ],
    attributes: [
      { name: 'Blood Pressure', value: '128 / 80 mmHg (Elevated)', status: 'caution' },
      { name: 'Cholesterol', value: '205 mg/dL (Borderline High)', status: 'caution' },
      { name: 'LDL Cholesterol', value: '130 mg/dL (Borderline High)', status: 'caution' },
      { name: 'HDL Cholesterol', value: '45 mg/dL (Normal)', status: 'normal' },
      { name: 'Triglycerides', value: '155 mg/dL (Normal)', status: 'normal' },
      { name: 'Heart Rate', value: '70 bpm (Normal)', status: 'normal' },
      { name: 'BMI', value: '23.5 (Normal)', status: 'normal' },
      { name: 'Blood Glucose', value: '102 mg/dL (Normal)', status: 'normal' },
      { name: 'HbA1c', value: '5.6% (Normal)', status: 'normal' },
      { name: 'C-Reactive Protein', value: '2.8 mg/L (Average)', status: 'caution' },
      { name: 'Homocysteine', value: '13 µmol/L (Borderline)', status: 'caution' },
      { name: 'Lipoprotein(a)', value: '35 mg/dL (Normal)', status: 'normal' },
      { name: 'Ejection Fraction', value: '60% (Normal)', status: 'normal' },
      { name: 'Coronary Calcium Score', value: '25 (Minimal)', status: 'caution' },
      { name: 'Smoking Status', value: 'Never Smoked', status: 'normal' },
      { name: 'Exercise Frequency', value: '4 times/week', status: 'normal' },
      { name: 'Family History', value: 'Mother had hypertension', status: 'caution' },
      { name: 'Stress Level', value: 'Moderate', status: 'caution' },
      { name: 'Sleep Quality', value: 'Fair (6 hrs/night)', status: 'caution' },
      { name: 'Alcohol Consumption', value: 'Light (2 drinks/week)', status: 'normal' }
    ],
    alertSettings: {
      riskThreshold: 'Medium Risk',
      notificationMethod: 'Email',
      alertFrequency: 'Daily',
      emailAddress: '[email]',
      phoneNumber: '[phone_number]',
      enableEmailAlerts: true,
      enableSMSAlerts: false
    },
    riskHistory: [
      { month: 'Mar 2025', score: 42, date: '2025-03-01' },
      { month: 'Apr 2025', score: 43, date: '2025-04-01' },
      { month: 'May 2025', score: 44, date: '2025-05-01' },
      { month: 'Jun 2025', score: 45, date: '2025-06-01' },
      { month: 'Jul 2025', score: 46, date: '2025-07-01' },
      { month: 'Aug 2025', score: 46, date: '2025-08-01' },
      { month: 'Sep 2025', score: 47, date: '2025-09-01' },
      { month: 'Oct 2025', score: 47, date: '2025-10-01' },
      { month: 'Nov 2025', score: 48, date: '2025-11-01' },
      { month: 'Dec 2025', score: 48, date: '2025-12-01' },
      { month: 'Jan 2026', score: 48, date: '2026-01-01' },
      { month: 'Feb 2026', score: 48, date: '2026-02-01' }
    ],
    detailedRiskHistory: [
      { date: 'Feb 2026', riskScore: 48, bloodPressure: '128/80', cholesterol: 205, heartRate: 70, notes: 'Stable, continue monitoring' },
      { date: 'Jan 2026', riskScore: 48, bloodPressure: '128/80', cholesterol: 205, heartRate: 70, notes: 'Work stress management improving' },
      { date: 'Dec 2025', riskScore: 48, bloodPressure: '128/80', cholesterol: 205, heartRate: 70, notes: 'Maintain current lifestyle habits' },
      { date: 'Nov 2025', riskScore: 48, bloodPressure: '128/80', cholesterol: 205, heartRate: 70, notes: 'Exercise routine consistent' },
      { date: 'Oct 2025', riskScore: 47, bloodPressure: '126/80', cholesterol: 203, heartRate: 69, notes: 'Minor improvement in readings' },
      { date: 'Sep 2025', riskScore: 47, bloodPressure: '126/80', cholesterol: 203, heartRate: 69, notes: 'Diet modifications effective' },
      { date: 'Aug 2025', riskScore: 46, bloodPressure: '126/78', cholesterol: 200, heartRate: 69, notes: 'Good progress with lifestyle changes' },
      { date: 'Jul 2025', riskScore: 46, bloodPressure: '126/78', cholesterol: 200, heartRate: 69, notes: 'Continue preventive measures' },
      { date: 'Jun 2025', riskScore: 45, bloodPressure: '124/78', cholesterol: 198, heartRate: 68, notes: 'Regular checkups recommended' },
      { date: 'May 2025', riskScore: 44, bloodPressure: '124/78', cholesterol: 198, heartRate: 68, notes: 'Stress reduction techniques helpful' },
      { date: 'Apr 2025', riskScore: 43, bloodPressure: '122/76', cholesterol: 195, heartRate: 67, notes: 'Initial lifestyle counseling provided' },
      { date: 'Mar 2025', riskScore: 42, bloodPressure: '122/76', cholesterol: 195, heartRate: 67, notes: 'Baseline assessment - preventive focus' }
    ]
  }
];

export const mockPatientData = mockPatientsData[0];

export const mockClinicalData = {};

export const mockRecordsData = {};

export const mockPopulationData = {};
