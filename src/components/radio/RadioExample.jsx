import React, { useState } from 'react'
import Radio from '@zlab-de/zel-react/Radio'
import RadioGroup from '@zlab-de/zel-react/RadioGroup'

function RadioExample() {
  const [radio, setRadio] = useState('a')
  function handleChange(event) {
    setRadio(event.target.value)
  }

  return (
    <div>
      <RadioGroup title="Select One">
        <Radio value="a" name="value 1" checked={radio === 'a'} onChange={handleChange} />
        <Radio value="b" name="value 2" checked={radio === 'b'} onChange={handleChange} />
        <Radio value="c" name="value 3" checked={radio === 'c'} onChange={handleChange} />
      </RadioGroup>
    </div>
  )
}

export default RadioExample
