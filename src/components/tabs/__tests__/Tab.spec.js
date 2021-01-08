import React from "react"
import { render, fireEvent, screen } from "../../../../test-utils"
import "@testing-library/jest-dom/extend-expect"
import TabsExample from "../TabsExample"

describe("TabsExample", () => {
  it("renders correctly", () => {
    const mockProps = {
      ariaLabel: "test",
    }
    const component = render(<TabsExample {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
  it("changes the tab", () => {
    const mockProps = {
      ariaLabel: "test",
    }
    const { getByTestId } = render(<TabsExample {...mockProps} />)
    fireEvent.click(screen.getAllByRole("tab", { name: /Tab 2/i })[0])
    expect(getByTestId("tabText")).toHaveTextContent("This is Tab 2")
  })
})
