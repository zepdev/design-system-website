import React from 'react'
import { render } from 'react-testing-library'
import Code from '../Code'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'

describe('Code', () => {
  it('renders correctly', () => {
    const mockProps = {
      code: 'mockCode',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Code {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
