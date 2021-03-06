import React from "react"
import { fireEvent, render } from "@testing-library/react"
import NumberInput from "../NumberInput"

describe("NumberInput", () => {
  it("renders correctly", () => {
    const mockProps = {
      label: "mockLabel",
    }
    const component = render(<NumberInput {...mockProps} />)
    expect(component).toMatchSnapshot()
  })

  it("increases/decreseas value if plus/minus button clicked", () => {
    const mockProps = {
      label: "mockLabel",
    }
    const { getByTestId, getByDisplayValue } = render(
      <NumberInput {...mockProps} />
    )

    const minusButton = getByTestId("minus")
    const plusButton = getByTestId("plus")
    const input = getByDisplayValue("0")

    fireEvent.click(plusButton)
    expect(input.value).toBe("1")

    fireEvent.click(minusButton)
    expect(input.value).toBe("0")

    fireEvent.change(input, { target: { value: "10" } })
    expect(input.value).toBe("10")

    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    expect(input.value).toBe("12")
  })
})
