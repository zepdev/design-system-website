import React from "react"
import { render } from "../../../../test-utils"
import LogoSection from "../LogoSection"

describe("LogoSection", () => {
  it("renders correctly", () => {
    const component = render(<LogoSection />)
    expect(component).toMatchSnapshot()
  })
})
