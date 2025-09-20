
# 🧪 LabSync360

**LabSync360** is a modular, web-based laboratory coordination system designed to streamline equipment tracking, experiment logging, and resource scheduling. Built for research institutions, technical labs, and academic environments, it offers a clean interface, scalable architecture, and offline-first reliability.



## 🎯 Project Objectives

- **Centralize lab operations** across equipment, experiments, and bookings.
- **Enable modular expansion** for future features like inventory alerts, experiment history, and conflict resolution.
- **Support offline-first workflows**, with automatic sync when reconnected.
- **Prepare for full-stack integration** using MySQL and Python for secure, scalable backend communication.

---

## 🧩 File Structure & Communication

LabSync360 is organized into modular folders, each handling a distinct lab function. Here's how the system is structured and how files interact:

### 📁 Root Files
| File              | Purpose |
|------------------|---------|
| `index.html`      | Main entry point. Loads the homepage and links to all modules. |
| `style.css`       | Global styling for layout, colors (blue/white theme), and typography. |

### 📁 assets/
| File              | Purpose |
|------------------|---------|
| `lab.png`         | Favicon icon used across all pages. Linked in `index.html` and module headers. |

### 📁 modules/
This folder contains three submodules, each with its own HTML, CSS, and JS files.

#### 📦 book/
| File               | Purpose |
|-------------------|---------|
| `book.html`        | Interface for booking lab resources. |
| `conflict.html`    | Displays scheduling conflicts and resolution options. |
| `history.html`     | Shows past bookings and usage logs. |
| `book.css/js`      | Styles and logic for booking workflows. |

#### 🧪 inventory/
| File               | Purpose |
|-------------------|---------|
| `equipments.html`  | Lists lab equipment and availability. |
| `expiryalerts.html`| Flags reagents nearing expiry. |
| `reagents.html`    | Tracks reagent quantities and usage. |
| `inventory.css/js` | Styles and logic for inventory management. |

#### 🔬 queue/
| File                        | Purpose |
|----------------------------|---------|
| `successfulexperiments.html`   | Logs completed experiments with positive outcomes. |
| `unsucessfulexperiments.html`  | Tracks failed or inconclusive experiments. |
| `pendingexperiments.html`      | Displays experiments awaiting execution. |
| `activexperiments.html`        | Shows currently running experiments. |
| `queue.css/js`                 | Styles and logic for experiment tracking. |

Each module communicates with the main system via shared navigation, consistent styling, and JavaScript-driven DOM updates. As the system expands, modules will also communicate with the backend via Python APIs and MySQL queries.



## 🔧 Planned Backend Expansion

LabSync360 is evolving into a full-stack system with:

- **MySQL database** for storing equipment logs, experiment results, and user actions.
- **Python server** to handle secure communication, data validation, and offline sync logic.
- **Offline-first architecture** using local storage or SQLite, with automatic sync when online.



## 🚀 Deployment

LabSync360 is currently deployed on GitHub Pages:

**🔗 [Live Demo](https://simon-cloud-tech.github.io/labsync360/)**

No backend is required for the current version. All logic runs client-side, making it ideal for demos, offline labs, and early-stage testing.



## 🤝 Collaboration & Contribution

This project welcomes contributors who value modular design, clarity, and real-world impact. Whether you're improving UI, adding backend logic, or optimizing performance, your input is appreciated.

The project folder structure is as below:
labsync360/
│
├── index.html                 # Main entry point for the system
├── style.css                  # Global styles (blue/white theme)
│
├── assets/                    # Static assets
│   └── lab.png                # Favicon icon
│
├── modules/                   # Core functional modules
│
│   ├── book/                  # Booking system
│   │   ├── book.html
│   │   ├── conflict.html
│   │   ├── history.html
│   │   ├── book.css
│   │   ├── conflict.css
│   │   ├── history.css
│   │   ├── book.js
│   │   ├── conflict.js
│   │   └── history.js
│
│   ├── inventory/             # Equipment and reagent tracking
│   │   ├── equipments.html
│   │   ├── expiryalerts.html
│   │   ├── reagents.html
│   │   ├── equipments.css
│   │   ├── expiryalerts.css
│   │   ├── reagents.css
│   │   ├── equipments.js
│   │   ├── expiryalerts.js
│   │   └── reagents.js
│
│   └── queue/                 # Experiment status tracking
│       ├── successfulexperiments.html
│       ├── unsucessfulexperiments.html
│       ├── pendingexperiments.html
│       ├── activexperiments.html
│       ├── successfulexperiments.css
│       ├── unsucessfulexperiments.css
│       ├── pendingexperiments.css
│       ├── activexperiments.css
│       ├── successfulexperiments.js
│       ├── unsucessfulexperiments.js
│       ├── pendingexperiments.js
│       └── activexperiments.js
│
├── backend/                   # (Planned) Server-side logic
│   ├── app.py                 # Python Flask or FastAPI server
│   ├── sync.py                # Offline sync logic
│   └── database/              # MySQL schema and connectors
│       ├── schema.sql
│       └── db_config.py
│
├── docs/                      # Documentation and onboarding
│   ├── README.md
│   ├── architecture.md
│   └── api_plan.md
│
└── manifest.json              # (Optional) PWA support and metadata
