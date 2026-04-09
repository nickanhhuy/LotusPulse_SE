import './PatientDashboard.css';
import { mockPatientsData } from '../../data/mockData';
import { useState } from 'react';

function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPatientId, setSelectedPatientId] = useState(1);
  
  const currentPatient = mockPatientsData.find(p => p.id === selectedPatientId) || mockPatientsData[0];

  const exportReport = () => {
    alert('Export Report functionality would be implemented here');
  };

  const configureAlerts = () => {
    setActiveTab('configure-alert');
  };

  const renderRiskChart = () => {
    return (
      <div className="chart-container">
        <svg className="risk-chart" viewBox="0 0 900 300" preserveAspectRatio="xMidYMid meet">
          <line x1="80" y1="250" x2="850" y2="250" stroke="#ddd" strokeWidth="1" />
          <line x1="80" y1="200" x2="850" y2="200" stroke="#ddd" strokeWidth="1" />
          <line x1="80" y1="150" x2="850" y2="150" stroke="#ddd" strokeWidth="1" />
          <line x1="80" y1="100" x2="850" y2="100" stroke="#ddd" strokeWidth="1" />
          <line x1="80" y1="50" x2="850" y2="50" stroke="#ddd" strokeWidth="1" />
          
          <text x="60" y="255" fontSize="12" fill="#666">0</text>
          <text x="50" y="205" fontSize="12" fill="#666">25</text>
          <text x="50" y="155" fontSize="12" fill="#666">50</text>
          <text x="50" y="105" fontSize="12" fill="#666">75</text>
          <text x="45" y="55" fontSize="12" fill="#666">100</text>
          
          <polyline
            points={currentPatient.detailedRiskHistory.slice().reverse().map((item, index) => {
              const x = 80 + (index * 65);
              const y = 250 - (item.riskScore * 2);
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="#8B5A6F"
            strokeWidth="3"
          />
          
          {currentPatient.detailedRiskHistory.slice().reverse().map((item, index) => {
            const x = 80 + (index * 65);
            const y = 250 - (item.riskScore * 2);
            return (
              <g key={index}>
                <circle cx={x} cy={y} r="5" fill="#8B5A6F" />
                <text x={x} y={y - 12} fontSize="11" fill="#8B5A6F" textAnchor="middle" fontWeight="bold">
                  {item.riskScore}
                </text>
                <text x={x} y="275" fontSize="9" fill="#666" textAnchor="middle">
                  {item.date.split(' ')[0]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <>
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
                    <select value={selectedPatientId} onChange={(e) => setSelectedPatientId(Number(e.target.value))}>
                      {mockPatientsData.map(patient => (
                        <option key={patient.id} value={patient.id}>
                          {patient.patientInfo.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>Age:</label>
                    <input type="text" value={currentPatient.patientInfo.age} readOnly />
                  </div>
                  <div className="detail-field">
                    <label>Gender:</label>
                    <input type="text" value={currentPatient.patientInfo.gender} readOnly />
                  </div>
                  <div className="detail-field">
                    <label>Blood Type:</label>
                    <input type="text" value={currentPatient.patientInfo.bloodType} readOnly />
                  </div>
                  <div className="detail-field">
                    <label>Height:</label>
                    <input type="text" value={currentPatient.patientInfo.height} readOnly />
                  </div>
                  <div className="detail-field">
                    <label>Weight:</label>
                    <input type="text" value={currentPatient.patientInfo.weight} readOnly />
                  </div>
                </div>
              </div>
            </div>

            <div className="second-row">
              <div className="risk-card">
                <h3>Current Heart Disease Risk</h3>
                <div className="risk-level" style={{color: currentPatient.currentRisk.color}}>
                  {currentPatient.currentRisk.level}
                </div>
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
                    {currentPatient.keyFactors.map((factor, index) => (
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
                {renderRiskChart()}
              </div>
            </div>
          </>
        );
      
      case 'attributes':
        return (
          <>
            <div className="page-header">
              <h1>Patient Attributes</h1>
            </div>
            <div className="factors-table-card">
              <table className="factors-table">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPatient.attributes.map((attr, index) => (
                    <tr key={index}>
                      <td>{attr.name}</td>
                      <td>{attr.value}</td>
                      <td>
                        <span className={`status-badge status-${attr.status}`}>
                          {attr.status === 'warning' ? 'Warning' : 
                           attr.status === 'caution' ? 'Caution' : 
                           'Normal'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        );
      
      case 'configure-alert':
        return (
          <>
            <div className="page-header">
              <h1>Configure Alerts</h1>
            </div>
            <div className="alert-config-section">
              <div className="config-card">
                <h3>Alert Settings</h3>
                <div className="config-options">
                  <div className="config-field">
                    <label>Risk Level Threshold:</label>
                    <select>
                      <option>High Risk</option>
                      <option>Medium Risk</option>
                      <option>Low Risk</option>
                    </select>
                  </div>
                  <div className="config-field">
                    <label>Notification Method:</label>
                    <select>
                      <option>Email</option>
                      <option>SMS</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <div className="config-field">
                    <label>Alert Frequency:</label>
                    <select>
                      <option>Immediate</option>
                      <option>Daily</option>
                      <option>Weekly</option>
                    </select>
                  </div>
                  <button className="btn" style={{marginTop: '20px'}}>Save Settings</button>
                </div>
              </div>
            </div>
          </>
        );
      
      case 'risk-history':
        return (
          <>
            <div className="page-header">
              <h1>Risk History</h1>
            </div>
            <div className="third-row">
              <div className="chart-section">
                <h3>Heart Health Risk History (Last 12 Months)</h3>
                {renderRiskChart()}
              </div>
            </div>
            <div className="history-table-section">
              <div className="factors-table-card">
                <h3>Detailed Risk History</h3>
                <table className="factors-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Risk Score</th>
                      <th>Blood Pressure</th>
                      <th>Cholesterol</th>
                      <th>Heart Rate</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPatient.detailedRiskHistory.map((record, index) => (
                      <tr key={index}>
                        <td>{record.date}</td>
                        <td>{record.riskScore}</td>
                        <td>{record.bloodPressure}</td>
                        <td>{record.cholesterol}</td>
                        <td>{record.heartRate}</td>
                        <td>{record.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="patient-dashboard-container">
      <nav className="vertical-nav">
        <ul>
          <li className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>
            Home
          </li>
          <li className={activeTab === 'attributes' ? 'active' : ''} onClick={() => setActiveTab('attributes')}>
            Attributes
          </li>
          <li className={activeTab === 'configure-alert' ? 'active' : ''} onClick={() => setActiveTab('configure-alert')}>
            Configure Alert
          </li>
          <li className={activeTab === 'risk-history' ? 'active' : ''} onClick={() => setActiveTab('risk-history')}>
            Risk History
          </li>
        </ul>
      </nav>
      <div className="patient-dashboard">
        {renderContent()}
      </div>
    </div>
  );
}

export default PatientDashboard;
