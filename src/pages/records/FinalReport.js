import { useLocation, useNavigate } from "react-router-dom";
import "./ClinicalPatientRisk.css";
import { mockPatientsData } from "../../data/mockData";
import { mockReports, defaultSettings } from "../../data/reportMockData";
import { useState } from "react";
import { useParams } from "react-router-dom";

function FinalReport() {
  const { id } = useParams();
  console.log("Report ID from URL:", id);

  const location = useLocation();
  const navigate = useNavigate();

  const reports = mockReports.find((report) => report.id == id);
  const settings = reports?.settings || {
    defaultSettings,
  };

  const currentPatient =
    mockPatientsData.find((p) => p.id === reports.patientId) || mockPatientsData[0];

  const patient = location.state?.patient || {
    name: currentPatient.patientInfo.name || "John Doe",
    age: currentPatient.patientInfo.age || 52,
    riskLevel: "High",
    lastAssessment: "Mar 10, 2026",
  };
  const riskScore =
    patient.riskLevel === "High"
      ? 0.82
      : patient.riskLevel === "Medium"
        ? 0.55
        : 0.28;

  const contributingFactors = [
    "High blood pressure",
    "High cholesterol",
    "Smoking history",
    "Low physical activity",
    "Family history of heart disease",
  ];

  const riskHistory = [
    { year: "2024", level: "Medium", score: 0.52 },
    { year: "2025", level: "High", score: 0.75 },
    { year: "2026", level: patient.riskLevel, score: riskScore },
  ];

  const handleGenerateReport = () => {
    const id = Math.max(...mockReports.map((r) => r.id)) + 1;

    mockReports.push({
      id: id,
      patientId: patient.id,
      date: new Date().toLocaleString(),
      settings: settings,
    });

    navigate("/records/manage/history/" + patient.id, { state: { patient } });
  };

  const renderRiskChart = () => {
    return (
      <div className="chart-container">
        <svg
          className="risk-chart"
          viewBox="0 0 900 300"
          preserveAspectRatio="xMidYMid meet"
        >
          <line
            x1="80"
            y1="250"
            x2="850"
            y2="250"
            stroke="#ddd"
            strokeWidth="1"
          />
          <line
            x1="80"
            y1="200"
            x2="850"
            y2="200"
            stroke="#ddd"
            strokeWidth="1"
          />
          <line
            x1="80"
            y1="150"
            x2="850"
            y2="150"
            stroke="#ddd"
            strokeWidth="1"
          />
          <line
            x1="80"
            y1="100"
            x2="850"
            y2="100"
            stroke="#ddd"
            strokeWidth="1"
          />
          <line
            x1="80"
            y1="50"
            x2="850"
            y2="50"
            stroke="#ddd"
            strokeWidth="1"
          />

          <text x="60" y="255" fontSize="12" fill="#666">
            0
          </text>
          <text x="50" y="205" fontSize="12" fill="#666">
            25
          </text>
          <text x="50" y="155" fontSize="12" fill="#666">
            50
          </text>
          <text x="50" y="105" fontSize="12" fill="#666">
            75
          </text>
          <text x="45" y="55" fontSize="12" fill="#666">
            100
          </text>

          <polyline
            points={currentPatient.detailedRiskHistory
              .slice()
              .reverse()
              .map((item, index) => {
                const x = 80 + index * 65;
                const y = 250 - item.riskScore * 2;
                return `${x},${y}`;
              })
              .join(" ")}
            fill="none"
            stroke="#8B5A6F"
            strokeWidth="3"
          />

          {currentPatient.detailedRiskHistory
            .slice()
            .reverse()
            .map((item, index) => {
              const x = 80 + index * 65;
              const y = 250 - item.riskScore * 2;
              return (
                <g key={index}>
                  <circle cx={x} cy={y} r="5" fill="#8B5A6F" />
                  <text
                    x={x}
                    y={y - 12}
                    fontSize="11"
                    fill="#8B5A6F"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    {item.riskScore}
                  </text>
                  <text
                    x={x}
                    y="275"
                    fontSize="9"
                    fill="#666"
                    textAnchor="middle"
                  >
                    {item.date.split(" ")[0]}
                  </text>
                </g>
              );
            })}
        </svg>
      </div>
    );
  };

  return (
    <div className="clinical-patient-risk">
      <div className="page-header">
        <h2>Clinical Report</h2>
      </div>

      <div className="patient-summary">
        <div className="summary-card">
          <h3>Patient Information</h3>
          <div className="info-row">
            <span className="label">Name:</span>
            <span className="value">{patient.name}</span>
          </div>
          <div className="info-row">
            <span className="label">Age:</span>
            <span className="value">{patient.age}</span>
          </div>
          <div className="info-row">
            <span className="label">Last Assessment:</span>
            <span className="value">{patient.lastAssessment}</span>
          </div>
        </div>

        {settings.sections?.currentRiskAssessment.included && (
          <div className="summary-card">
            <h3>Current Risk Assessment</h3>{" "}
            <div className="risk-display">
              <div className="risk-score">{riskScore}</div>
              <div
                className={`risk-level-badge risk-${patient.riskLevel.toLowerCase()}`}
              >
                {patient.riskLevel} Risk
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="factors-table-card">
        <h2>Patient Attributes</h2>

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
                    {attr.status === "warning"
                      ? "Warning"
                      : attr.status === "caution"
                        ? "Caution"
                        : "Normal"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Contributing Risk Factors</h2>
        <ul className="factors-list">
          {contributingFactors.map((factor, index) => (
            <li key={index}>{factor} </li>
          ))}
        </ul>
      </div>

      <div className="content-section">
        <h2>Risk History</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Risk Level</th>
              <th>Risk Score</th>
            </tr>
          </thead>
          <tbody>
            {riskHistory.map((record, index) => {
              settings.sections?.riskHistory.included &&
                settings.sections.riskHistory.year == record.year && (
                  <tr key={index}>
                    <td>{record.year}</td>
                    <td>
                      <span
                        className={`risk-badge risk-${record.level.toLowerCase()}`}
                      >
                        {record.level}
                      </span>
                    </td>
                    <td>{record.score}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>

      {settings.sections?.riskHistory.included && (
        <div className="content-section">
          <h3>Heart Health Risk History (Last 12 Months) </h3>
          {renderRiskChart()}
        </div>
      )}

      <div className="action-buttons">
        <button
          className="btn-secondary"
          onClick={() => navigate("/clinical/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default FinalReport;
