import React from "react"
import { render } from "../../../../test-utils"
import Notification from "../Notification"

describe("Notification", () => {
  it("renders correctly", () => {
    const component = render(<Notification />)
    expect(component).toMatchSnapshot()
  })
})
