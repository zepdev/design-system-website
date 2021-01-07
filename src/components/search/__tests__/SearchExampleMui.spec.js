import React from "react"
import { render } from "../../../../test-utils"
import SearchExampleMui from "../SearchExampleMui"

describe("SearchExampleMui", () => {
  it("renders correctly", () => {
    const component = render(<SearchExampleMui />)
    expect(component).toMatchSnapshot()
  })
})
