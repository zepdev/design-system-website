import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Tabs from '../tabs/Tabs'
import Tab from '../tabs/Tab'
import classnames from 'classnames'
import ElementUsage from '../elements/ElementUsage'
import ReactPlayer from 'react-player'
import Table from '../table/Table'
import { grid } from 'zeppelin-element-library/bundle/themes/theme.json'

const styles = theme => ({
  tabs: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  player: {
    marginBottom: `${ theme.spacing.component.xl.rem }rem`,
  },
  headline: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
  },
})

function GridPage({ classes }) {
  const [value, setValue] = useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <>
      <Tabs value={value} onClick={handleChange} className={classes.tabs}>
        <Tab label="Overview" />
        <Tab label="Usage" />
      </Tabs>
      {value === 0 && (
        <>
          <h2 className={classnames('zep-typo--normal-8', classes.headline)}>Basic Grid</h2>

          <p className={classnames('zep-typo--normal-3', classes.headline)}>
            Zeppelin uses a hybrid grid layout as demonstrated below
          </p>

          <div className={classes.player}>
            <ReactPlayer
              url="https://cdn-zel.zepdev.net/zel/animation_grid.mp4"
              playing
              width="1906"
              height=" 1218"
              loop
            />
          </div>

          <h3 className={classnames('zep-typo--normal-6', classes.headline)}>Basic Grid Data</h3>
          <Table
            title="basic grid data"
            header={['identifier', 'screensize', 'columns', 'margin', 'gutter']}
            content={{
              xxs: { identifier: 'xxs', ...grid.xxs },
              xs: { identifier: 'xs', ...grid.xs },
              s: { identifier: 's', ...grid.s },
              m: { identifier: 'm', ...grid.m },
              l: { identifier: 'l', ...grid.l },
              xl: { identifier: 'xl', ...grid.xl },
            }}
          />
        </>
      )}
      {value === 1 && <ElementUsage element="grid" />}
    </>
  )
}

GridPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(GridPage)
