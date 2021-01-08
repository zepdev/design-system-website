import React from "react"
import { render } from "../../../../test-utils"
import NextPageIcon from "../NextPageIcon"

describe("NextPageIcon", () => {
  it("renders correctly", () => {
    const component = render(<NextPageIcon />)
    expect(component).toMatchSnapshot()
  })
})
