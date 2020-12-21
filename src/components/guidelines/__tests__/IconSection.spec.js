import React from "react"
import { render } from "../../../../test-utils"
import IconsSection from "../IconSection"

describe("IconsSection", () => {
  it("renders correctly", () => {
    const mockProps = {
      section: "action",
    }
    const component = render(<IconsSection {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
