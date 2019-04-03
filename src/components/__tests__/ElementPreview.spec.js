import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'
import ElementPreview from '../ElementPreview'
// import CodeUsage from '../CodeUsage'
import elements from '../../data/elements'

jest.mock('../code/CodeUsage')

describe('ElementPreview', () => {
  it('renders correctly', () => {
    const mockProps = {
      section: 'basics',
      elements: elements,
      element: 'button',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ElementPreview {...mockProps} />
      </ThemeProvider>
    )

    console.log(component)

    expect(component).toMatchSnapshot()
  })
})
