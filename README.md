# Poras – Professional Personal Portfolio

A modern, responsive, high-performance personal portfolio website built for **Poras**, Computer Science Engineering Student at BK Birla Institute of Engineering and Technology (BKBIET), Pilani, and aspiring Cybersecurity Researcher.

This portfolio is specifically crafted to present Poras's profile to technology recruiters (including opportunities like the Microsoft Security Research Intern program), internship coordinators, and cybersecurity research teams.

---

## 🚀 Live Highlights & Features

- **Cybersecurity & Systems Aesthetic**:
  - Deep Navy background (`#0B1020`), slate card styling (`#111827`), electric blue (`#3B82F6`), and cyber cyan (`#06B6D4`).
  - Interactive **CyberCanvas**: A hardware-accelerated HTML5 canvas simulating network defense nodes, encrypted data packets, and cyber-mesh telemetry that reacts to mouse interaction.
  - Dynamic typewriter effect highlighting academic and technical titles.
- **Strict Anti-Fabrication & Truthful Data**:
  - No synthetic percentages (e.g., no fake "90% Python").
  - Clean, transparent proficiency levels (Intermediate, Beginner, Basic, Active Study).
  - Verifiable project status (Food Ordering Website, Merchandise Website, VoyageHack 4.0 Hackathon).
- **Light / Dark Mode**:
  - Seamless toggle between deep dark mode and crisp technical light mode with `localStorage` persistence.
- **Functional Navigation & Accessibility**:
  - Sticky header with active scroll spy (`IntersectionObserver`).
  - Accessible mobile drawer menu.
  - Back-to-top button.
- **Genuine Contact Workflow**:
  - Validates name, email, subject, and message.
  - Uses direct `mailto:` protocol to launch the sender's configured mail client with pre-filled fields.
  - 1-click "Copy Draft to Clipboard" button for webmail users (Gmail, Outlook Web).
  - Explicit notification that no unverified backend is simulated.
- **Dedicated Resume Integration**:
  - Configured at `/public/Poras_Resume.pdf`.
  - Accessible via Navbar, Hero section, and Footer.
  - Includes a helper modal with instructions on updating the PDF.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Graphics**: Custom HTML5 Canvas Particle Engine (`CyberCanvas.tsx`)

---

## 📂 Project Structure

```
PORAS_PORTFOLIO/
├── app/
│   ├── globals.css          # Theme variables, custom utility classes, cyber grid
│   ├── layout.tsx           # SEO metadata, OpenGraph, viewport, ThemeProvider
│   └── page.tsx             # Main page orchestrating all sections
├── components/
│   ├── Navbar.tsx           # Sticky nav, mobile drawer, resume button, theme switch
│   ├── Hero.tsx             # Main hero, typing effect, CTA buttons, social links
│   ├── CyberCanvas.tsx      # Interactive network defense node canvas
│   ├── About.tsx            # Academic background, core pillars, snapshot cards
│   ├── Skills.tsx           # Categorized cards (Programming, OS, Security, Dev)
│   ├── Projects.tsx         # Food Ordering, Merchandise, VoyageHack 4.0 cards
│   ├── Certifications.tsx   # AI & Python/C Internship certificate details
│   ├── Education.tsx        # B.Tech CSE at BKBIET Pilani, CGPA 8.01, Coursework
│   ├── ResearchInterests.tsx# "Areas I'm Exploring" (Cybersecurity, Networks, etc.)
│   ├── Contact.tsx          # Direct contact cards, validated mailto form
│   ├── Footer.tsx           # Back-to-top, navigation, copyright
│   ├── ResumeModal.tsx      # Modal with instructions & direct link for resume
│   └── ThemeProvider.tsx    # Light/Dark mode context with localStorage persistence
├── data/
│   └── portfolioData.ts     # Centralized, type-safe data configuration
├── public/
│   └── Poras_Jhajhria_Resume.pdf  # Dedicated resume PDF file
├── scripts/
│   └── create-resume-placeholder.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0 or later, v20+ recommended) and **npm** installed:

```bash
node -v
npm -v
```

### Installation

Clone or open the repository directory and install the dependencies:

```bash
npm install
```

*(Note: On Windows PowerShell if script execution policies are restricted, use `npm.cmd install`)*

---

## 🛠️ Development & Build Commands

### Start the Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website with hot reload.

### Run TypeScript Verification

```bash
npx tsc --noEmit
```

### Run ESLint

```bash
npm run lint
```

### Production Build

To test and build the optimized production output:

```bash
npm run build
```

### Start the Production Server

```bash
npm run start
```

---

## 📄 Managing Your Resume & Certificates

### Adding Your Official Resume PDF

1. Export your finalized resume as a PDF document.
2. Name the file:
   ```
   Poras_Jhajhria_Resume.pdf
   ```
3. Place/replace the file in the `public/` directory:
   ```
   PORAS_PORTFOLIO/public/Poras_Jhajhria_Resume.pdf
   ```
4. That's it! All resume buttons (Navbar, Hero, Footer, and Resume Modal) will instantly download and preview your updated PDF.

### Adding Verified Certificate Documents

1. Place your certificate files (PDF or PNG) into the `public/certificates/` directory.
2. Open `data/portfolioData.ts` and update the respective certification item:
   ```typescript
   {
     id: "ai-cert",
     title: "Artificial Intelligence Certification",
     organization: "Your Issuing Organization",
     date: "Month Year",
     verificationAvailable: true,
     certificateUrl: "/certificates/your-ai-cert.pdf",
     ...
   }
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/poras-2/portfolio.git
   git push -u origin main
   ```
2. Visit [Vercel](https://vercel.com/) and sign in with your GitHub account.
3. Click **"New Project"**, select your `portfolio` repository, and click **"Deploy"**.
4. Vercel automatically detects Next.js, compiles the build, and serves it globally with SSL on a custom domain or `.vercel.app` subdomain.

---

## 👤 Personal Information & Verified Links

- **Name**: Poras
- **Title**: Computer Science Engineering Student | Aspiring Cybersecurity Researcher
- **Institution**: BK Birla Institute of Engineering and Technology (BKBIET), Pilani
- **Current Standing**: Second Year • CGPA: 8.01/10
- **Email**: [porasjhajhria2@gmail.com](mailto:porasjhajhria2@gmail.com)
- **Phone**: +91 6367298733
- **GitHub**: [https://github.com/poras-2](https://github.com/poras-2)
- **LinkedIn**: [https://www.linkedin.com/in/poras-900323392/](https://www.linkedin.com/in/poras-900323392/)
- **Location**: Pilani, Rajasthan, India
