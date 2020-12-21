import React from "react"
import { render } from "../../../test-utils"
import Header from "../Header"

describe("Header", () => {
  it("renders correctly", () => {
    const mockProps = {
      section: "basics",
      handleMenu: jest.fn(),
      handleTheme: jest.fn(),
      zelTheme: "zeppelin",
    }
    const component = render(<Header {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
