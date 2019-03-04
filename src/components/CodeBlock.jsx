import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import Code from './Code'
import Tabs from './tabs/Tabs'
import Tab from './tabs/Tab'
import CopyIcon from './icons/CopyIcon'

const styles = theme => ({
  root: {
    marginBottom: 60,
    background: theme.colors.gray.grayMidDark.hex,
  },
  tabs: {
    color: theme.colors.gray.white.hex,
    background: theme.colors.gray.grayMidDark.hex,
  },
  tabsContainer: {
    display: 'flex',
    borderBottom: `1px solid ${ theme.colors.gray.white.hex }`,
    background: theme.colors.gray.grayMidDark.hex,
  },
  icon: {
    color: theme.colors.gray.white.hex,
  },
  button: {
    padding: 15,
    float: 'right',
    color: theme.colors.gray.white.hex,
  },
  text: {
    margin: 0,
  },
})

function CodeBlock({ element, classes }) {
  const [value, setValue] = useState(0)
  const [isTextCopied, setTextCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  function handleCopy() {
    if (document.queryCommandSupported('copy')) {
      let dummy = document.createElement('textarea')
      document.body.appendChild(dummy)
      dummy.value = element.js
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
      setTextCopied(true)
      setTimeout(() => {
        setTextCopied(false)
      }, 2000)
    } else {
      setCopyError(true)
      setTimeout(() => {
        setCopyError(false)
      }, 2000)
    }
  }

  function handleClick(event, newValue) {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <Tabs
          value={value}
          onClick={handleClick}
          className={classes.tabs}
          data-testid="codeBlockTab"
        >
          <Tab label="Vanilla JS" color="secondary" />
          {element.react && (
            <Tab label="React" color="secondary" data-testid="codeBlockTab_React" />
          )}
          {element.angular && (
            <Tab label="Angular" color="secondary" data-testid="codeBlockTab_Angular" />
          )}
          {element.vue && <Tab label="Vue" color="secondary" data-testid="codeBlockTab_Vue" />}
        </Tabs>
        <button
          data-testid="codeBlockButton"
          onClick={handleCopy}
          className={classnames('zep-button', classes.button)}
        >
          {!isTextCopied && <CopyIcon className={classes.icon} />}
          {isTextCopied && 'Copied!'}
          {copyError && 'Error!'}
        </button>
      </div>
      <Code code={element.js} />
    </div>
  )
}

CodeBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired,
}

export default withStyles(styles)(CodeBlock)
