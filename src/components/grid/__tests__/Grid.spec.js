import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import Grid from '../Grid'

describe('GridPage', () => {
  it('renders correctly', () => {
    const mockProps = {
      rows: [
        {
          class: 'zep-grid__row',
          cols: [
            {
              class:
                'zep-grid__col zep-grid__col--xxs-1-4 zep-grid__col--xs-1-6 zep-grid__col--m-2-8 zep-grid__col--l-3-12',
              content:
                'Column 1-1<br>with more than one line<br>of text in this column',
              style: { paddingTop: '40px' },
            },
            {
              class:
                'zep-grid__col zep-grid__col--xxs-1-4 zep-grid__col--xs-2-6 zep-grid__col--m-2-8 zep-grid__col--l-3-12 zep-grid__col--align-self-flex-start',
              content: 'Column 1-2 / flex-start',
            },
            {
              class:
                'zep-grid__col zep-grid__col--xxs-1-4 zep-grid__col--xs-1-6 zep-grid__col--m-2-8 zep-grid__col--l-3-12 zep-grid__col--align-self-center',
              content: 'Column 1-3 / center',
            },
            {
              class:
                'zep-grid__col zep-grid__col--xxs-1-4 zep-grid__col--xs-2-6 zep-grid__col--m-2-8 zep-grid__col--l-3-12 zep-grid__col--align-self-flex-end',
              content: 'Column 1-4 / flex-end',
            },
          ],
        },
      ],
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Grid {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
