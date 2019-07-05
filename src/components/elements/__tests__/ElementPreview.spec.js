import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import ElementPreview from '../ElementPreview'
import elements from '../../../data/elements'

jest.mock('../../code/CodeUsage')

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

    expect(component).toMatchSnapshot()
  })
})
