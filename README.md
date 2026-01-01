# 🛒 Discount Module Engine (React.js)

## 📄 Project Overview

This repository contains a high-fidelity implementation of a **Shopping Cart Discount Module**, developed as a technical assessment for **Playtorium Solutions**. The core objective of this project is to demonstrate robust logical reasoning, clean component architecture, and the ability to handle complex pricing algorithms in a real-time environment.

- **⏳ Development Period:** 5 days (July 1, 2025 – July 6, 2025)
- **🛠 Tech Stack:** React.js (Hooks), Bootstrap 5, CSS3
- **🚀 Live Demo:** [View Deployed Application](https://savant777.github.io/playtorium-test2/)
- **🙋‍♂️ Candidate:** Metawee Charoentungsirikul

---

## 📸 Application Preview
<details>
  <summary>Click to view screenshots</summary>
  <p align="center">
    <img src="https://iili.io/fhexJtI.png" alt="Application Screenshot">
    <img src="https://iili.io/fheI32s.png" alt="Select Campaign Modal">
    <img src="https://iili.io/fheTXf9.png" alt="After Apply Discount">
  </p>
</details>

---

## 📂 Project Architecture

```bash
playtorium-test2/
├── public/
│   └── index.html            # Main HTML entry point
├── src/
│   ├── components/           # Reusable UI Components
│   │   ├── AppItems.js       # Cart item rendering & logic
│   │   ├── AppSummary.js     # Real-time calculation engine
│   │   ├── AppCampaigns.js   # Interactive campaign selection
│   │   └── CampaignModal.js  # Modal-based campaign exploration
│   ├── data/                 # Mock data (items.js, campaigns.js)
│   ├── App.js                # Application orchestrator & Global State
│   └── index.js              # React DOM entry point
├── package.json              # Scripts & Dependencies
└── README.md                 # Project documentation
```

---

## 🎟️ Discount Logic & Features

The module implements a multi-tier discount system with the following capabilities:

- **Coupon Layer:** Support for **Fixed Amount** or **Percentage-based** reductions.
- **On Top Layer:** **Category-specific percentage** discounts or **Point-based** redemption.
- **Seasonal Layer:** **Tiered spending** milestones (e.g., every X THB spent, get Y discount).
- **Sequential Calculation Engine:** Discounts are applied in a strict, industry-standard sequence: **Coupon → On Top → Seasonal**.
- **Dynamic Constraint Handling:** Automated point-adjustment logic that caps discounts at **20% of the current subtotal**.

---

## 🧠 Business Logic & Assumptions

To ensure system integrity and a seamless User Experience, the following logic was implemented:

1. **Category Mutual Exclusion:** Users may apply only one campaign per category (Coupon, On Top, Seasonal).
2. **Order of Operations:** Discounts are recalculated sequentially to ensure accuracy after each deduction.
3. **Data Integrity:**
   - Point-based inputs are validated and auto-corrected for negative or over-limit values.
   - The final total is mathematically guarded to never fall below zero.
4. **Real-time Feedback:** All calculations update instantly upon state change, providing a responsive subtotal/discount breakdown.

---

## 🚀 Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/savant777/playtorium-test2.git
   cd playtorium-test2
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm start
   ```

*The application will launch at `http://localhost:3000`*

---

## ℹ️ Technical Highlights

This project highlights my proficiency in **React State Management**, specifically managing interdependent data across multiple components. By focusing on **Clean Code** and **Modular Design**, the system is easily scalable to include more complex campaign types in the future.

---

## 📜 License

MIT License
