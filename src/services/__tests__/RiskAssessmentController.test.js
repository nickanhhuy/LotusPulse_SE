// Basic tests for RiskAssessmentController
import RiskAssessmentController from '../RiskAssessmentController';

describe('RiskAssessmentController', () => {
  describe('calculateBMI', () => {
    test('calculates BMI correctly', () => {
      const bmi = RiskAssessmentController.calculateBMI(75, 175);
      expect(bmi).toBeCloseTo(24.49, 1);
    });
  });

  describe('calculateRiskScore', () => {
    test('calculates high risk score for poor health metrics', () => {
      const metrics = {
        age: 60,
        bloodPressureSystolic: 150,
        bloodPressureDiastolic: 95,
        cholesterol: 250,
        heartRate: 90,
        weight: 95,
        height: 170
      };
      
      const score = RiskAssessmentController.calculateRiskScore(metrics);
      expect(score).toBeGreaterThanOrEqual(70);
    });

    test('calculates low risk score for good health metrics', () => {
      const metrics = {
        age: 35,
        bloodPressureSystolic: 115,
        bloodPressureDiastolic: 75,
        cholesterol: 180,
        heartRate: 65,
        weight: 70,
        height: 175
      };
      
      const score = RiskAssessmentController.calculateRiskScore(metrics);
      expect(score).toBeLessThan(40);
    });
  });

  describe('determineRiskLevel', () => {
    test('returns HIGH RISK for score >= 70', () => {
      expect(RiskAssessmentController.determineRiskLevel(75)).toBe('HIGH RISK');
      expect(RiskAssessmentController.determineRiskLevel(90)).toBe('HIGH RISK');
    });

    test('returns MEDIUM RISK for score 40-69', () => {
      expect(RiskAssessmentController.determineRiskLevel(40)).toBe('MEDIUM RISK');
      expect(RiskAssessmentController.determineRiskLevel(55)).toBe('MEDIUM RISK');
      expect(RiskAssessmentController.determineRiskLevel(69)).toBe('MEDIUM RISK');
    });

    test('returns LOW RISK for score < 40', () => {
      expect(RiskAssessmentController.determineRiskLevel(25)).toBe('LOW RISK');
      expect(RiskAssessmentController.determineRiskLevel(39)).toBe('LOW RISK');
    });
  });

  describe('addPatientHealthInformation', () => {
    test('validates required fields', () => {
      const incompleteMetrics = {
        age: 50,
        bloodPressureSystolic: 120
      };
      
      expect(() => {
        RiskAssessmentController.addPatientHealthInformation(incompleteMetrics);
      }).toThrow('Missing required field');
    });

    test('accepts complete health metrics', () => {
      const completeMetrics = {
        age: 50,
        bloodPressureSystolic: 120,
        bloodPressureDiastolic: 80,
        cholesterol: 200,
        heartRate: 70,
        weight: 75,
        height: 175
      };
      
      const result = RiskAssessmentController.addPatientHealthInformation(completeMetrics);
      expect(result.validated).toBe(true);
      expect(result.age).toBe(50);
    });
  });

  describe('createHeartRiskAssessment', () => {
    test('creates complete assessment object', () => {
      const metrics = {
        age: 55,
        bloodPressureSystolic: 140,
        bloodPressureDiastolic: 90,
        cholesterol: 220,
        heartRate: 75,
        weight: 80,
        height: 175
      };
      
      const assessment = RiskAssessmentController.createHeartRiskAssessment('patient123', metrics);
      
      expect(assessment.patientId).toBe('patient123');
      expect(assessment.riskScore).toBeDefined();
      expect(assessment.riskLevel).toBeDefined();
      expect(assessment.contributingFactors).toBeDefined();
      expect(assessment.contributingFactors.length).toBeGreaterThan(0);
      expect(assessment.timestamp).toBeDefined();
    });
  });

  describe('identifyContributingFactors', () => {
    test('identifies and sorts contributing factors by importance', () => {
      const metrics = {
        age: 55,
        bloodPressureSystolic: 150,
        bloodPressureDiastolic: 95,
        cholesterol: 240,
        heartRate: 85,
        weight: 90,
        height: 170
      };
      
      const factors = RiskAssessmentController.identifyContributingFactors(metrics, 75);
      
      expect(factors.length).toBeGreaterThan(0);
      expect(factors[0].importance).toBeGreaterThanOrEqual(factors[factors.length - 1].importance);
      
      const factorNames = factors.map(f => f.name);
      expect(factorNames).toContain('Blood Pressure');
      expect(factorNames).toContain('Cholesterol');
      expect(factorNames).toContain('Heart Rate');
      expect(factorNames).toContain('BMI');
    });
  });
});
