import React from 'react'
import { fireEvent, render } from 'react-testing-library'
import NumberInput from '../NumberInput'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'

describe('NumberInput', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <NumberInput />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })

  it('increases/decreseas value if plus/minus button clicked', () => {
    const { getByLabelText, getByDisplayValue } = render(
      <ThemeProvider theme={theme}>
        <NumberInput />
      </ThemeProvider>
    )

    const minusButton = getByLabelText('minus')
    const plusButton = getByLabelText('plus')
    const input = getByDisplayValue('0')

    fireEvent.click(plusButton)
    expect(input.value).toBe('1')

    fireEvent.click(minusButton)
    expect(input.value).toBe('0')

    fireEvent.change(input, { target: { value: '10' } })
    expect(input.value).toBe('10')

    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    expect(input.value).toBe('12')
  })
})
