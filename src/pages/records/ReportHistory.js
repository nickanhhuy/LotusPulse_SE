import "./ManageRecords.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../clinical/ClinicalDashboard.css";

function ReportHistory() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const patient = location.state?.patient || {
    name: "John Doe",
    age: 52,
    riskLevel: "High",
    lastAssessment: "Mar 10, 2026",
  };

  const patients = [
    {
      id: 1,
      date: "14/3/2026 19:48:24",
    },
    {
      id: 2,
      date: "15/3/2026 10:30:00",
    },
    {
      id: 3,
      date: "16/3/2026 14:15:00",
    },
  ];

  const filteredReports = patients.filter((patient) =>
    patient.date.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleViewPatientRecordSettings = (patient) => {
    navigate(`/records/manage/patient/${patient.id}`, { state: { patient } });
  };

  const handleViewPatientReport = (patient) => {
    navigate(`/records/generate/patient/${patient.id}`, { state: { patient } });
  };

  return (
    <div className="clinical-dashboard">
      <div className="clinical-header">
        <h1>Report History</h1>
      </div>

      <div className="content-section">
        <div>
          Patient:{patient.name} (ID: {patient.id})
        </div>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search Reports by Date..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="patient-list-section">
        <table className="patient-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.date}</td>
                <td>
                  <span
                    className={`risk-badge risk-low`}
                    // onClick={() => handleViewPatientReport(patient)}
                  >
                    Duplicate
                  </span>

                  <span
                    className={`risk-badge risk-medium`}
                    // onClick={() => handleViewPatientRecordSettings(patient)}
                  >
                    Edit
                  </span>
                  <span
                    className={`risk-badge risk-high`}
                    // onClick={() => handleViewPatientRecordSettings(patient)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportHistory;
