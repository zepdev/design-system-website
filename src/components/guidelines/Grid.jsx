import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Tabs from '../tabs/Tabs'
import Tab from '../tabs/Tab'
import ElementUsage from '../elements/ElementUsage'
import ReactPlayer from 'react-player'

const styles = theme => ({
  tabs: {
    marginBottom: `${theme.spacing.component.xxl.rem}rem`,
  },
})

function Grid({ classes }) {
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
          <div>
            <ReactPlayer
              url="https://cdn-zel.zepdev.net/zel/animation_grid.mp4"
              playing
              width="1906"
              height=" 1218"
              loop
            />
          </div>
        </>
      )}
      {value === 1 && <ElementUsage element="grid" />}
    </>
  )
}

Grid.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Grid)
