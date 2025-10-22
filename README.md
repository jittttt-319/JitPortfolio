# Jit's Portfolio

A stunning portfolio website built with React, featuring a liquid glass effect with purple and black theme.

## Features

- 🎨 Modern liquid glass (glassmorphism) design
- 💜 Beautiful purple and black color scheme
- 📱 Fully responsive design
- ⚡ Fast and smooth animations
- 🎯 Single-page application with smooth scrolling
- 📧 Email contact functionality

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/JitPortfolio.git
cd JitPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your images:
   - Place your profile picture as `src/assets/profile.jpg`
   - Place your about section image as `src/assets/about.jpg`

4. Update your email:
   - Open `src/components/Hero.jsx` and `src/components/Contact.jsx`
   - Replace `your.email@example.com` with your actual email

5. Update social links:
   - Open `src/components/Contact.jsx`
   - Update the GitHub and LinkedIn URLs with your profiles

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization

### Adding Projects

Edit `src/components/Projects.jsx` and add your projects to the `projects` array:

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    tags: ['React', 'JavaScript', 'CSS']
  },
  // Add more projects here
];
```

### Changing Colors

Edit `src/index.css` and modify the CSS variables in the `:root` selector:

```css
:root {
  --purple-primary: #a855f7;
  --purple-secondary: #7c3aed;
  --purple-dark: #6b21a8;
  --black-bg: #0a0a0a;
  --black-secondary: #1a1a1a;
}
```

## Tech Stack

- React 18
- Vite
- React Icons
- CSS3 with Glassmorphism effects

## License

MIT License - feel free to use this template for your own portfolio!
