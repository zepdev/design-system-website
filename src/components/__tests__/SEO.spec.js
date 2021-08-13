import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../../../src/theme"
import SEO from "../SEO"
import { StaticQuery } from "gatsby"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  )
})

describe("SEO", () => {
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          author: "Your name",
        },
      },
    }
    const component = renderer
      .create(
        <ThemeProvider theme={theme}>
          <SEO data={data} />
        </ThemeProvider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
