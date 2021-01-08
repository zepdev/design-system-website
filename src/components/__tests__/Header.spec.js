import React from "react"
import { render } from "../../../test-utils"
import Header from "../Header"

describe("Header", () => {
  it("renders correctly", () => {
    const component = render(<Header />)
    expect(component).toMatchSnapshot()
  })
})
