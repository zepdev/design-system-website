import React from "react"
import { render } from "../../../../test-utils"
import MenuIcon from "../MenuIcon"

describe("MenuIcon", () => {
  it("renders correctly", () => {
    const component = render(<MenuIcon />)
    expect(component).toMatchSnapshot()
  })
})
