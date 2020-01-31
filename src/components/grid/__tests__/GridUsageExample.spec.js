import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'
import GridUsageExample from '../GridUsageExample'

describe('GridUsageExample', () => {
  it('renders correctly', () => {
    const mockProps = {
      rows: [
        {
          cols: [
            {
              xxs: 3,
              xs: 3,
              m: 2,
              l: 3,
              text: 'xxs=1 xs=3 m=2 l=3',
            },
            {
              xxs: 3,
              xs: 3,
              m: 2,
              l: 3,
              text: 'xxs=1 xs=3 m=2 l=3',
            },
            {
              xxs: 4,
              m: 4,
              l: 6,
              text: 'xxs=4 m=4 l=6',
            },
          ],
        },
      ],
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <GridUsageExample {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
