import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">Lotus Pulse</div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/patient/dashboard">Patient Portal</Link></li>
        <li><Link to="/patient/view-risk">Risk Assessment</Link></li>
        <li><Link to="/clinical/dashboard">Clinical Dashboard</Link></li>
        <li><Link to="/records/manage">Records & Reporting</Link></li>
        <li><Link to="/population/risk-dashboard">Population Monitoring</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
