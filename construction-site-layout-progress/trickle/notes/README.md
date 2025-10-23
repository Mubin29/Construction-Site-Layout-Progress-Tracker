# Construction Site Layout Progress Tracker

A React-based progress tracking application for construction waterproofing projects with hierarchical floor/flat/area/line item structure.

## Features

- **Hierarchical View**: Navigate through Floors → Flats → Area Units → Line Items
- **Progress Tracking**: Real-time completion status with percentage indicators
- **Edit Mode**: Update line item completion status with cascade selection
- **Filtering**: Filter by specific line item types across all levels
- **Toast Notifications**: Confirmation feedback on save operations

## Setup Commands

```bash
# This is a browser-based React app with no build step required
# Simply open index.html in a modern web browser
```

## Component Structure

```
app.js (Main Application)
├── FilterDropdown.js (Filter by line item type)
├── Floor.js (Top-level floor component)
│   └── Flat.js (Flat/unit component)
│       └── AreaUnit.js (Area component)
│           └── LineItem.js (Individual task)
├── ActionButtons.js (Edit/Save/Cancel controls)
├── Toast.js (Success notification)
├── ProgressBadge.js (Completion counter)
└── StatusBadge.js (Completed/Pending status)

utils/
└── mockData.js (Sample hierarchy data)
```

## Data Structure

Each level maintains progress that rolls up from child items:
- **Line Items**: Individual tasks (completed/pending)
- **Areas**: Collection of line items
- **Flats**: Collection of areas
- **Floors**: Collection of flats

## Key Features

### View Mode (Default)
- All floors load collapsed
- Progress indicators show completion status
- No editing capabilities

### Edit Mode
- Checkboxes appear for pending items only
- Cascade selection: selecting parent selects all pending children
- Save commits changes and returns to view mode
- Cancel discards all selections

### Filtering
- Dropdown filters entire hierarchy by line item type
- Shows only floors/flats/areas containing selected item
- Clear filter to restore full view

## Technology Stack

- React 18 (Production)
- TailwindCSS
- Lucide Icons
- Pure JavaScript (ES6+)

---

Last Updated: 2025-01-23