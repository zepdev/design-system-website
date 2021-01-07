import React from "react"
import { render } from "../../../../test-utils"
import TagExample from "../TagExample"

describe("TagExample", () => {
  it("renders correctly", () => {
    const component = render(<TagExample />)
    expect(component).toMatchSnapshot()
  })
})
