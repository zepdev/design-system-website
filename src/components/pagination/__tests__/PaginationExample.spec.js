import React from "react"
import { render } from "../../../../test-utils"
import PaginationExample from "../PaginationExample"

describe("PaginationExample", () => {
  it("renders correctly", () => {
    const component = render(<PaginationExample />)
    expect(component).toMatchSnapshot()
  })
})
