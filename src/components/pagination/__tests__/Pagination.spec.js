import React from "react"
import { render } from "../../../../test-utils"
import Pagination from "../Pagination"

describe("Pagination", () => {
  it("renders correctly", () => {
    const component = render(<Pagination />)
    expect(component).toMatchSnapshot()
  })
})
