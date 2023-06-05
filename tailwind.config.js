/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'cs-primary': "#BBCA2B",
        'cs-primary-soft': "#e7e868",
        'cs-background': "#f8fafc",
        'cs-primary-hover':"#38bdf8",
        'primary-click':"#8F9A21",
        'cs-black': "#3b2727",
        'cs-gray': "#999999"
      },
      fontFamily: {
        'headline1': ['primary-Regular'],
        'headline2': ['primary-Bold'],
        'title': ['primary-Bold'],
        'subtitle': ['primary-Regular'],
        'buttonbold': ['primary-Bold'],
        'buttonregular': ['primary-Regular'],
        'body': ['primary-Regular'],
        'caption': ['primary-Regular'],
        'overline': ['primary-Regular'],
      },
    },
  },
  plugins: [],
}

