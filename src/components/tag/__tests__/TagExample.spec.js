import React from "react"
import { render, fireEvent, screen } from "../../../../test-utils"
import TagExample from "../TagExample"
import "@testing-library/jest-dom/extend-expect"

describe("TagExample", () => {
  it("renders correctly", () => {
    const component = render(<TagExample />)
    expect(component).toMatchSnapshot()
  })
  it("changes text on click", () => {
    render(<TagExample />)
    fireEvent.click(screen.getByRole("button", { name: /I'm a Tag!/i }))
    expect(screen.getAllByRole("button")[0]).toHaveTextContent(
      "You Clicked the Tag!"
    )
  })
})
