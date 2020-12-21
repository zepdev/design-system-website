import React from "react"
import { render } from "../../../../test-utils"
import TabsExample from "../TabsExample"

describe("TabsExample", () => {
  it("renders correctly", () => {
    const component = render(<TabsExample />)
    expect(component).toMatchSnapshot()
  })
})
