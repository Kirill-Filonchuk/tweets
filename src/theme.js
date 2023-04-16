export const theme = {
  colors: {
    pink: "#EBD8FF",
    green: "#5cd3a8",
    grey: "#373737",
    accent: "#373636",
    gradient:
      "linear-gradient(115deg, rgba(71, 28, 169, 1), rgba(87.19, 53.78, 162.56, 1) 69%, rgba(75.42, 41.69, 153, 1))",
    mainBg:
      "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
    shadowBg: "-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
  },
  space: [0, 2, 4, 8, 16, 26, 64, 128, 256],
  fonts: {
    montserrat: "'Montserrat', sans-serif",
  },

  fontSize: [14, 18, 20],

  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
  },

  lineHeight: [1.2, 1.219],

  radii: {
    none: "0",
    light: "10px",
    small: "20px",
    round: "50%",
  },

  transitions: {
    durations: {
      default: "250ms",
    },
    functions: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
};
