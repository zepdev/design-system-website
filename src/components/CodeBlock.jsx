import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import ButtonBase from './button/ButtonBase'
import CodeStyle from './CodeStyle'
import Tabs from './tabs/Tabs'
import Tab from './tabs/Tab'
import CopyIcon from './icons/CopyIcon'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.xxl.rem }rem`,
    background: theme.colors.gray.grayMidDark.hex,
  },
  tabs: {
    color: theme.colors.gray.white.hex,
    background: theme.colors.gray.grayMidDark.hex,
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${ theme.colors.gray.white.hex }`,
    background: theme.colors.gray.grayMidDark.hex,
  },
  icon: {
    color: theme.colors.gray.white.hex,
  },
  button: {
    padding: `${ theme.spacing.m.rem }rem`,
    float: 'right',
    color: theme.colors.gray.white.hex,
  },
  text: {
    margin: 0,
  },
  label: {
    padding: 0,
  },
  noTabs: {
    color: theme.colors.gray.white.hex,
    paddingLeft: `${ theme.spacing.m.rem }rem`,
  },
})

function CodeBlock({ element, classes }) {
  const [value, setValue] = useState(0)
  const [isTextCopied, setTextCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const noTabs = !element.react && !element.angular && !element.vue

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
        {noTabs && (
          <p className={classnames(classes.noTabs, 'zep-typo--normal-2')}>
            Vanilla JS
          </p>
        )}
        {!noTabs && (
          <Tabs
            value={value}
            onClick={handleClick}
            className={classes.tabs}
            data-testid="codeBlockTab"
          >
            <Tab label="Vanilla JS" color="secondary" />
            {element.react && (
              <Tab
                label="React"
                color="secondary"
                data-testid="codeBlockTab_React"
              />
            )}
            {element.angular && (
              <Tab
                label="Angular"
                color="secondary"
                data-testid="codeBlockTab_Angular"
              />
            )}
            {element.vue && (
              <Tab
                label="Vue"
                color="secondary"
                data-testid="codeBlockTab_Vue"
              />
            )}
          </Tabs>
        )}
        <ButtonBase
          data-testid="codeBlockButton"
          onClick={handleCopy}
          className={classes.button}
        >
          {!isTextCopied && <CopyIcon className={classes.icon} />}
          {isTextCopied && 'Copied!'}
          {copyError && 'Error!'}
        </ButtonBase>
      </div>
      <CodeStyle>{element.js.join('\n')}</CodeStyle>
    </div>
  )
}

CodeBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired,
}

export default withStyles(styles)(CodeBlock)
