import React from "react"
import { render } from "../../../test-utils"
import "@testing-library/jest-dom/extend-expect"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../../../src/gatsby-theme-material-ui-top-layout/theme"
import Layout from "../Layout"
import { StaticQuery } from "gatsby"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      mdx: {
        frontmatter: {
          title: `Default Starter`,
        },
      },
    })
  )
})

describe("Layout", () => {
  it("renders correctly", () => {
    const data = {
      mdx: {
        frontmatter: {
          title: "Your name",
        },
      },
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Layout data={data} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
