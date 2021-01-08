import React from "react"
import { render } from "../../../../test-utils"
import SelectExampleMui from "../SelectExampleMui"

describe("SelectExampleMui", () => {
  it("renders correctly", () => {
    const component = render(<SelectExampleMui />)
    expect(component).toMatchSnapshot()
  })
})
