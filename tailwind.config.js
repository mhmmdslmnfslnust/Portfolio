module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5',
          DEFAULT: '#4338CA',
          dark: '#3730A3',
        },
        secondary: {
          light: '#10B981',
          DEFAULT: '#059669',
          dark: '#047857',
        },
        dark: {
          light: '#1F2937',
          DEFAULT: '#111827',
          dark: '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
}
