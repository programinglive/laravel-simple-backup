# Laravel Simple Backup Website

Official website for the [Laravel Simple Backup](https://github.com/programinglive/laravel-simple-backup) package.

## Overview

This is a Next.js website showcasing the Laravel Simple Backup package with:
- Modern, responsive design
- Light and dark theme support
- Complete documentation
- Feature showcase
- Installation and usage guides

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Theme**: next-themes (light/dark mode)
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
laravel-simple-backup-website/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── docs/
│   │   └── page.tsx        # Documentation page
│   └── features/
│       └── page.tsx        # Features page
├── components/
│   ├── Navigation.tsx      # Navigation bar with theme toggle
│   ├── Footer.tsx          # Footer component
│   └── ThemeProvider.tsx   # Theme provider wrapper
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Mode**: Toggle between light and dark themes
- **Documentation**: Complete guide on installation and usage
- **Feature Showcase**: Detailed list of all package features
- **Modern UI**: Clean and professional design with Tailwind CSS

## Pages

### Home (`/`)
- Hero section with call-to-action
- Features overview
- Quick start guide
- Installation and usage examples

### Documentation (`/docs`)
- Installation instructions
- Configuration guide
- Usage examples (Artisan command, BackupManager class, Facade)
- System requirements
- Backup file format
- Error handling examples

### Features (`/features`)
- Complete list of all features
- Why choose Laravel Simple Backup
- Feature descriptions and benefits

## Customization

### Colors

Edit `tailwind.config.js` to customize the primary color scheme:

```js
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    900: '#082f49',
  },
}
```

### Theme

The website uses `next-themes` for theme management. Toggle theme in the Navigation component.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- GitHub Pages (static export)
- Docker

## License

MIT License - See [LICENSE](../LICENSE) for details

## Support

For issues related to the Laravel Simple Backup package, visit the [GitHub repository](https://github.com/programinglive/laravel-simple-backup).

For website issues, please open an issue in this repository.

## Author

Mahatma Mahardhika <mahatma.mahardhika@programinglive.com>
