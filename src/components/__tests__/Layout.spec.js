import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'
import Layout from '../Layout'

describe('Layout', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Layout {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
