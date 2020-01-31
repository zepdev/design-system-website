import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'
import Spacing from '../Spacing'

describe('Spacing', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Spacing />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
