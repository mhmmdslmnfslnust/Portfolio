# Personal Portfolio Website

A fully responsive personal portfolio website built with React and Tailwind CSS. This project showcases a modern, clean design with smooth animations and a light/dark theme toggle.

## Features

- **Responsive Design**: Looks great on all devices
- **Dark/Light Theme**: Toggle between light and dark themes
- **Smooth Animations**: Using Framer Motion for entrance and hover effects
- **Accessible**: ARIA attributes and keyboard navigation
- **Clean UI**: Minimalist design with a focus on content
- **SEO Friendly**: Proper meta tags and structured data

## Project Structure

```
Portfolio/
├── public/                 # Public assets
│   ├── index.html          # HTML entry point
│   ├── manifest.json       # PWA manifest
│   ├── favicon.ico         # Favicon
│   ├── logo192.png         # App icons
│   ├── logo512.png         # App icons
│   └── profile-image.jpg   # Profile picture
│
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── layout/         # Layout components
│   │   │   ├── Navbar.js   # Navigation bar
│   │   │   ├── Footer.js   # Footer component
│   │   │   └── ThemeToggle.js # Dark/light mode toggle
│   │   │
│   │   ├── sections/       # Page sections
│   │   │   ├── About.js    # About section
│   │   │   ├── Contact.js  # Contact section
│   │   │   ├── Experience.js # Experience timeline
│   │   │   ├── Hero.js     # Hero/landing section
│   │   │   ├── Projects.js # Projects showcase
│   │   │   └── Skills.js   # Skills section
│   │   │
│   │   └── ui/             # Reusable UI components
│   │       ├── ProjectCard.js # Project card component
│   │       ├── SkillItem.js  # Skill item component
│   │       ├── TimelineItem.js # Timeline item component
│   │       └── SocialIcon.js # Social media icon component
│   │
│   ├── context/            # React context
│   │   └── ThemeContext.js # Theme context provider
│   │
│   ├── data/               # Data files
│   │   ├── experience.js   # Experience and education data
│   │   ├── projects.js     # Projects data
│   │   └── skills.js       # Skills data
│   │
│   ├── hooks/              # Custom React hooks
│   │   └── useTheme.js     # Theme hook
│   │
│   ├── utils/              # Utility functions
│   │   ├── accessibility.js # Accessibility helpers
│   │   └── scrollReveal.js  # Scroll animations
│   │
│   ├── App.js              # Main App component
│   ├── config.js           # Site configuration
│   ├── index.js            # JavaScript entry point
│   └── index.css           # Global styles
│
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## Sections

- Hero section with call-to-action
- About Me with skills and personal facts
- Projects showcase with filterable categories
- Skills with progress indicators
- Experience & Education timeline
- Contact form

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `build` folder.

### Deployment

This project is ready to be deployed to services like Netlify or Vercel.

#### Netlify Deployment

```bash
npm install -g netlify-cli
netlify login
npm run deploy
```

## Customization

To customize this portfolio:

1. Update personal information in `src/config.js`
2. Modify project data in `src/data/projects.js`
3. Update skills in `src/data/skills.js`
4. Edit experience and education in `src/data/experience.js`
5. Replace placeholder images with your own in the `public` folder

## Technologies Used

- React.js
- Tailwind CSS
- Framer Motion
- React Router
- React Icons
- React Intersection Observer

## License

This project is licensed under the MIT License - see the LICENSE file for details.
