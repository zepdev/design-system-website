import React from "react"
import { render } from "../../../../test-utils"
import ButtonExample from "../ButtonExample"

describe("ButtonExample", () => {
  it("renders correctly", () => {
    const component = render(<ButtonExample />)
    expect(component).toMatchSnapshot()
  })
})
