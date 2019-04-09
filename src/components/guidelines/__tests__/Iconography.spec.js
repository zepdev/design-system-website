import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import Iconography from '../Iconography'

describe('Iconography', () => {
  it('renders correctly', () => {
    const mockProps = {
      section: 'action',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Iconography {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
