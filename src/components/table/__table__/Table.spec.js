import React from "react"
import { render } from "../../../../test-utils"
import Table from "../Table"

describe("Table", () => {
  it("renders correctly", () => {
    const mockProps = {
      children: <tbody />,
      title: "mockTitle",
    }
    const component = render(<Table {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
