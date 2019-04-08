import React from 'react'
import { render } from 'react-testing-library'
import CodeUsage from '../CodeUsage'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
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

describe('CodeUsage', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'button',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <CodeUsage {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
