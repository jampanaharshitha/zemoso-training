import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#00ff00",
    },
    error:{
      main: "#000000"
    }
  },
  typography: {
    fontFamily: 
      'Roboto',
  },
});
export default theme;
