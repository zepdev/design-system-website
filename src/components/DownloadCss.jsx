import React from 'react'
import Button from './button/Button'

const Download = () => {
  return (
    <Button
      className="zel-button"
      download
      href="../assets/styles/zeppelin-element-library.min.css"
    >
      Download
    </Button>
  )
}

export default Download
