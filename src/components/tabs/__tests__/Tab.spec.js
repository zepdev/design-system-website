import React from "react"
import { render } from "../../../../test-utils"
import TabsExample from "../TabsExample"

describe("TabsExample", () => {
  it("renders correctly", () => {
    const mockProps = {
      ariaLabel: "test",
    }
    const component = render(<TabsExample {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
