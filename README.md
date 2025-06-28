📿 Eleganza Jewellery – E-Commerce Website
Welcome to Eleganza, a luxurious and responsive online jewelry store designed to offer a seamless shopping experience. This full-stack e-commerce web app allows users to browse, search, and purchase exquisite jewelry items with style and ease.

🌐 Live Demo
💻 Coming soon: [your-live-site-link]

📸 Preview

🛠️ Tech Stack
Frontend
React.js – SPA architecture

Tailwind CSS – Utility-first responsive styling

Framer Motion – Smooth animations and UI transitions

Zustand – Lightweight state management for shopping cart and wishlist

React Router – For navigating between pages

Backend
Node.js + Express – REST API for product and contact handling

MySQL – Stores product listings, contact messages, and other business data

🚀 Features
🏬 Storefront
Dynamic home page with:

Auto-rotating banner

Promotional cards

Scrolling discount offers

Product listings with categories

Product detail page

Search functionality

🛒 Shopping
Add to cart with quantity control

Wishlist support

LocalStorage cart persistence

📞 Contact Page
Contact form connected to backend

Stores message in MySQL database

🧾 Checkout
Fake payment page for demo

Pre-styled form with validation

👩‍🎤 About Page
Brand story + team showcase

Animated testimonials

Store locations (branches)

🧰 Backend Details
The backend is built using Node.js with MySQL for data persistence. It includes:

/api/products – Fetches product data

/api/contact – Submits contact form to DB

Products are added and managed manually via MySQL database.

✅ You can add new jewelry items directly in the MySQL database under the products table. The frontend will automatically reflect those updates.

🗂️ Project Structure
/client         → React Frontend
  /pages        → Home, Products, About, Contact, Checkout
  /components   → Header, Footer, ProductCard, etc.
  /store        → Zustand global store (cart & wishlist)
  /assets       → Images, logos

/server         → Node.js + Express backend
  /routes       → API endpoints
  /config       → DB connection
🧪 Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/eleganza-jewellery.git
cd eleganza-jewellery
2. Setup Backend
bash
Copy
Edit
cd server
npm install
Configure your config/db.js with your MySQL credentials.

Run MySQL server and ensure tables like products, messages exist.

bash
Copy
Edit
npm start
3. Setup Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
