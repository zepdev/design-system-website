import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './src/theme.js'
import CssBaseline from '@material-ui/core/CssBaseline'

const MUIWrapper = ({ element }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {element}
  </ThemeProvider>
)
export default MUIWrapper
