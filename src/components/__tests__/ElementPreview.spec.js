import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'
import ElementPreview from '../ElementPreview'

describe('ElementPreview', () => {
  it('renders correctly', () => {
    const mockProps = {
      section: 'basics',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ElementPreview {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
