import React from "react"
import { render } from "../../../../test-utils"
import SelectExample from "../SelectExample"

describe("SelectExample", () => {
  it("renders correctly", () => {
    const component = render(<SelectExample />)
    expect(component).toMatchSnapshot()
  })
})
