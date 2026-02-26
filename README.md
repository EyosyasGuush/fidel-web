# Fidel

A Smart Tutor-Finding Platform for Ethiopian Families

---

## 🌍 Overview

Fidel is a web platform that connects parents and students with qualified tutors based on subject, location, teaching mode, and experience. Designed specifically for the Ethiopian education environment, the system provides a structured, searchable tutor marketplace where families can discover, evaluate, and contact tutors directly.

Tutors create professional profiles and may subscribe to monthly plans that boost their visibility. Parents and students search using intelligent filters and reach out to tutors without intermediaries.

---

## 🎯 Problem It Solves

Finding a reliable tutor in Ethiopia is typically:

- Based on word‑of‑mouth
- Time‑consuming and fragmented
- Limited by geography
- Difficult to verify quality

Fidel addresses these challenges by offering:

- Structured, detailed tutor profiles
- Smart filtering and location‑based search
- Ratings and reviews for transparency
- Subscription‑based promotion for tutors

---

## 🚀 Key Features

### 👨‍👩‍👧 For Parents & Students

- Search tutors by:
  - Subject
  - Grade level
  - Location
  - Gender
  - Teaching mode (Online / In‑person / Both)
  - Price range
- View comprehensive tutor profiles
- Contact tutors directly via in‑app messaging
- Leave ratings and reviews after lessons

### 👨‍🏫 For Tutors

- Register and create a professional profile
- Set hourly rate and availability
- Highlight education, experience, and subjects taught
- Receive direct messages from prospective students
- Subscribe to visibility plans (Basic or Premium)

### 💰 Subscription Plans

| Plan    | Cost (per month) | Benefits |
|---------|------------------|----------|
| Basic   | 100 Birr         | Profile included in search results |
| Premium | 300 Birr         | Top position in search, premium badge, increased exposure |

> **Note:** Parents pay tutors directly; Fidel does not handle lesson payments.

### 👨‍💼 Admin Dashboard

- Manage users (parents, tutors, admins)
- Approve subscription payments
- Monitor platform activity and usage metrics
- Moderate reviews and tutor content
- Track active subscriptions and churn

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens), bcrypt for password hashing

### 🧠 System Architecture

Role‑based access controls:

- **Parent** – search and contact tutors, leave reviews
- **Tutor** – manage profile, subscriptions, communicate with clients
- **Admin** – oversee platform, moderate content, manage plans

Protected routes ensure each role has access only to relevant features.

---

## 📱 Responsive Design

Fidel follows a mobile‑first design and is fully responsive for:

- Phones
- Tablets
- Desktops

Accessibility and performance are prioritized.

---

## 🔒 Security Measures

- Role‑based access control (RBAC)
- Password hashing with bcrypt
- JWT‑based authentication and token refresh
- Input validation and sanitization
- Protected API routes and rate limiting

---

## 📊 Business Model

Revenue is generated solely through tutor subscription plans:

- **Basic:** 100 Birr/month
- **Premium:** 300 Birr/month

Fidel acts as a visibility and connection platform; no transactions are processed through the site.

---

## 🌱 Future Improvements

- Real‑time chat between parents and tutors
- Integrated payment gateway for subscriptions and lessons
- Tutor verification badges (ID, credentials)
- Advanced analytics dashboard for admins and tutors
- AI‑powered tutor recommendation engine

---

## 🧑‍💻 Why I Built This

I created Fidel to solve a real‑world problem in my community. While education access is expanding in Ethiopia, discovering qualified tutors remains inefficient and opaque. This project blends backend architecture, business logic, and real‑world product thinking into a working solution tailored to local needs.

---

## 📌 Project Status

Active development. Core functionality implemented:

- Authentication and role management
- Tutor profile creation and search
- Advanced filtering
- Subscription handling
- Admin management interface

---

## 📎 Installation

To run the project locally:

```bash
git clone <repo-url>
cd fidel-web
npm install
npm run dev
```

> Replace `<repo-url>` with the actual repository URL.

---

## 📫 Contact

Developed by Eyosyas Guush

LinkedIn: [your‑linked‑in‑url]
Email: [your‑email@example.com]

