module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        swipe: 'swipe 1s cubic-bezier(.46,.03,.52,.96)  infinite',
      },
      backgroundImage: {
        'contact-pattern': "url('/contact-pattern.svg')",
      },
      boxShadow: {
        glow: '0 0 32px 8px rgba(229, 230, 230, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        unset: 'unset',
      },
      keyframes: {
        swipe: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        },
      },
      gridTemplateColumns: {
        mobile: 'repeat(6, 90%)',
        footer: '1fr max-content max-content',
      },
      margin: {
        auto: 'auto',
      },
      outline: {
        zesty: ['2px solid #44DA83', '3px'],
        grey: ['2px solid #E5E6E6', '3px'],
        white: ['2px solid white', '4px'],
      },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      zesty: {
        600: '#2BB162',
        500: '#2CC36B',
        400: '#44DA83',
        300: '#6EE39E',
      },
      grey: {
        900: '#0F1315',
        800: '#1B2023',
        700: '#292E31',
        600: '#374044',
        400: '#CBCED0',
        300: '#D8DADC',
        200: '#E5E6E6',
        100: '#ECEDED',
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
      margin: ['last'],
    },
  },
  plugins: [],
}
