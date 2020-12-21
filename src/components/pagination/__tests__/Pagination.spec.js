import React from "react"
import { render } from "../../../../test-utils"
import Pagination from "../Pagination"

describe("Pagination", () => {
  it("renders correctly", () => {
    const mockProps = {
      pages: 5,
      onPageChange: () => {},
      currentPage: 1,
    }
    const component = render(<Pagination {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
