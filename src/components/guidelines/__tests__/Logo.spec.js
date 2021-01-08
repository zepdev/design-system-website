import React from "react"
import { render } from "../../../../test-utils"
import Logo from "../Logo"

describe("Logo", () => {
  it("renders correctly", () => {
    const component = render(<Logo />)
    expect(component).toMatchSnapshot()
  })
})
