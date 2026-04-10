import "./ManageRecords.css";
import { useState, useEffect, use } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../clinical/ClinicalDashboard.css";
import { mockReports } from "../../data/reportMockData";
import { getAccessForAdmin, getAccessList } from "../../services/AccessController";

function ReportHistory() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [reports, setReports] = useState(mockReports);
  const location = useLocation();
  const adminAccess = getAccessForAdmin();

  const patient = location.state?.patient || {
    name: "John Doe",
    age: 52,
    riskLevel: "High",
    lastAssessment: "Mar 10, 2026",
  };

  const filteredReports = reports.filter(
    (report) =>
      report.date.toLowerCase().includes(searchTerm.toLowerCase()) &&
      report.patientId === patient.id,
  );

  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  const handleView = (reportId) => {
    navigate("/records/view/" + reportId, { state: { patient } });
  };

  const handleDuplicate = (reportId) => {
    const reportToDuplicate = reports.find((r) => r.id === reportId);
    const id = Math.max(...reports.map((r) => r.id)) + 1;

    if (reportToDuplicate) {
      const newReport = {
        ...reportToDuplicate,
        date: formatDate(new Date()),
        id: id,
      };
      mockReports.push(newReport);
      setReports([...mockReports]);
    }
  };

  const handleDelete = (reportId) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      const index = mockReports.findIndex((r) => r.id === reportId);
      if (index !== -1) {
        mockReports.splice(index, 1);
      }

      setReports([...mockReports]);
    }
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
            {filteredReports.map((report) => (
              <tr key={report.id}>
                <td>{report.date}</td>
                <td>
                  {adminAccess.view && (
                    <span
                      className={`risk-badge risk-medium`}
                      onClick={() => handleView(report.id)}
                    >
                      View
                    </span>
                  )}

                  {adminAccess.create && (
                    <span
                      className={`risk-badge risk-low`}
                      onClick={() => handleDuplicate(report.id)}
                    >
                      Duplicate
                    </span>
                  )}

                  {adminAccess.delete && (
                    <span
                      className={`risk-badge risk-high`}
                      onClick={() => handleDelete(report.id)}
                    >
                      Delete
                    </span>
                  )}
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
