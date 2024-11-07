/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}","!./node_modules/**/*"],
  theme: {
    colors: {
      transparent: 'transparent',
      background: '#FAFCF9',
      green: '#E9EEE6',
      button: '#92AA83',
      buttonHover: "#7A8E6D",
      customGray: '#50524F'
    },
    extend: {
      fontFamily: {
        heading: ['Inspiration', 'sans-serif'],
        h2: ['"Cormorant Garamond"', 'sans-serif'],
        p: ['"Nunito Sans"', 'sans-serif'],
        "button": ['"Cormorant Garamond"']
      },
      fontSize: {
        xs: "0.7rem",
        sm: "1.0rem", 
        lg: "1.5rem", 
        xl: "2.0rem",
        tiny: "0.625rem", // Custom size for very small text (10px)
        huge: "3.5rem", // Custom size for large headings (56px)
        massive: "5rem", // Extra-large font size for hero sections (80px)
      },
    },
  },
  plugins: [],
}

