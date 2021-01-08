import React from "react"
import { render } from "../../../../test-utils"
import ChevronRightIcon from "../ChevronRightIcon"

describe("ChevronRightIcon", () => {
  it("renders correctly", () => {
    const component = render(<ChevronRightIcon />)
    expect(component).toMatchSnapshot()
  })
})
