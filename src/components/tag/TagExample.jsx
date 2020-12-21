import React from "react"
import Tag from "@zlab-de/zel-react/Tag"

function TagExample() {
  const handleClick = () => {
    alert("You clicked the tag!")
  }

  return (
    <div>
      <Tag onClick={handleClick}>I'm a Tag!</Tag>
    </div>
  )
}

export default TagExample
