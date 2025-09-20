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
