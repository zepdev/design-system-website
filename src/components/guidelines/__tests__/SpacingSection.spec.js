import React from "react"
import { render } from "../../../../test-utils"
import SpacingSection from "../SpacingSection"

describe("SpacingSection", () => {
  it("renders correctly", () => {
    const component = render(<SpacingSection />)
    expect(component).toMatchSnapshot()
  })
})
