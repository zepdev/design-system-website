import React from "react"
import { render } from "../../../../test-utils"
import ChevronDownIcon from "../ChevronDownIcon"

describe("ChevronDownIcon", () => {
  it("renders correctly", () => {
    const component = render(<ChevronDownIcon />)
    expect(component).toMatchSnapshot()
  })
})
