import { createMuiTheme } from '@material-ui/core/styles'
import guidelines from '@zlab-de/zel-react/guidelines.json'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: guidelines.theme.digit.secondary,
      main: guidelines.theme.digit.primary,
      dark: guidelines.theme.digit.primary,
    },
    error: { main: guidelines.color.support.alert },
  },
  status: {
    gray: '#eceeef',
  },
  logo: guidelines.logo,
  digit: guidelines.theme.digit,
  indigo: guidelines.theme.indigo,
  red: guidelines.theme.red,
  yellow: guidelines.theme.yellow,
  guidelines: guidelines,
  space: guidelines.spacing.component,
  color: guidelines.color,
})

export default theme
