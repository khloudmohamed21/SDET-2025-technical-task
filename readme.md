# SDET-2025-technical-task [![CircleCI](https://dl.circleci.com/status-badge/img/gh/khloudmohamed21/SDET-2025-technical-task/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/khloudmohamed21/SDET-2025-technical-task/tree/main)


## 📌 Overview
This repository contains the solution for the **SDET 2025 Technical Task**, covering **UI automation**, **API testing**, bug reporting, and CI/CD setup using CircleCI.

The project includes:
- **UI Tests** using **NightwatchJS** (with Page Object Model)
- **API Tests** using **Supertest** and Jest/Mocha
- **Manual Test Cases** and **Bug Reports** in PDF
- CI/CD pipeline integration with CircleCI

---

## 📂 Project Structure
```bash
.
├── ui-tests/               # NightwatchJS UI automation scripts
│   ├── page-objects/       # Nightwatch Page Objects
│   ├── test-data/          # Test data files (e.g., JSON)
│   ├── reports/            # HTML reports for UI tests
│   └── tests/              # UI test scripts
│
├── api-tests/              # API automation using Supertest
│   ├── reports/            # HTML/XML reports for API tests
│   └── tests/              # API test scripts
│
├── docs/                   # PDF files for test cases and bug reports
│   ├── test-cases.pdf
│   ├── bug-reports.pdf
│
├── .circleci/config.yml    # CircleCI pipeline configuration
└── package.json



