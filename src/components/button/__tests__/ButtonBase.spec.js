import React from "react"
import { render } from "../../../../test-utils"
import ButtonBase from "../ButtonBase"

describe("ButtonBase", () => {
  it("renders correctly", () => {
    const mockProps = {
      onClick: jest.fn(() => {}),
      children: "buttonText",
      classes: {},
    }
    const component = render(<ButtonBase {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
