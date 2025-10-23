# 🏗️ Construction Site Layout Progress Tracker

This project is a **React + TypeScript** application developed as part of the **Frontend Developer Assessment**.  
The goal is to build a **Construction Site Layout Progress Tracker** that allows users to view and update waterproofing task progress across multiple floors, flats, and areas in a construction layout.

---

## 🚀 Project Overview

The application displays a hierarchical layout of:
- **Floors**
  - **Flats**
    - **Area Units**
      - **Line Items (tasks)**

Each line item represents a specific waterproofing task (e.g., Primer Application, PU Base Coat, etc.), and its status can be marked as **completed**.

The user can:
- View progress details per Floor, Flat, and Area.
- Toggle between **View Mode** and **Edit Mode**.
- Select multiple line items (or entire floors) to mark them as completed.
- Filter line items by task name.
- Save updates or cancel changes.
- View status badges and progress percentages dynamically.

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | React 18 (TypeScript) |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS + ShadCN UI components |
| **Animations** | Framer Motion |
| **Icons & UI Helpers** | Lucide React |

---

## 🧩 Features

### 🔹 View Mode
- Floors are collapsed by default.
- Displays total and completed line items for each floor.
- Shows **status badges** (Completed / Pending).

### 🔹 Edit Mode
- Checkboxes appear for pending tasks.
- Selecting a parent (Floor / Flat / Area) automatically selects all its pending child tasks.
- Allows multi-level cascading selection.
- Buttons:
  - **Save:** Marks selected items as completed and switches back to view mode.
  - **Cancel:** Discards any selections and returns to view mode.

### 🔹 Filter Dropdown
- Dropdown allows filtering by **line item name** (e.g., “Primer Application”).
- When a filter is applied, only relevant floors/flats/areas are displayed.

### 🔹 Toast Notification
- Displays a temporary confirmation message after saving changes.

### 🔹 Animations
- Smooth accordion expand/collapse using **Framer Motion**.

---

## 📂 Folder Structure
src/
├── components/
│ ├── FloorAccordion.tsx # Renders floor and nested hierarchy
│ ├── ProgressNode.tsx # Individual line item component
│ ├── FilterDropdown.tsx # Dropdown filter component
│ ├── Toast.tsx # Toast notification
│ └── ... # Reusable badges, buttons, etc.
│
├── data/
│ └── mockData.ts # Mock floors, flats, and tasks
│
├── utils/
│ └── helpers.ts # Progress counters, filtering helpers
│
├── App.tsx # Main app logic
├── main.tsx # Entry point
├── index.css # Tailwind base styles
└── types.ts # TypeScript type definitions


## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/construction-site-progress-tracker.git
cd construction-site-progress-tracker



Author
Name: Mubin Rehan
Role: Frontend Developer Candidate
Assignment: React TypeScript Assessment – Construction Layout Progress Tracker
Email: mubinmull32@gmail.com
Date: 23 October 2025

 
