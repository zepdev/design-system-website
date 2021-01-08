import React, { useState } from "react"
import Radio from "@zlab-de/zel-react/Radio"
import RadioGroup from "@zlab-de/zel-react/RadioGroup"

function RadioExample() {
  const [radio, setRadio] = useState("a")
  const [radioInline, setRadioInline] = useState("a")

  return (
    <div>
      <RadioGroup title="Select One">
        <Radio
          value="a"
          id="r1"
          label="a"
          name="radioGroup"
          checked={radio === "a"}
          onChange={e => setRadio(e.target.value)}
        />
        <Radio
          value="b"
          id="r2"
          name="radioGroup"
          label="b"
          checked={radio === "b"}
          onChange={e => setRadio(e.target.value)}
        />
      </RadioGroup>
      <RadioGroup title="Inline Example">
        <Radio
          variant="inline"
          value="a"
          label="inline a"
          id="r1Inline"
          name="radioGroup2"
          checked={radioInline === "a"}
          onChange={e => setRadioInline(e.target.value)}
        />
        <Radio
          variant="inline"
          value="b"
          label="inline b"
          id="r2Inline"
          name="radioGroup2"
          checked={radioInline === "b"}
          onChange={e => setRadioInline(e.target.value)}
        />
      </RadioGroup>
    </div>
  )
}

export default RadioExample
