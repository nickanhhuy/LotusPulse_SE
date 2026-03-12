import './PatientDashboard.css';
import { mockPatientData } from '../../data/mockData';

function PatientDashboard() {
  const exportReport = () => {
    alert('Export Report functionality would be implemented here');
  };

  const configureAlerts = () => {
    alert('Configure Alerts functionality would be implemented here');
  };

  return (
    <div className="patient-dashboard">
      <div className="page-header">
        <h1>Patient Portal</h1>
      </div>

      <div className="first-row">
        <div className="patient-info-card">
          <div className="patient-image">
            <img src="/images/heart.jpg" alt="Patient" />
          </div>
          <div className="patient-details">
            <div className="detail-field">
              <label>Name:</label>
              <input type="text" value={mockPatientData.patientInfo.name} readOnly />
            </div>
            <div className="detail-field">
              <label>Age:</label>
              <input type="text" value={mockPatientData.patientInfo.age} readOnly />
            </div>
            <div className="detail-field">
              <label>Gender:</label>
              <input type="text" value={mockPatientData.patientInfo.gender} readOnly />
            </div>
            <div className="detail-field">
              <label>Blood Type:</label>
              <input type="text" value={mockPatientData.patientInfo.bloodType} readOnly />
            </div>
            <div className="detail-field">
              <label>Height:</label>
              <input type="text" value={mockPatientData.patientInfo.height} readOnly />
            </div>
            <div className="detail-field">
              <label>Weight:</label>
              <input type="text" value={mockPatientData.patientInfo.weight} readOnly />
            </div>
          </div>
        </div>
      </div>

      <div className="second-row">
        <div className="risk-card">
          <h3>Current Heart Disease Risk</h3>
          <div className="risk-level">HIGH RISK</div>
          <div className="button-group">
            <button className="btn" onClick={exportReport}>Export Report</button>
            <button className="btn" onClick={configureAlerts}>Configure Alerts</button>
          </div>
        </div>

        <div className="factors-table-card">
          <table className="factors-table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {mockPatientData.keyFactors.map((factor, index) => (
                <tr key={index}>
                  <td>{factor.name}</td>
                  <td>{factor.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="third-row">
        <div className="chart-section">
          <h3>Heart Health Risk History (Last 12 Months)</h3>
          <div className="chart-placeholder">
            <p>Interactive Line Chart showing Risk Score trends over time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
