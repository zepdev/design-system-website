import React from "react"
import { render } from "../../../test-utils"
import Footer from "../Footer"

describe("Footer", () => {
  it("renders correctly", () => {
    const mockProps = {
      section: "basics",
    }
    const component = render(<Footer {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
