import React from "react"
import { render } from "../../../../test-utils"
import DocumentLink from "../DocumentLink"

describe("DocumentLink", () => {
  it("renders correctly", () => {
    const mockProps = {
      text: "mockString",
      to: "mockLink",
    }
    const component = render(<DocumentLink {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
