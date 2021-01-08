import React from "react"
import { render } from "../../../../test-utils"
import ChevronLeftIcon from "../ChevronLeftIcon"

describe("ChevronLeftIcon", () => {
  it("renders correctly", () => {
    const component = render(<ChevronLeftIcon />)
    expect(component).toMatchSnapshot()
  })
})
