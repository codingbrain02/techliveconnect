# Tech Live Connect — Website

Official website for **Tech Live Connect (TLC)**, a tech support company. Built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- [React](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Vite](https://vite.dev/) — Build tool with HMR
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [EmailJS](https://www.emailjs.com/) — Contact form email delivery

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Fixed navigation bar
│   ├── Hero.tsx         # Landing section with SVG illustration
│   ├── About.tsx        # About section with service cards
│   ├── Reviews.tsx      # Customer reviews
│   ├── Contact.tsx      # Contact form with EmailJS integration
│   └── Footer.tsx       # Footer
├── App.tsx              # Root component
└── index.css            # Global styles & custom scrollbar
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## EmailJS Setup

The contact form sends submissions to `official.support@techliveconnect.pro` via EmailJS.

To configure, open `src/components/Contact.tsx` and replace the following constants with your credentials from the [EmailJS dashboard](https://dashboard.emailjs.com/):

```ts
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
```

### Template Variables

| Variable | Description |
|---|---|
| `{{name}}` | Sender's full name |
| `{{email}}` | Sender's email address |
| `{{title}}` | Selected issue type |
| `{{message}}` | Optional message |

## Pages

| Section | Description |
|---|---|
| Home | Hero with animated background and SVG illustration |
| About | Company overview and 4 core services |
| Reviews | 3 customer testimonials |
| Contact | Contact details and validated email form |