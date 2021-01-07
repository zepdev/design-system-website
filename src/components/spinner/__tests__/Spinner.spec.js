import React from "react"
import { render } from "../../../../test-utils"
import Spinner from "../Spinner"

describe("Spinner", () => {
  it("renders correctly", () => {
    const component = render(<Spinner />)
    expect(component).toMatchSnapshot()
  })
})
