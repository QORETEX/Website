# Qoretex Website

Modern, professional website for Qoretex - showcasing integrated technology solutions across architecture, networking, cybersecurity, software development, and electronic repairs.

## Features

### Main Website (Professional & Modern Design)
- **Hero Section**: Engaging introduction with call-to-action buttons
- **Services**: Five comprehensive service domains with detailed offerings
- **Cross-Field Bundles**: Highlighting Qoretex's competitive advantage - integrated solutions
- **About**: Company information and key statistics
- **Contact Form**: Professional contact section with business information
- **Responsive Design**: Fully responsive across all devices

### Portfolio Section (Clean, Personal Aesthetic)
Inspired by Samuel Agbenyo's minimalist design:
- **Featured Projects**: Detailed project showcases
- **Experience Timeline**: Company evolution and milestones
- **Skills & Capabilities**: Technical expertise across all domains
- **Clean Typography**: Easy-to-read content layout

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd qoretex-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
qoretex-website/
├── app/
│   ├── page.tsx              # Main homepage
│   ├── portfolio/
│   │   └── page.tsx          # Portfolio page
│   ├── layout.tsx            # Root layout with Navbar & Footer
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── Services.tsx          # Services section
│   ├── Bundles.tsx           # Cross-field bundles
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer
│   └── portfolio/            # Portfolio components
│       ├── PortfolioHero.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       └── Skills.tsx
└── public/                   # Static assets
```

## Customization

### Updating Content

1. **Services**: Edit `components/Services.tsx` to modify service offerings
2. **Bundles**: Edit `components/Bundles.tsx` to update bundle packages
3. **Portfolio Projects**: Edit `components/portfolio/Projects.tsx` to add/modify projects
4. **Contact Information**: Edit `components/Contact.tsx` and `components/Footer.tsx`

### Styling

- Colors and theme can be adjusted in `app/globals.css`
- Tailwind utilities are used throughout components
- Framer Motion animations can be customized in individual components

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

### Other Platforms

The app can also be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render

Build the production version:
```bash
npm run build
npm run start
```

## Service Domains

1. **Architecture** (6 services)
   - House plans, renovations, 3D walkthroughs, inspections, interior design, solar-smart design

2. **Networking** (6 services)
   - Wi-Fi installation, cabling, CCTV, community internet, managed support, event hotspots

3. **Cybersecurity** (6 services)
   - Security audits, training, backup/recovery, device hardening, compliance, incident response

4. **Electronic Repairs** (6 services)
   - Repair center, refurbished resale, UPS servicing, POS repair, training academy, parts wholesale

5. **Software Development** (4 services)
   - Custom software, school management, websites/e-commerce, training bootcamp

## License

© 2024 Qoretex. All rights reserved.
