import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import ElementUsage from '../ElementUsage'
import { StaticQuery } from 'gatsby'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      allMdx: {
        edges: {
          node: {
            frontmatter: {
              title: `Mock Title`,
              label: `Mock Label`,
            },
            code: {
              body: `Mock Code`,
            },
          },
          find: jest.fn(),
        },
      },
    })
  )
})

describe('ElementUsage', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'button',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ElementUsage {...mockProps} />
      </ThemeProvider>
    )

    expect(component).toMatchSnapshot()
  })
})
