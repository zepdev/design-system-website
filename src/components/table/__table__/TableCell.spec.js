import React from "react"
import { render } from "../../../../test-utils"
import TableCell from "../TableCell"

describe("TableCell", () => {
  it("renders correctly", () => {
    const mockProps = {
      children: "mockString",
    }
    const component = render(
      <table>
        <tbody>
          <tr>
            <TableCell {...mockProps} />
          </tr>
        </tbody>
      </table>
    )
    expect(component).toMatchSnapshot()
  })
})
