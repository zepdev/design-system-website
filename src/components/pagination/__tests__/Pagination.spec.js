import React from "react"
import { render, fireEvent } from "../../../../test-utils"
import Pagination from "../Pagination"
import "@testing-library/jest-dom/extend-expect"

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

test("changes to selected Page", async () => {
  const mockProps = {
    pages: 5,
    onPageChange: () => {},
    currentPage: 3,
  }
  const { getByTestId } = render(<Pagination {...mockProps} />)
  expect(
    getByTestId("paginationButton3").classList.contains(
      "zep-pagination--selected"
    )
  ).toBe(true)
})
