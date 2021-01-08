import React, { useState } from "react"
import Radio from "@zlab-de/zel-react/Radio"
import RadioGroup from "@zlab-de/zel-react/RadioGroup"

function RadioExample() {
  const [radio, setRadio] = useState("a")
  const [radioInline, setRadioInline] = useState("a")

  return (
    <div>
      <p data-testId="radioText">you have selected {radio}</p>
      <RadioGroup title="Select One">
        <Radio
          value="a"
          id="r1"
          label="a"
          name="radioGroup"
          checked={radio === "a"}
          onChange={e => setRadio(e.target.value)}
          data-testId="radioA"
        />
        <Radio
          value="b"
          id="r2"
          name="radioGroup"
          label="b"
          checked={radio === "b"}
          data-testId="radioB"
          onChange={e => setRadio(e.target.value)}
        />
      </RadioGroup>
      <p data-testId="radioInlineText">you have selected {radioInline}</p>
      <RadioGroup title="Inline Example">
        <Radio
          variant="inline"
          value="a"
          label="inline a"
          id="r1Inline"
          name="radioGroup2"
          data-testId="radioInlineA"
          checked={radioInline === "a"}
          onChange={e => setRadioInline(e.target.value)}
        />
        <Radio
          variant="inline"
          value="b"
          label="inline b"
          id="r2Inline"
          name="radioGroup2"
          data-testId="radioInlineB"
          checked={radioInline === "b"}
          onChange={e => setRadioInline(e.target.value)}
        />
      </RadioGroup>
    </div>
  )
}

export default RadioExample
