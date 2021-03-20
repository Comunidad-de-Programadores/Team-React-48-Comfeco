export const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "400",
    textTransform: "capitalize",
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "12px",
      padding: "16px",
    },
    md: {
      fontSize: { base: "16px", md: "18px" },
      py: { base: "1rem", md: "1.2rem" },
      px: { base: "1.1rem", md: "1.5rem" },
    },
  },
  // Two variants: outline and solid
  variants: {
    normal: {
      bg: "#A976AD",
      color: "#ffff",
      size: "xs",
      p: "1rem",
    },
    gradiant: {
      bg: "btn.300",
      color: "#ffff",
      fontWeight: "400",
      borderRadius: "2em",
      h: "100%",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};
