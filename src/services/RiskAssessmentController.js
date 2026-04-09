// Risk Assessment Controller
// Handles the business logic for heart disease risk assessment

class RiskAssessmentController {
  constructor() {
    this.databaseService = null;
  }

  setDatabaseService(service) {
    this.databaseService = service;
  }

  // Initialize assessment process
  initiateAssessment(patientId) {
    return {
      patientId,
      timestamp: new Date().toISOString(),
      status: 'initiated'
    };
  }

  // Add patient health information
  addPatientHealthInformation(healthMetrics) {
    // Validate health metrics
    const requiredFields = ['age', 'bloodPressureSystolic', 'bloodPressureDiastolic', 
                           'cholesterol', 'heartRate', 'weight', 'height'];
    
    for (const field of requiredFields) {
      if (healthMetrics[field] === undefined || healthMetrics[field] === null) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    return {
      ...healthMetrics,
      timestamp: new Date().toISOString(),
      validated: true
    };
  }

  // Create Heart Risk Assessment
  createHeartRiskAssessment(patientId, healthMetrics) {
    const riskScore = this.calculateRiskScore(healthMetrics);
    const riskLevel = this.determineRiskLevel(riskScore);
    
    const assessment = {
      patientId,
      riskScore,
      riskLevel,
      healthMetrics,
      timestamp: new Date().toISOString(),
      contributingFactors: this.identifyContributingFactors(healthMetrics, riskScore)
    };

    return assessment;
  }

  // Calculate risk score based on health metrics
  calculateRiskScore(metrics) {
    let score = 0;
    
    // Blood Pressure scoring (0-25 points)
    const bpSystolic = metrics.bloodPressureSystolic;
    if (bpSystolic >= 140) score += 25;
    else if (bpSystolic >= 130) score += 18;
    else if (bpSystolic >= 120) score += 10;
    else score += 5;

    // Cholesterol scoring (0-25 points)
    const cholesterol = metrics.cholesterol;
    if (cholesterol >= 240) score += 25;
    else if (cholesterol >= 200) score += 18;
    else if (cholesterol >= 180) score += 10;
    else score += 5;

    // Heart Rate scoring (0-15 points)
    const heartRate = metrics.heartRate;
    if (heartRate >= 100) score += 15;
    else if (heartRate >= 80) score += 10;
    else if (heartRate >= 60) score += 5;
    else score += 8;

    // BMI scoring (0-20 points)
    const bmi = this.calculateBMI(metrics.weight, metrics.height);
    if (bmi >= 30) score += 20;
    else if (bmi >= 25) score += 15;
    else if (bmi >= 18.5) score += 5;
    else score += 10;

    // Age factor (0-15 points)
    const age = metrics.age;
    if (age >= 65) score += 15;
    else if (age >= 55) score += 12;
    else if (age >= 45) score += 8;
    else score += 3;

    return Math.min(score, 100);
  }

  // Calculate BMI
  calculateBMI(weight, height) {
    // Assuming weight in kg and height in cm
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  }

  // Determine risk level from score
  determineRiskLevel(score) {
    if (score >= 70) return 'HIGH RISK';
    if (score >= 40) return 'MEDIUM RISK';
    return 'LOW RISK';
  }

  // Get risk level color
  getRiskLevelColor(riskLevel) {
    switch(riskLevel) {
      case 'HIGH RISK': return '#ef4444';
      case 'MEDIUM RISK': return '#f59e0b';
      case 'LOW RISK': return '#10b981';
      default: return '#6b7280';
    }
  }

  // Identify contributing factors
  identifyContributingFactors(metrics, riskScore) {
    const factors = [];
    
    const bpSystolic = metrics.bloodPressureSystolic;
    const bpDiastolic = metrics.bloodPressureDiastolic;
    let bpStatus = 'Normal';
    if (bpSystolic >= 140 || bpDiastolic >= 90) bpStatus = 'High';
    else if (bpSystolic >= 130 || bpDiastolic >= 80) bpStatus = 'Elevated';
    
    factors.push({
      name: 'Blood Pressure',
      value: `${bpSystolic} / ${bpDiastolic} mmHg`,
      status: bpStatus,
      importance: bpStatus === 'High' ? 0.25 : bpStatus === 'Elevated' ? 0.15 : 0.10
    });

    const cholesterol = metrics.cholesterol;
    let cholStatus = 'Normal';
    if (cholesterol >= 240) cholStatus = 'High';
    else if (cholesterol >= 200) cholStatus = 'Borderline High';
    
    factors.push({
      name: 'Cholesterol',
      value: `${cholesterol} mg/dL`,
      status: cholStatus,
      importance: cholStatus === 'High' ? 0.22 : cholStatus === 'Borderline High' ? 0.15 : 0.10
    });

    const heartRate = metrics.heartRate;
    let hrStatus = 'Normal';
    if (heartRate >= 100) hrStatus = 'Elevated';
    else if (heartRate >= 80) hrStatus = 'Slightly Elevated';
    
    factors.push({
      name: 'Heart Rate',
      value: `${heartRate} bpm`,
      status: hrStatus,
      importance: hrStatus === 'Elevated' ? 0.15 : 0.08
    });

    const bmi = this.calculateBMI(metrics.weight, metrics.height);
    let bmiStatus = 'Normal';
    if (bmi >= 30) bmiStatus = 'Obese';
    else if (bmi >= 25) bmiStatus = 'Overweight';
    else if (bmi < 18.5) bmiStatus = 'Underweight';
    
    factors.push({
      name: 'BMI',
      value: bmi.toFixed(1),
      status: bmiStatus,
      importance: bmiStatus === 'Obese' ? 0.20 : bmiStatus === 'Overweight' ? 0.15 : 0.08
    });

    return factors.sort((a, b) => b.importance - a.importance);
  }

  // Save assessment to database
  async saveAssessment(assessment) {
    if (!this.databaseService) {
      throw new Error('Database service not configured');
    }
    
    return await this.databaseService.saveAssessment(assessment);
  }

  // Submit health data (complete flow)
  async submitHealthData(patientId, healthMetrics) {
    try {
      // Validate and add patient health information
      const validatedMetrics = this.addPatientHealthInformation(healthMetrics);
      
      // Create heart risk assessment
      const assessment = this.createHeartRiskAssessment(patientId, validatedMetrics);
      
      // Save to database
      if (this.databaseService) {
        await this.saveAssessment(assessment);
      }
      
      return {
        success: true,
        assessment
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}

export default new RiskAssessmentController();
