import React from "react"
import { render } from "../../../../test-utils"
import Api from "../Api"

describe("Api", () => {
  it("renders correctly", () => {
    const component = render(<Api />)
    expect(component).toMatchSnapshot()
  })
})
