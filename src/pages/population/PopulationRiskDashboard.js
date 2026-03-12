import React from 'react';
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PopulationRiskDashboard.css';

const PopulationRiskDashboard = () => {
  // Trend data for 12 months
  const trendData = [
    { month: 'Apr 25', low: 58, medium: 24, high: 18 },
    { month: 'May 25', low: 57, medium: 25, high: 18 },
    { month: 'Jun 25', low: 56, medium: 26, high: 18 },
    { month: 'Jul 25', low: 56, medium: 25, high: 19 },
    { month: 'Aug 25', low: 55, medium: 27, high: 18 },
    { month: 'Sep 25', low: 55, medium: 26, high: 19 },
    { month: 'Oct 25', low: 54, medium: 27, high: 19 },
    { month: 'Nov 25', low: 55, medium: 26, high: 19 },
    { month: 'Dec 25', low: 54, medium: 27, high: 19 },
    { month: 'Jan 26', low: 55, medium: 27, high: 18 },
    { month: 'Feb 26', low: 56, medium: 25, high: 19 },
    { month: 'Mar 26', low: 55, medium: 26.5, high: 18.5 }
  ];

  // Pie chart data
  const pieData = [
    { name: 'Low Risk', value: 55, color: '#10b981' },
    { name: 'Medium Risk', value: 26.5, color: '#f59e0b' },
    { name: 'High Risk', value: 18.5, color: '#ef4444' }
  ];

  const kpiData = [
    {
      title: 'Total Patients Analyzed',
      value: '12,543',
      subtext: 'Active in current period',
      borderColor: 'var(--primary-teal)'
    },
    {
      title: 'High Risk Population',
      value: '18.5%',
      subtext: '↑ +2.1% from last month',
      borderColor: 'var(--alert-red)',
      trend: 'up'
    },
    {
      title: 'Overall Risk Trend',
      value: 'Increasing',
      subtext: 'Based on 6-month moving average',
      borderColor: 'var(--warning-orange)'
    },
    {
      title: 'Last System Update',
      value: '14:30',
      subtext: 'March 11, 2026',
      borderColor: 'var(--text-muted)'
    }
  ];

  const demographicData = [
    {
      ageGroup: '18 - 35',
      totalScreened: '3,420',
      highRiskPercent: '4.2%',
      factor: 'Smoking Status',
      status: 'Stable',
      statusClass: 'green'
    },
    {
      ageGroup: '36 - 50',
      totalScreened: '4,105',
      highRiskPercent: '12.8%',
      factor: 'Blood Pressure',
      status: 'Monitor',
      statusClass: 'yellow'
    },
    {
      ageGroup: '51 - 65',
      totalScreened: '3,250',
      highRiskPercent: '28.5%',
      factor: 'Cholesterol',
      status: 'Critical',
      statusClass: 'red'
    },
    {
      ageGroup: '65+',
      totalScreened: '1,768',
      highRiskPercent: '42.1%',
      factor: 'Age & Blood Pressure',
      status: 'Critical',
      statusClass: 'red'
    }
  ];

  const activityStats = [
    { label: 'Assessments Processed (24h)', value: '+428', color: 'var(--text-main)' },
    { label: 'Automated Alerts Triggered', value: '85', color: 'var(--alert-red)' },
    { label: 'Data Anonymization Status', value: '100% Compliant', color: 'var(--safe-green)' }
  ];

  return (
    <div className="population-risk-dashboard">
      <div className="header">
        <div className="header-title">
          <h1>Population Risk Dashboard</h1>
          <p>Org ID: Oakville General Hospital | Aggregated & Anonymized Data Only</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline">Run Compliance Audit</button>
          <button className="btn btn-primary">Export Trend Report</button>
        </div>
      </div>

      <div className="kpi-grid">
        {kpiData.map((kpi, index) => (
          <div key={index} className="kpi-card" style={{ borderLeftColor: kpi.borderColor }}>
            <div className="kpi-title">{kpi.title}</div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-subtext">
              {kpi.trend === 'up' ? (
                <span className="trend-up">{kpi.subtext}</span>
              ) : (
                kpi.subtext
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>Population Risk Trend Over Time (12 Months)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" style={{ fontSize: '12px' }} />
              <YAxis style={{ fontSize: '12px' }} label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="low" stackId="1" stroke="#10b981" fill="#10b981" name="Low Risk" />
              <Area type="monotone" dataKey="medium" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="Medium Risk" />
              <Area type="monotone" dataKey="high" stackId="1" stroke="#ef4444" fill="#ef4444" name="High Risk" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-card">
          <h3>Risk Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="chart-card">
          <h3>Demographic Risk Breakdown (Anonymized)</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Age Group</th>
                <th>Total Screened</th>
                <th>High Risk %</th>
                <th>Primary Contributing Factor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {demographicData.map((row, index) => (
                <tr key={index}>
                  <td>{row.ageGroup}</td>
                  <td>{row.totalScreened}</td>
                  <td>{row.highRiskPercent}</td>
                  <td>{row.factor}</td>
                  <td>
                    <span className={`badge badge-${row.statusClass}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="chart-card">
          <h3>Screening & System Activity</h3>
          <ul className="activity-list">
            {activityStats.map((stat, index) => (
              <li key={index}>
                <div className="activity-label">{stat.label}</div>
                <div className="activity-value" style={{ color: stat.color }}>
                  {stat.value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopulationRiskDashboard;
