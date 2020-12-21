import React from "react"
import { render } from "../../../../test-utils"
import IconButtonExample from "../IconButtonExample"

describe("IconButton", () => {
  it("renders correctly", () => {
    const component = render(<IconButtonExample />)
    expect(component).toMatchSnapshot()
  })
})
