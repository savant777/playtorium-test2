# Discount Module (React)

This is a **Discount Module** developed as part of a job application for **Playtorium Solutions**. The module allows users to select and apply multiple types of discount campaigns to a shopping cart, with real-time calculation of discounts and totals.

🌐 **Live Demo:** [https://discount-module-ehbi.onrender.com/](https://discount-module-ehbi.onrender.com/)

---

## 📋 Project Information

- **Applicant:** Metawee Charoentungsirikul (เมธาวี เจริญตั้งศิริกุล)
- **Position Applied:** Software Developer

---

## 🚀 Technologies Used

- React.js (Vite)
- Bootstrap 5
- JavaScript (ES6)

---

## 📦 Main Structure
```
/src
  /components
    AppItems.js        → Displays items in the cart
    CampaignModal.js   → Modal for selecting campaigns
    AppCampaigns.js    → Card component for each campaign (supports campaign selection and points input)
    AppSummary.js      → Summary component showing subtotal, discount breakdown, and total
  /data
    items.js           → Mock data for items
    campaigns.js       → Mock data for campaigns
  App.js               → Main Checkout Page
```

---

## 💡 Features

- Display shopping cart with products
- Select discount campaigns via modal:
  - **Coupon** (Fixed amount or Percentage)
  - **On Top** (By category percentage or Point-based)
  - **Seasonal** (Tiered spending)
- Apply one discount per category (Coupon, On Top, Seasonal)
- Real-time price calculation:
  - Subtotal
  - Discount breakdown
  - Total after discount
- Point-based discounts auto-calculate maximum allowed

---

## 📂 Installation & Run Locally

```bash
# Clone repository
git clone https://github.com/savant777/playtorium-test2.git

# Install dependencies
npm install

# Start development server
npm start
```

Visit: `http://localhost:3000`

---

## 📝 Notes

- This project is for **demonstration purposes only**.
- Code is modular and easy to extend.
- Deployed on **Render** for quick access.

---

Thank you for your time and consideration! 😊
