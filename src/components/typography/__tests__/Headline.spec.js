import React from 'react'
import { render } from '@testing-library/react'
import Headline from '../Headline'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'

describe('Headline', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: 'mockHeadline',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Headline {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
