import React from "react"
import { render } from "../../../../test-utils"
import List from "../List"

describe("List", () => {
  it("renders correctly", () => {
    const component = render(<List />)
    expect(component).toMatchSnapshot()
  })
})
