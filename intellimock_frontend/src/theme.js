//
// IntelliMock Theme/Palette Source
// Defines color tokens and theme utilities per extracted style guide.
//

export const IM_THEME = {
  colors: {
    primaryBlue: "#2355a0",
    primaryPurple: "#734194",
    primaryPink: "#d82481",
    accentYellow: "#fbc525",
    bgWhite: "#ffffff",
    // derived
    gradientBar: "linear-gradient(90deg, #2355a0 0%, #734194 65%, #d82481 100%)",
    gradientReverse: "linear-gradient(90deg, #2355a0 0%, #734194 35%, #d82481 100%)",
    patternLines: "#e6e6e9",
    // font color
    heading: "#2355a0",
    text: "#341930",
    textSecondary: "#816991"
  },
  fonts: {
    main: "'Helvetica Neue', Arial, sans-serif"
  },
  layout: {
    headerHeight: 70,
    headerHeightMobile: 48,
    contentPadding: 32,
    contentPaddingMobile: 16
  }
};

export default IM_THEME;
