import React from 'react'
import { render } from '@testing-library/react'
import Structure from '../Structure'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'

describe('Structure', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'mockString',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Structure {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
