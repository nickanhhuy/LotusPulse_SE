// Database Service
// Handles data persistence operations

class DatabaseService {
  constructor() {
    this.assessments = [];
    this.initialized = false;
  }

  initialize() {
    if (!this.initialized) {
      // Load any existing data from localStorage
      const stored = localStorage.getItem('heartRiskAssessments');
      if (stored) {
        try {
          this.assessments = JSON.parse(stored);
        } catch (e) {
          console.error('Error loading stored assessments:', e);
          this.assessments = [];
        }
      }
      this.initialized = true;
    }
  }

  // Save assessment
  async saveAssessment(assessment) {
    this.initialize();
    
    return new Promise((resolve, reject) => {
      try {
        // Add unique ID if not present
        if (!assessment.id) {
          assessment.id = `assessment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        }
        
        // Check if assessment already exists for this patient at this time
        const existingIndex = this.assessments.findIndex(
          a => a.patientId === assessment.patientId && 
               Math.abs(new Date(a.timestamp) - new Date(assessment.timestamp)) < 1000
        );
        
        if (existingIndex >= 0) {
          // Update existing assessment
          this.assessments[existingIndex] = assessment;
        } else {
          // Add new assessment
          this.assessments.push(assessment);
        }
        
        // Persist to localStorage
        localStorage.setItem('heartRiskAssessments', JSON.stringify(this.assessments));
        
        resolve({
          success: true,
          assessmentId: assessment.id,
          message: 'Assessment saved successfully'
        });
      } catch (error) {
        reject({
          success: false,
          error: error.message
        });
      }
    });
  }

  // Get assessment by ID
  async getAssessment(assessmentId) {
    this.initialize();
    
    return new Promise((resolve) => {
      const assessment = this.assessments.find(a => a.id === assessmentId);
      resolve(assessment || null);
    });
  }

  // Get assessments by patient ID
  async getAssessmentsByPatient(patientId) {
    this.initialize();
    
    return new Promise((resolve) => {
      const patientAssessments = this.assessments
        .filter(a => a.patientId === patientId)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      resolve(patientAssessments);
    });
  }

  // Get latest assessment for a patient
  async getLatestAssessment(patientId) {
    this.initialize();
    
    return new Promise((resolve) => {
      const patientAssessments = this.assessments
        .filter(a => a.patientId === patientId)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      resolve(patientAssessments.length > 0 ? patientAssessments[0] : null);
    });
  }

  // Get all assessments
  async getAllAssessments() {
    this.initialize();
    
    return new Promise((resolve) => {
      resolve([...this.assessments]);
    });
  }

  // Delete assessment
  async deleteAssessment(assessmentId) {
    this.initialize();
    
    return new Promise((resolve, reject) => {
      try {
        const index = this.assessments.findIndex(a => a.id === assessmentId);
        
        if (index >= 0) {
          this.assessments.splice(index, 1);
          localStorage.setItem('heartRiskAssessments', JSON.stringify(this.assessments));
          resolve({
            success: true,
            message: 'Assessment deleted successfully'
          });
        } else {
          reject({
            success: false,
            error: 'Assessment not found'
          });
        }
      } catch (error) {
        reject({
          success: false,
          error: error.message
        });
      }
    });
  }

  // Clear all assessments (for testing)
  async clearAllAssessments() {
    this.initialize();
    
    return new Promise((resolve) => {
      this.assessments = [];
      localStorage.removeItem('heartRiskAssessments');
      resolve({
        success: true,
        message: 'All assessments cleared'
      });
    });
  }
}

export default new DatabaseService();
