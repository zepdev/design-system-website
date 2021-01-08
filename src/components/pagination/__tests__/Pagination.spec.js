import React from "react"
import { render } from "../../../../test-utils"
import Pagination from "../Pagination"

describe("Pagination", () => {
  it("renders correctly", () => {
    const mockProps = {
      onPageChange: jest.fn(),
      currentPage: 1,
      pagesToDisplay: 5,
      pages: 5,
    }
    const component = render(<Pagination {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
