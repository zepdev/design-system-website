import React from "react"
import { render } from "../../../../test-utils"
import InputExampleMui from "../InputExampleMui"

describe("InputExampleMui", () => {
  it("renders correctly", () => {
    const component = render(<InputExampleMui />)
    expect(component).toMatchSnapshot()
  })
})
