import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* CSS Variables for Vintage Newspaper Aesthetic */
  :root {
    --bg-cream: #f5f2ed; /* Aged paper background */
    --bg-light: #faf9f7; /* Lighter cream */
    --text-black: #1a1a1a; /* Newspaper ink black */
    --text-dark: #2c2c2c; /* Softer black */
    --text-gray: #5a5a5a; /* Muted text */
    --accent-red: #8B0000; /* Deep maroon/burgundy */
    --accent-hover: #660000; /* Darker red on hover */
    --border: #d4cfc7; /* Subtle paper-like border */
    --border-dark: #b8b2a8; /* Darker border */
    --code-bg: #2d2d2d; /* Dark background for code blocks */
    --code-text: #f8f8f2; /* Light text for code */
    --shadow-subtle: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-paper: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    
    /* RGB values for transparency */
    --bg-cream-rgb: 245, 242, 237;
  }

  /* Font Imports - Classic Newspaper Typography */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Base Styles */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: 'Crimson Text', Georgia, serif;
    background-color: var(--bg-cream);
    color: var(--text-black);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease;
    
    /* Subtle paper texture */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 100px,
          rgba(0, 0, 0, 0.02) 100px,
          rgba(0, 0, 0, 0.02) 101px
        );
      pointer-events: none;
      z-index: 1;
    }
  }

  /* Typography - Newspaper Style */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, serif;
    color: var(--text-black);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
    transition: color 0.3s ease;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.8;
    font-weight: 400;
    transition: color 0.3s ease;
  }

  /* Links */
  a {
    color: var(--accent-red);
    text-decoration: none;
    transition: all 0.2s ease;
    position: relative;
    
    &:hover {
      color: var(--accent-hover);
      text-decoration: underline;
    }
  }

  /* Code Styling */
  code, pre {
    font-family: 'IBM Plex Mono', 'Courier New', monospace;
    font-size: 0.9rem;
  }

  /* Selection */
  ::selection {
    background-color: var(--accent-red);
    color: var(--bg-cream);
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-light);
    border-left: 1px solid var(--border);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border-dark);
    border-radius: 0;
    
    &:hover {
      background: var(--text-gray);
    }
  }

  /* Utility Classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
  }

  .section {
    padding: 4rem 0;
    position: relative;
  }

  /* Newspaper Divider */
  .divider {
    width: 100%;
    height: 1px;
    background: var(--border-dark);
    margin: 2rem 0;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 5px;
      background: var(--bg-cream);
    }
  }

  /* Drop Cap for Articles */
  .drop-cap {
    float: left;
    font-size: 4rem;
    line-height: 0.8;
    margin: 0.1em 0.1em 0 0;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    color: var(--accent-red);
  }

  /* Button Base Styles */
  button {
    font-family: 'Crimson Text', serif;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  /* Focus Styles */
  *:focus {
    outline: 2px solid var(--accent-red);
    outline-offset: 2px;
  }

  /* Vintage Paper Card Effect */
  .paper-card {
    background: var(--bg-light);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-paper);
    position: relative;
    transition: all 0.3s ease;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: 
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 30px,
          rgba(0, 0, 0, 0.02) 30px,
          rgba(0, 0, 0, 0.02) 31px
        );
      pointer-events: none;
    }
  }

  /* Responsive Typography */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    .container {
      padding: 0 1rem;
    }
    
    .section {
      padding: 3rem 0;
    }
  }

  /* Print-inspired Layout Classes */
  .two-column {
    column-count: 2;
    column-gap: 2rem;
    column-rule: 1px solid var(--border);
    
    @media (max-width: 768px) {
      column-count: 1;
    }
  }

  /* Headline Underline */
  .headline-underline {
    border-bottom: 3px solid var(--text-black);
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
  }

  /* Smooth transitions for all color-dependent elements */
  *, *::before, *::after {
    transition: 
      background-color 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }
`;

export default GlobalStyles; 