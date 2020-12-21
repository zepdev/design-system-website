import React from "react"
import { render } from "../../../../test-utils"
import ElementUsage from "../ElementUsage"
import { StaticQuery } from "gatsby"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      allMdx: {
        edges: {
          node: {
            frontmatter: {
              title: "Mock Title",
              label: "Mock Label",
            },
            code: {
              body: "Mock Code",
            },
          },
          find: jest.fn(),
        },
      },
    })
  )
})

describe("ElementUsage", () => {
  it("renders correctly", () => {
    const mockProps = {
      element: "button",
    }
    const component = render(<ElementUsage {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
