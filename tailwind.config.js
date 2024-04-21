/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkDisney: '#050C3D',
        lightDisney: '#142B62'
      },
    },
    fontFamily: {
      notoSansBold: ['"NotoSans-Bold"'],
      notoSansExtraBold: ['"NotoSans-ExtraBold"'],
      notoSansItalic: ['"NotoSans-Italic"'],
      notoSansLight: ['"NotoSans-Light"'],
      notoSansMedium: ['"NotoSans-Medium"'],
      notoSansMediumItalic: ['"NotoSans-MediumItalic"'],
      notoSansRegular: ['"NotoSans-Regular"'],
      notoSansSemiBold: ['"NotoSans-SemiBold"'],
      ambroisFrancoisBold: ['"Ambrois Francois Bold"'],
    },
  },
  plugins: [],
}