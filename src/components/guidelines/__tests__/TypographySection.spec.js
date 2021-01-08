import React from "react"
import { render } from "../../../../test-utils"
import TypographySection from "../TypographySection"

describe("TypographySection", () => {
  it("renders correctly", () => {
    const component = render(<TypographySection />)
    expect(component).toMatchSnapshot()
  })
})
