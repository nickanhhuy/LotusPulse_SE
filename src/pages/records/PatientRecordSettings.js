import { useLocation, useNavigate } from "react-router-dom";
import "../clinical/ClinicalPatientRisk.css";

function PatientRecordSettings() {
  const location = useLocation();
  const navigate = useNavigate();
  const patient = location.state?.patient || {
    name: "John Doe",
    age: 52,
    riskLevel: "High",
    lastAssessment: "Mar 10, 2026",
  };

  const settings = [
    { name: "View Report", options: ["Admin", "Doctor", "Patient"] },
    { name: "Update Report Data", options: ["Admin", "Doctor"] },
    { name: "Delete Report", options: ["Admin"] },
    { name: "Update Report Settings", options: ["Admin"] },
    { name: "Customize Report (Visibility)", options: ["Admin", "Doctor"] },
    { name: "Show in General Health", options: ["True"] },
  ];

  return (
    <div className="clinical-patient-risk">
      <div className="page-header">
        <h1>Report Settings</h1>
      </div>

      <div className="patient-summary">
        <div className="summary-card">
          <h3>Patient: {patient.name} (ID: {patient.id})</h3>
        </div>
      </div>

      <div className="content-section">
        <h2>Cardiac Reports</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Settings</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {settings.map((setting, index) => (
              <tr key={index}>
                <td>{setting.name}</td>
                <td>
                  {setting.options.map((opt) => (
                    <span key={opt} className="option-badge">
                      {opt}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Digestive System Reports</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Settings</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {settings.map((setting, index) => (
              <tr key={index}>
                <td>{setting.name}</td>
                <td>
                  {setting.options.map((opt) => (
                    <span key={opt} className="option-badge">
                      {opt}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Respiratory System Reports</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Settings</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {settings.map((setting, index) => (
              <tr key={index}>
                <td>{setting.name}</td>
                <td>
                  {setting.options.map((opt) => (
                    <span key={opt} className="option-badge">
                      {opt}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="action-buttons">
        <button
          className="btn-secondary"
          onClick={() => navigate("/records/manage")}
        >
          Back to Manage Records
        </button>
      </div>
    </div>
  );
}

export default PatientRecordSettings;
