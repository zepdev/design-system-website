import React from "react"
import { render } from "../../../../test-utils"
import Tag from "../Tag"

describe("Tag", () => {
  it("renders correctly", () => {
    const mockProps = {
      label: "mockTagLabel",
    }
    const component = render(<Tag {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
