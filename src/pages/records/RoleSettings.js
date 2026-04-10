import { useLocation, useNavigate } from "react-router-dom";
import "../clinical/ClinicalPatientRisk.css";
import { roleAccessList } from "../../data/accessStorage";
import { useState } from "react";

function RoleSettings() {
  const location = useLocation();
  const navigate = useNavigate();

  const [accessList, setAccessList] = useState(roleAccessList);

  const adminAccess = roleAccessList.find((r) => r.role === "admin");
  const doctorAccess = roleAccessList.find((r) => r.role === "doctor");
  const patientAccess = roleAccessList.find((r) => r.role === "patient");

  return (
    <div className="clinical-patient-risk">
      <div className="page-header">
        <h1>Role Access Settings</h1>
      </div>

      {adminAccess && (
        <div className="content-section">
          <h2>Admin</h2>
          <table className="history-table">
            <thead>
              <tr>
                <th>Settings</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>View Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={adminAccess.view}
                    onChange={() => {
                      const updatedList = accessList.map((r) =>
                        r.role === "admin" ? { ...r, view: !r.view } : r,
                      );
                      setAccessList(updatedList);
                      adminAccess.view = !adminAccess.view;
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Create Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={adminAccess.create}
                    onChange={() => {
                      const updatedList = accessList.map((r) =>
                        r.role === "admin" ? { ...r, create: !r.create } : r,
                      );
                      setAccessList(updatedList);
                      adminAccess.create = !adminAccess.create;
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Edit Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={adminAccess.edit}
                    onChange={() => {
                      const updatedList = accessList.map((r) =>
                        r.role === "admin" ? { ...r, edit: !r.edit } : r,
                      );
                      setAccessList(updatedList);
                      adminAccess.edit = !adminAccess.edit;
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Delete Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={adminAccess.delete}
                    onChange={() => {
                      const updatedList = accessList.map((r) =>
                        r.role === "admin" ? { ...r, delete: !r.delete } : r,
                      );
                      setAccessList(updatedList);
                      adminAccess.delete = !adminAccess.delete;
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {doctorAccess && (
        <div className="content-section">
          <h2>Doctor</h2>
          <table className="history-table">
            <thead>
              <tr>
                <th>Settings</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>View Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={doctorAccess.view}
                    onChange={() => {
                      const updatedList = roleAccessList.map((r) =>
                        r.role === "doctor" ? { ...r, view: !r.view } : r,
                      );
                      setAccessList(updatedList);
                      doctorAccess.view = !doctorAccess.view;
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Create Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={doctorAccess.create}
                    onChange={() => {
                      const updatedList = roleAccessList.map((r) =>
                        r.role === "doctor" ? { ...r, create: !r.create } : r,
                      );
                      setAccessList(updatedList);
                      doctorAccess.create = !doctorAccess.create;
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Edit Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={doctorAccess.edit}
                    onChange={() => {
                      const updatedList = roleAccessList.map((r) =>
                        r.role === "doctor" ? { ...r, edit: !r.edit } : r,
                      );
                      setAccessList(updatedList);
                      doctorAccess.edit = !doctorAccess.edit;
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Delete Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={doctorAccess.delete}
                    onChange={() => {
                      const updatedList = roleAccessList.map((r) =>
                        r.role === "doctor" ? { ...r, delete: !r.delete } : r,
                      );
                      setAccessList(updatedList);
                      doctorAccess.delete = !doctorAccess.delete;
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {patientAccess && (
        <div className="content-section">
          <h2>Patient</h2>
          <table className="history-table">
            <thead>
              <tr>
                <th>Settings</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>View Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={patientAccess.view}
                    onChange={() => {
                      const updatedList = accessList.map((r) =>
                        r.role === "patient" ? { ...r, view: !r.view } : r,
                      );
                      setAccessList(updatedList);
                      patientAccess.view = !patientAccess.view;
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Create Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={patientAccess.create}
                    onChange={() => {
                      const updatedList = roleAccessList.map((r) =>
                        r.role === "patient" ? { ...r, create: !r.create } : r,
                      );
                      setAccessList(updatedList);
                      patientAccess.create = !patientAccess.create;
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Edit Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={patientAccess.edit}
                    onChange={() => {
                      const updatedList = accessList.map((r) =>
                        r.role === "patient" ? { ...r, edit: !r.edit } : r,
                      );
                      setAccessList(updatedList);
                      patientAccess.edit = !patientAccess.edit;
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Delete Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={patientAccess.delete}
                    onChange={() => {
                      const updatedList = accessList.map((r) =>
                        r.role === "patient" ? { ...r, delete: !r.delete } : r,
                      );
                      setAccessList(updatedList);
                      patientAccess.delete = !patientAccess.delete;
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

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

export default RoleSettings;
