import "./ManageRecords.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../clinical/ClinicalDashboard.css";
import {
  getAccessForAdmin,
  getAccessList,
} from "../../services/AccessController";

function ManageRecords() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const patients = [
    {
      id: 1,
      name: "Vu Anh Huy Nguyen",
      age: 45,
      riskLevel: "Low",
      lastAssessment: "Feb 2, 2026",
    },
    {
      id: 2,
      name: "Xuan Hoang Ha",
      age: 38,
      riskLevel: "Low",
      lastAssessment: "Jan 10, 2026",
    },
    {
      id: 3,
      name: "John Mendes",
      age: 62,
      riskLevel: "High",
      lastAssessment: "Jan 3, 2026",
    },
    {
      id: 4,
      name: "Park Kim",
      age: 51,
      riskLevel: "Medium",
      lastAssessment: "Jan 1, 2026",
    },
    {
      id: 5,
      name: "Lanag Jun",
      age: 58,
      riskLevel: "High",
      lastAssessment: "Dec 25, 2025",
    },
  ];

  const adminAccess = getAccessForAdmin();

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleViewRoleSettings = () => {
    navigate(`/records/manage/role`);
  };

  const handleViewPatientRecordSettings = (patient) => {
    navigate(`/records/manage/patient/${patient.id}`, { state: { patient } });
  };

  const handleViewPatientReportHistory = (patient) => {
    navigate(`/records/manage/history/${patient.id}`, { state: { patient } });
  };

  const handleViewPatientReport = (patient) => {
    navigate(`/records/generate/patient/${patient.id}`, { state: { patient } });
  };

  return (
    <div className="clinical-dashboard">
      <div className="clinical-header">
        <h1>Record Management</h1>
      </div>

      <div
        className={`risk-badge risk-medium`}
        style={{ cursor: "pointer" }}
        onClick={() => handleViewRoleSettings()}
      >
        Update Role Settings
      </div>
      <br />
      <br />

      <div className="search-section">
        <input
          type="text"
          placeholder="Search Patient by Name..."
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
              <th>Patient Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>
                  {adminAccess.create && (
                    <span
                      className={`risk-badge risk-low`}
                      onClick={() => handleViewPatientReport(patient)}
                    >
                      Generate New Report
                    </span>
                  )}

                  {adminAccess.view && (
                    <span
                      className={`risk-badge risk-high`}
                      onClick={() => handleViewPatientReportHistory(patient)}
                    >
                      Report History
                    </span>
                  )}

                  {/* <span
                    className={`risk-badge risk-medium`}
                    onClick={() => handleViewPatientRecordSettings(patient)}
                  >
                    Update Settings
                  </span> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageRecords;
