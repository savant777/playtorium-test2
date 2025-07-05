# Discount Module - Coding Test (Set 2)

## 📄 Project Overview

This project is a **take-home assignment** for the **Coding Test (Set 2)** provided by **Playtorium**. It is built to demonstrate my **frontend development skills** and **problem-solving abilities**.

* ⏳ **Duration:** 5 days (July 1, 2025 – July 6, 2025)
* 🛠 **Tech Stack:** React.js, Bootstrap, CSS
* 🌐 **Deployed Link:** [https://discount-module-ehbi.onrender.com/](https://discount-module-ehbi.onrender.com/)
* 🙋‍♂️ **Submitted by:** Metawee Charoentungsirikul

---

## 📦 Main Structure

```
/src
  /components
    AppItems.js        → Show items in cart
    CampaignModal.js   → Modal for selecting campaigns
    AppCampaigns.js    → Card for each campaign (supports selecting campaign and points)
    AppSummary.js      → Summary: Subtotal, Discount breakdown, Total
  /data
    items.js           → Items mock data
    campaigns.js       → Campaigns mock data
  App.js               → Checkout page
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

## 🔍 Assumptions

* Users can apply **only one campaign per category**: Coupon, On Top, Seasonal.
* The system applies discounts in the following **order**: Coupon → On Top → Seasonal.
* For **points-based discounts (On Top)**, users can use points to get a discount of up to **20% of the subtotal** (1 point = 1 THB).
* If users **enter invalid points** (negative, non-numeric, or exceeding the allowed maximum), the input will be **automatically adjusted** to the nearest valid value.
* Discounts will **never cause the total to go below zero**.
* Placeholder text is shown in point input to help guide users.

---

## 🚀 How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/savant777/playtorium-test2.git
cd playtorium-test2
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📝 Additional Notes

* This project is solely for assessment purposes and may not include extensive validation or responsive design.
* The main goal is to showcase **logical thinking**, **code organization**, and **React component design**.

Thank you for the opportunity! 😊
