import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import Layout from '../Layout'
import { StaticQuery } from 'gatsby'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      mdx: {
        frontmatter: {
          title: `Mock Title`,
        },
      },
    })
  )
})

describe('Layout', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: '<div>mock-div</div>',
    }

    const component = render(
      <ThemeProvider theme={theme}>
        <Layout {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
