# MUONIUM AI - Official Website

This project is a high-performance production website for Muonium AI, merging cinematic aesthetics with robust technology architecture.

## Divisions
- **Muonium AI Studios**: Cinematic AI & storytelling.
- **Muonium AI Gaming**: AI-generated game environments & assets.
- **Muonium AI Tech**: AI-powered software & infrastructure.

## Key Features
- **Hero Section**: High-impact video background with premium typography.
- **One-Page Scroll**: Smooth transitions between divisions with dynamic background tone shifts.
- **Modular Components**: Built with React (Vite) and TypeScript.
- **Premium Animations**: Powered by Framer Motion.
- **Responsive Navigation**: Sticky navbar with glassmorphism and blur effects.
- **Ethics Focused**: "Intelligence with Responsibility" section highlighting AI safety and ethics.

## Tech Stack
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Instrument Serif & Inter

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Structural Decisions
- **Consistency**: Used a single `DivisionSection` component with a `backgroundMode` prop to ensure structural consistency while allowing for distinct visual identities.
- **GPU Acceleration**: Animations use CSS transforms via Framer Motion for maximum performance and 60fps smoothness.
- **Typography Hierarchy**: Leveraged "Instrument Serif" for headlines to convey a premium, editorial feel.
- **Performance**: Utilized semantic HTML5 and optimized loading patterns for heavy visuals.
