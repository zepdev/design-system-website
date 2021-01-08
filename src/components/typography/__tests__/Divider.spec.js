import React from "react"
import { render } from "../../../../test-utils"
import Divider from "../Divider"

describe("Divider", () => {
  it("renders correctly", () => {
    const mockProps = {}
    const component = render(<Divider {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
