import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#007dcc";
const razz = "#FF5733";
const white = "#f1f1f1";
const black = "#02020A";

export default createMuiTheme({
  palette: {
    common: {
      blue,
      white,
      black,
      razz
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: white,
    },
  },
  typography: {
    pageHeader: {
      fontFamily: "Lato",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1rem",
      color: blue,
    },
    menu: {
      fontFamily: "Lato",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: white,
    },
    h2: {
      fontFamily: "Lato",
      fontSize: "2.5rem",
      fontWeight: 300,
      color: white,
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: "1.75rem",
      fontWeight: 300,
    },
    body1: {
      fontFamily: "Lato",
      fontWeight: 500,
    },
  },
});
