import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ZepiconsChevronDown from '@zlab-de/zel-react-icons/ZepiconsChevronDown'
import CorporateLogos from '../../assets/images/Logo/Corporate.png'
import CorporateInvertedLogos from '../../assets/images/Logo/CorporateInverted.png'

const styles = theme => ({
  root: {},
})

function Logos({ classes }) {
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ZepiconsChevronDown />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <p className={classes.heading}>Zeppelin Corporate</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <img src={CorporateLogos} alt="corporate logos" />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ZepiconsChevronDown />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <p className={classes.heading}>Zeppelin Corporate Inverted</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <img src={CorporateInvertedLogos} alt="corporate inverted logos" />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

Logos.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Logos)
