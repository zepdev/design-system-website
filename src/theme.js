import { createTheme } from "@material-ui/core/styles"
import guidelines from "@zlab-de/zel-react/guidelines.json"
import "zeppelin-element-library/bundle/zel.css"
import "./baseline.css"

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: guidelines.theme.indigo.secondary,
      main: guidelines.theme.indigo.primary,
      dark: guidelines.theme.indigo.primary,
    },
    error: { main: guidelines.color.support.alert },
  },
  status: {
    gray: "#eceeef",
  },
  logo: guidelines.logo,
  blue: guidelines.theme.blue,
  indigo: guidelines.theme.indigo,
  red: guidelines.theme.red,
  yellow: guidelines.theme.yellow,
  guidelines: guidelines,
  space: guidelines.spacing.component,
  color: guidelines.color,
})

export default theme
