NEXT-GEN DRONES PROJECT REPORT

---

## Project Overview:

Project Name: NEXT-GEN DRONES
Purpose: Online store for drones and accessories with full user account functionality, including login, signup, profile, cart, and orders.
Tech Stack:

* Frontend: Next.js (App Router, React 18+), Tailwind CSS, Framer Motion
* Backend: Next.js API routes
* Database: MongoDB (local for development)
* Authentication: Email/password with local storage for client-side sessions
* Email Service: Gmail via App Password for OTP / password reset

## Folder & File Structure:

app/
├── about/
│   └── page.tsx                  # About page
├── Component/
│   ├── Navbar/page.tsx           # Navbar component
│   └── lastPart/page.tsx         # Footer component
├── api/
│   └── auth/
│       ├── signup/route.ts
│       ├── login/route.ts
│       ├── forgot-password/route.ts
│       ├── reset-password/route.ts
│       └── logout/route.ts
├── HomePage/
│   └── page.tsx                  # Landing page
├── product/
│   └── [id]/page.tsx             # Product detail page
├── contents/
│   └── shop/page.tsx             # Shop all products page
├── profile/
│   ├── Login/page.tsx            # Login page
│   ├── SignUp/page.tsx           # Signup page
│   ├── ForgotPassword/page.tsx   # Forgot password page
│   ├── ResetPassword/page.tsx    # Reset password page
│   └── ProfilePage/page.tsx      # Profile overview page
├── globals.css                   # Tailwind base + custom animations
└── layout.tsx                     # Root layout with Navbar + fonts

## Frontend Features:

1. Navigation: Fixed Navbar, responsive.
2. Shop / Product Page: Product grid with filters (type, price, battery, color) and Framer Motion animations.
3. Product Detail: Image, name, price, quantity selector, add to cart.
4. Cart & Orders: Cart items and orders display, subtotal and total.
5. Authentication: Sign Up, Login, Forgot Password, Reset Password.
6. Profile Page: Avatar upload, cart, orders, total spending, logout.
7. Styling: Tailwind CSS with gradient animations and shake effect for errors. Responsive layouts.

## Backend Features (API Routes):

* Signup: /api/auth/signup
* Login: /api/auth/login
* Logout: /api/auth/logout
* Forgot Password: /api/auth/forgot-password
* Reset Password: /api/auth/reset-password
* Profile Fetch / Update: /api/profile/[id]

## Database (MongoDB):

* Connection: mongodb://localhost:27017/droneStore
* Collections:

  1. users: _id, fullName, email, password, address, avatar, cart, orders, createdAt
  2. orders: items, total, status, createdAt

## Environment Variables (.env):

MONGODB_URI=mongodb://localhost:27017/droneStore
EMAIL_USER=[yourgmail@gmail.com](mailto:yourgmail@gmail.com)
EMAIL_PASS=your-app-password
NEXT_PUBLIC_BASE_URL=[http://localhost:3000](http://localhost:3000)

## Security & Best Practices:

* Consider JWT + HttpOnly cookies for production sessions.
* Hash passwords using bcrypt.
* Secure environment variables.

## Animations & CSS:

* Gradient background animation.
* Shake effect for form errors.
* Tailwind @apply utilities.
* Responsive design using flex and grid.

## Outstanding / To-Do Items:

1. Email OTP & Reset Password: Ensure token expiration.
2. Cart Persistence: Sync guest cart with user account.
3. Production Deployment: Update DB, environment variables.
4. Accessibility: ARIA labels, focus styles, keyboard navigation.
5. Testing: Unit tests for API routes, integration tests for signup/login/checkout flows.

## Summary:

Fully functional Next.js drone e-commerce platform with filters, authentication, cart, profile management, and email-based password reset. Structured for scalability and maintainability with Tailwind CSS and modular components.
