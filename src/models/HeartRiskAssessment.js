// Heart Risk Assessment Model
// Represents a heart disease risk assessment entity

class HeartRiskAssessment {
  constructor(data) {
    this.id = data.id || null;
    this.patientId = data.patientId;
    this.riskScore = data.riskScore;
    this.riskLevel = data.riskLevel;
    this.healthMetrics = data.healthMetrics;
    this.contributingFactors = data.contributingFactors || [];
    this.timestamp = data.timestamp || new Date().toISOString();
  }

  // Get risk level color
  getRiskLevelColor() {
    switch(this.riskLevel) {
      case 'HIGH RISK': return '#ef4444';
      case 'MEDIUM RISK': return '#f59e0b';
      case 'LOW RISK': return '#10b981';
      default: return '#6b7280';
    }
  }

  // Get formatted timestamp
  getFormattedTimestamp() {
    return new Date(this.timestamp).toLocaleString();
  }

  // Get top contributing factors
  getTopFactors(count = 3) {
    return this.contributingFactors
      .sort((a, b) => b.importance - a.importance)
      .slice(0, count);
  }

  // Check if assessment is recent (within last 24 hours)
  isRecent() {
    const assessmentDate = new Date(this.timestamp);
    const now = new Date();
    const hoursDiff = (now - assessmentDate) / (1000 * 60 * 60);
    return hoursDiff < 24;
  }

  // Get risk category
  getRiskCategory() {
    if (this.riskScore >= 70) return 'high';
    if (this.riskScore >= 40) return 'medium';
    return 'low';
  }

  // Convert to plain object for storage
  toJSON() {
    return {
      id: this.id,
      patientId: this.patientId,
      riskScore: this.riskScore,
      riskLevel: this.riskLevel,
      healthMetrics: this.healthMetrics,
      contributingFactors: this.contributingFactors,
      timestamp: this.timestamp
    };
  }

  // Create from plain object
  static fromJSON(json) {
    return new HeartRiskAssessment(json);
  }

  // Validate assessment data
  static validate(data) {
    const errors = [];

    if (!data.patientId) {
      errors.push('Patient ID is required');
    }

    if (data.riskScore === undefined || data.riskScore === null) {
      errors.push('Risk score is required');
    } else if (data.riskScore < 0 || data.riskScore > 100) {
      errors.push('Risk score must be between 0 and 100');
    }

    if (!data.riskLevel) {
      errors.push('Risk level is required');
    }

    if (!data.healthMetrics) {
      errors.push('Health metrics are required');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export default HeartRiskAssessment;
