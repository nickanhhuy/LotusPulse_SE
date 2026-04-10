export const mockReports = [
  {
    id: 1,
    patientId: 1,
    date: "14/3/2026 19:48:24",
    settings: {
      sections: {
        patientInformation: {
          included: true,
        },
        currentRiskAssessment: {
          included: false,
        },
        patientAttributes: {
          included: true,
          attributes: [
            {
              name: "High blood pressure",
              included: true,
            },
            {
              name: "High cholesterol",
              included: true,
            },
          ],
        },
        contributingFactors: {
          included: true,
          factors: [
            { name: "High blood pressure", included: true },
            { name: "High cholesterol", included: true },
            { name: "Smoking history", included: true },
            { name: "Low physical activity", included: true },
            { name: "Family history of heart disease", included: true },
          ],
        },
        riskHistory: {
          included: true,
          records: [
            { year: "2024", included: true },
            { year: "2025", included: true },
            { year: "2026", included: true },
          ],
        },
        riskChart: {
          included: true,
          title: "Heart Health Risk History (Last 12 Months)",
        },
      },
    },
  },
  {
    id: 2,
    patientId: 2,
    date: "15/3/2026 10:30:00",
    settings: {
      sections: {
        patientInformation: {
          included: true,
        },
        currentRiskAssessment: {
          included: true,
        },
        patientAttributes: {
          included: true,
          attributes: [
            {
              name: "High blood pressure",
              included: true,
            },
            {
              name: "High cholesterol",
              included: true,
            },
          ],
        },
        contributingFactors: {
          included: true,
          factors: [
            { name: "High blood pressure", included: true },
            { name: "High cholesterol", included: true },
            { name: "Smoking history", included: true },
            { name: "Low physical activity", included: true },
            { name: "Family history of heart disease", included: true },
          ],
        },
        riskHistory: {
          included: true,
          records: [
            { year: "2024", included: true },
            { year: "2025", included: true },
            { year: "2026", included: true },
          ],
        },
        riskChart: {
          included: true,
          title: "Heart Health Risk History (Last 12 Months)",
        },
      },
    },
  },
  {
    id: 3,
    patientId: 1,
    date: "16/3/2026 14:15:00",
    settings: {
      sections: {
        patientInformation: {
          included: true,
        },
        currentRiskAssessment: {
          included: true,
        },
        patientAttributes: {
          included: true,
          attributes: [
            {
              name: "High blood pressure",
              included: true,
            },
            {
              name: "High cholesterol",
              included: true,
            },
          ],
        },
        contributingFactors: {
          included: true,
          factors: [
            { name: "High blood pressure", included: true },
            { name: "High cholesterol", included: true },
            { name: "Smoking history", included: true },
            { name: "Low physical activity", included: true },
            { name: "Family history of heart disease", included: true },
          ],
        },
        riskHistory: {
          included: true,
          records: [
            { year: "2024", included: true },
            { year: "2025", included: true },
            { year: "2026", included: true },
          ],
        },
        riskChart: {
          included: true,
          title: "Heart Health Risk History (Last 12 Months)",
        },
      },
    },
  },
];

export const defaultSettings = {
  sections: {
    patientInformation: {
      included: true,
    },
    currentRiskAssessment: {
      included: true,
    },
    patientAttributes: {
      included: true,
      attributes: [
        {
          name: "Blood Pressure",
          included: true,
        },
        {
          name: "Cholesterol",
          included: true,
        },
        {
          name: "LDL Cholesterol",
          included: true,
        },
        {
          name: "HDL Cholesterol",
          included: true,
        },
        {
          name: "Triglycerides",
          included: true,
        },
        {
          name: "Heart Rate",
          included: true,
        },
        {
          name: "BMI",
          included: true,
        },
        {
          name: "Blood Glucose",
          included: true,
        },
        {
          name: "HbA1c",
          included: true,
        },
        {
          name: "C-Reactive Protein",
          included: true,
        },
        {
          name: "Homocysteine",
          included: true,
        },
        {
          name: "Lipoprotein(a)",
          included: true,
        },
        {
          name: "Ejection Fraction",
          included: true,
        },
        {
          name: "Coronary Calcium Score",
          included: true,
        },
        {
          name: "Smoking Status",
          included: true,
        },
        {
          name: "Exercise Frequency",
          included: true,
        },
        {
          name: "Family History",
          included: true,
        },
        {
          name: "Stress Level",
          included: true,
        },
        {
          name: "Sleep Quality",
          included: true,
        },
        {
          name: "Alcohol Consumption",
          included: true,
        },
      ],
    },
    contributingFactors: {
      factors: [
        { name: "High blood pressure", included: true },
        { name: "High cholesterol", included: true },
        { name: "Smoking history", included: true },
        { name: "Low physical activity", included: true },
        { name: "Family history of heart disease", included: true },
      ],
    },
    riskHistory: {
      included: true,
      records: [
        { year: "2024", included: true },
        { year: "2025", included: true },
        { year: "2026", included: true },
      ],
    },
    riskChart: {
      included: true,
    },
  },
};
