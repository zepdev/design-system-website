import React, { useState } from "react"
import Tag from "@zlab-de/zel-react/Tag"

function TagExample() {
  const [text, setText] = useState("I'm a Tag!")

  return (
    <div>
      <Tag onClick={() => setText("You Clicked the Tag!")}>{text}</Tag>
    </div>
  )
}

export default TagExample
