import React from "react"
import { render } from "../../../../test-utils"
import Color from "../Color"

describe("Color", () => {
  it("renders correctly", () => {
    const mockProps = {
      classes: {},
      section: "primary",
    }
    const component = render(<Color {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
