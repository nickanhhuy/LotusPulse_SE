import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../clinical/ClinicalPatientRisk.css";
import {
  getAccessForAdmin,
  getAccessForDoctor,
  getAccessForPatient,
  updateAccess,
} from "../../services/AccessController";

function RoleSettings() {
  const navigate = useNavigate();

  const adminAccess = getAccessForAdmin();
  const doctorAccess = getAccessForDoctor();
  const patientAccess = getAccessForPatient();

  const [adminSettings, setAdminSettings] = useState({ ...adminAccess });
  const [doctorSettings, setDoctorSettings] = useState({ ...doctorAccess });
  const [patientSettings, setPatientSettings] = useState({ ...patientAccess });

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
                    checked={adminSettings.view}
                    onChange={() => {
                      const newSettings = {
                        ...adminSettings,
                        view: !adminSettings.view,
                      };
                      setAdminSettings(newSettings);
                      updateAccess(newSettings);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Create Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={adminSettings.create}
                    onChange={() => {
                      const newSettings = {
                        ...adminSettings,
                        create: !adminSettings.create,
                      };
                      setAdminSettings(newSettings);
                      updateAccess(newSettings);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Edit Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={adminSettings.edit}
                    onChange={() => {
                      const newSettings = {
                        ...adminSettings,
                        edit: !adminSettings.edit,
                      };
                      setAdminSettings(newSettings);
                      updateAccess(newSettings);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Delete Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={adminSettings.delete}
                    onChange={() => {
                      const newSettings = {
                        ...adminSettings,
                        delete: !adminSettings.delete,
                      };
                      setAdminSettings(newSettings);
                      updateAccess(newSettings);
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
                    checked={doctorSettings.view}
                    onChange={() => {
                      const newSettings = {
                        ...doctorSettings,
                        view: !doctorSettings.view,
                      };
                      setDoctorSettings(newSettings);
                      updateAccess(newSettings);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Create Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={doctorSettings.create}
                    onChange={() => {
                      const newSettings = {
                        ...doctorSettings,
                        create: !doctorSettings.create,
                      };
                      setDoctorSettings(newSettings);
                      updateAccess(newSettings);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Edit Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={doctorSettings.edit}
                    onChange={() => {
                      const newSettings = {
                        ...doctorSettings,
                        edit: !doctorSettings.edit,
                      };
                      setDoctorSettings(newSettings);
                      updateAccess(newSettings);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Delete Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={doctorSettings.delete}
                    onChange={() => {
                      const newSettings = {
                        ...doctorSettings,
                        delete: !doctorSettings.delete,
                      };
                      setDoctorSettings(newSettings);
                      updateAccess(newSettings);
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
                    checked={patientSettings.view}
                    onChange={() => {
                      const newSettings = {
                        ...patientSettings,
                        view: !patientSettings.view,
                      };
                      setPatientSettings(newSettings);
                      updateAccess(newSettings);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Create Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={patientSettings.create}
                    onChange={() => {
                      const newSettings = {
                        ...patientSettings,
                        create: !patientSettings.create,
                      };
                      setPatientSettings(newSettings);
                      updateAccess(newSettings);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Edit Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={patientSettings.edit}
                    onChange={() => {
                      const newSettings = {
                        ...patientSettings,
                        edit: !patientSettings.edit,
                      };
                      setPatientSettings(newSettings);
                      updateAccess(newSettings);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Delete Report</td>
                <td>
                  <input
                    type="checkbox"
                    checked={patientSettings.delete}
                    onChange={() => {
                      const newSettings = {
                        ...patientSettings,
                        delete: !patientSettings.delete,
                      };
                      setPatientSettings(newSettings);
                      updateAccess(newSettings);
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
