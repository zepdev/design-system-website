import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import Tabs from '../tabs/Tabs'
import Tab from '../tabs/Tab'
import CodeBlock from './CodeBlock'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.xxl.rem }rem`,
  },
  heading: {
    marginBottom: `${ theme.spacing.l.rem }rem`,
  },
})

const CodeUsage = ({ element, classes }) => {
  const [tab, setTab] = useState(0)

  const handleClick = (e, value) => {
    setTab(value)
  }

  return (
    <div className={classes.root}>
      <h3 className={classnames(classes.heading, 'zep-typo--normal-4')}>Code Usage Examples</h3>
      <Tabs value={tab} onClick={handleClick} fullWidth>
        <Tab label="React" />
        <Tab label="Vue" />
      </Tabs>
      <CodeBlock>{element[tab === 0 ? 'react' : 'vue'].join('\n')}</CodeBlock>
    </div>
  )
}

CodeUsage.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired,
}

export default withStyles(styles)(CodeUsage)
