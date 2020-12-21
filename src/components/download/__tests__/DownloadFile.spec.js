import React from "react"
import { render, fireEvent } from "../../../../test-utils"
import DownloadFile from "../DownloadFile"

describe("DownloadFile", () => {
  it("renders correctly", () => {
    const mockProps = {
      title: "mockTitle",
    }
    const component = render(<DownloadFile {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
  it("tests that something is downloaded", () => {
    const mockProps = {
      title: "mockTitle",
    }
    const { getByTestId } = render(<DownloadFile {...mockProps} />)
    const button = getByTestId("downloadButton")
    fireEvent.click(button)
    // TODO: need expect that makes sense here
  })
})
