import React from "react"
import { render } from "../../../../test-utils"
import CopyIcon from "../CopyIcon"

describe("CopyIcon", () => {
  it("renders correctly", () => {
    const component = render(<CopyIcon />)
    expect(component).toMatchSnapshot()
  })
})
