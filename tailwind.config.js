/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "15px"
      },
      screens:{
        sm:'640px',
        md:'768px',
        lg:'960px',
        xl:'1200px',
      },
      fontFamily:{
        primary: "var(--font-jetbrainsMono)",
      },
      colors: {
        primary: '#1c1c22',      // เปลี่ยนเป็นสีที่คุณต้องการ
        accent: { 
          DEFAULT: '#acf5fb',
          hover: '#8de3ea'
        
        }// ถ้ามี accent color
      },
    },
  },
  plugins: [],
}