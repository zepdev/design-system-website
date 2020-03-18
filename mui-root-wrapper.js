import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './src/theme.js'

const MUIWrapper = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
export default MUIWrapper
