import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Button from '../ui/Button'
import CopyIcon from '../icons/CopyIcon'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}

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
    } else {
      this.setState({ copyError: true })
      setTimeout(() => {
        this.setState({ copyError: false })
      }, 2000)
    }
  }

  render() {
    const { title, color, classes } = this.props
    const { isTextCopied, copyError } = this.state
    return (
      <div className={classes.root}>
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
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default withStyles(styles)(Swatch)
