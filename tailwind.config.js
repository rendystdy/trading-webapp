const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        mainBlue: "#2194D7",
        darkBlue: "#104F83",
        darkBlueSecondary: "#246DA5",
        darkBlueTertiary: "#1D6298",
        veryDarkBlue: "#002E5B",
        gray: "#AAAAAA",
        darkGrey: "#7D7D7D",
        darkGreySecondary: "#9A9A9A",
        veryLightGrayWhite: "#F3F3F3",
        veryLightGray: "#eee",
        veryLightGraySecondary: "#EAEAEA",
        veryLightGrayTertiary: "#DCDCDC",
        veryDarkGrey: "#555555",
        veryDarkGreySecond: "#444444",
        darkGrayishBlue: "#8C9EA8",
        hover: "#246EA6",
        bgHeader: "rgba(211, 228, 244, 0.9)",
        separtaror: "rgba(187, 187, 187, 1)",
        bgFooter: '#F9F9F9',
        bgDarkMode: '#021c39',
        lightGrayishBlue: '#F5F9FC',
        borderInput: '#9B9B9B',
        vividRed: '#DB250C',
        lightGrayishBlueSecondary: '#e4eaf3',
        statusDraft: '#72512C',
        statusPending: '#619ED6',
        statusRejected: '#9A3838',
        statusInactive: '#c9c9c9',
        standardActiveFrom: '#FF4F4F',
        standardActiveTo: '#F19202',
        standardActiveFromSecondary: '#55A9BB',
        standardActiveToSecondary: '#104F83',
        userLiveFrom: '#FF4E4E',
        userLiveTo: '#F28B09',
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "banner-pattern": "url('assets/img/bannerbg.png')",
        "banner-mobile-pattern": "url('assets/img/bannerbg-mobile.png')",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        /* Chrome, Safari and Opera */
        ".scrollbar-hidden::-webkit-scrollbar": {
          display: "none",
        },

        ".scrollbar-hidden": {
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE and Edge */,
        },
      });
    }),
  ],
  darkMode: 'class',
};
