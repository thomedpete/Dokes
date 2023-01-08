import { createTheme } from "@mui/material";
import Anton from './fonts/Anton/Anton-Regular.ttf'

const theme = createTheme({
  typography: {
    fontFamily: {Anton},
  },

  palette: {

    primary: {
      main: '#FFCB5F',
      light: '#FE7CE5',
      dark: '#9966cc',
      contrastText: '#000000'
    },

    secondary: {
      main: '#336666',
      light: '#996666',
      dark: '	#cc99cc',
      contrastText: '#000000'
    },
  }

})

export default theme