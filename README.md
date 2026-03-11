# Lotus Pulse

Heart Disease Risk Prediction System - UI Prototype

## Project Overview

This is a software engineering inception product increment focusing on user interface, navigation, and mock functionality. The application demonstrates the major functional areas of a heart disease risk prediction system without implementing real backend logic, authentication, or machine learning.

## Functional Areas

1. **Patient Portal** - Patient views personal risk summary, details, and history
2. **Clinical Dashboard** - Doctors review patient risks and add clinical notes
3. **Records & Reporting** - Record managers view and manage patient records
4. **Population Monitoring** - Healthcare organizations monitor aggregated trends

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```

### Build for Production
```bash
npm build
```

## Project Structure

```
lotus-pulse/
├── public/
├── src/
│   ├── components/       # Shared components (Navigation, etc.)
│   ├── pages/
│   │   ├── patient/      # Patient Portal pages
│   │   ├── clinical/     # Clinical Dashboard pages
│   │   ├── records/      # Records & Reporting pages
│   │   └── population/   # Population Monitoring pages
│   ├── data/             # Mock data
│   ├── App.js
│   └── index.js
└── package.json
```

## Technology Stack

- React 18
- React Router 6
- CSS3

## Note

This is a UI prototype with hard-coded mock data. No real backend, authentication, database, or ML implementation is included.
