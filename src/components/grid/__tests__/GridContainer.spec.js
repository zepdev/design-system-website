import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import GridContainer from '../GridContainer'

describe('GridContainer', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <GridContainer />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
