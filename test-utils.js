import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './src/theme'

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
