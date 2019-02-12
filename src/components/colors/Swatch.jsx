import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Button from '../button/Button'
import CopyIcon from '../icons/CopyIcon'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    height: '8rem',
    width: '8rem',
    marginBottom: '0.9375rem',
    position: 'relative',
    cursor: 'pointer',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $backdrop': {
        opacity: 0.4,
      },
      '& $backdropContent': {
        opacity: 1,
      },
    },
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.colors.grey1,
    opacity: 0,
    transition: 0.5,
  },
  backdropContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    color: theme.colors.white,
  },
  icon: {
    position: 'relative,',
    color: theme.colors.white,
    display: 'block',
  },
  text: {
    position: 'relative,',
    paddingLeft: 5,
    display: 'block',
  },
})

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
          className={classes.button}
          style={{ background: color }}
          onClick={() => this.handleCopy(color)}
        >
          <span className={classes.backdrop} />
          <span className={classes.backdropContent}>
            {!isTextCopied && <CopyIcon className={classes.icon} />}
            <span className={classes.text} data-testid="swatch-text">
              {isTextCopied ? 'Copied!' : copyError ? 'Error!' : color}
            </span>
          </span>
        </Button>
        <p>{title}</p>
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
