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
      fontSize: "16px",
      padding: "24px",
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
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};
