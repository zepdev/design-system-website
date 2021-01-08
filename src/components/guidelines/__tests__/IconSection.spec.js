import React from "react"
import { render } from "../../../../test-utils"
import IconsSection from "../IconSection"

describe("IconsSection", () => {
  it("renders correctly", () => {
    const component = render(<IconsSection />)
    expect(component).toMatchSnapshot()
  })
})
