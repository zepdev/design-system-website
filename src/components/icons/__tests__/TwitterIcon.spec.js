import React from "react"
import { render } from "../../../../test-utils"
import TwitterIcon from "../TwitterIcon"

describe("TwitterIcon", () => {
  it("renders correctly", () => {
    const component = render(<TwitterIcon />)
    expect(component).toMatchSnapshot()
  })
})
