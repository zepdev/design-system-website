import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../ui/Button'
import CopyIcon from '../icons/CopyIcon'

class Swatch extends Component {
  state = {
    isTextCopied: false,
    copyError: false,
  }

  handleCopy = color => {
    if (document.queryCommandSupported('copy')) {
      let dummy = document.createElement('textarea')
      document.body.appendChild(dummy)
      dummy.value = color
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
      this.setState({ isTextCopied: true })
      setTimeout(() => {
        this.setState({ isTextCopied: false })
      }, 2000)
      console.log(document.queryCommandSupported('copy'))
    } else {
      this.setState({ copyError: true })
      setTimeout(() => {
        this.setState({ copyError: false })
      }, 2000)
      console.log(document.queryCommandSupported('copy'))
    }
  }

  render() {
    const { title, color } = this.props
    const { isTextCopied, copyError } = this.state
    return (
      <div className="zds-swatch--container">
        <Button
          className="zds-swatch"
          style={{ background: color }}
          onClick={() => this.handleCopy(color)}
        >
          <span className="zds-swatch--backdrop" />
          <span className="zds-swatch--imageButton">
            {!isTextCopied && <CopyIcon className="zds-swatch--icon" />}
            <span className="zds-swatch--imageTitle" data-testid="swatch-text">
              {isTextCopied ? 'Copied!' : copyError ? 'Error!' : color}
            </span>
          </span>
        </Button>
        <p className="zds-swatch--title">{title}</p>
      </div>
    )
  }
}

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Swatch
