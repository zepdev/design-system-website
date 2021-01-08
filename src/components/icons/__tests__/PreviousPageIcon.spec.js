import React from "react"
import { render } from "../../../../test-utils"
import PreviousPageIcon from "../PreviousPageIcon"

describe("PreviousPageIcon", () => {
  it("renders correctly", () => {
    const component = render(<PreviousPageIcon />)
    expect(component).toMatchSnapshot()
  })
})
