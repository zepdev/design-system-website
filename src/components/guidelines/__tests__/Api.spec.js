import React from "react"
import { render, screen } from "../../../../test-utils"
import "@testing-library/jest-dom/extend-expect"
import Api from "../Api"

describe("Api", () => {
  it("renders correctly", () => {
    render(<Api />)
    expect(screen.getAllByRole("treeitem")).toHaveLength(7)
  })
})
