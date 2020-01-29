import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { logo } from 'zeppelin-element-library/guidelines.json'
import { version as zelVersion } from 'zeppelin-element-library/package.json'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ZepiconsChevronDown from '@zlab-de/zel-react-icons/ZepiconsChevronDown'
import CorporateLogos from '../../assets/images/Logo/Corporate.png'
import RentalLogos from '../../assets/images/Logo/Rental.png'
import CorporateInvertedLogos from '../../assets/images/Logo/CorporateInverted.png'
import ConstructionMachinesLogos from '../../assets/images/Logo/ConstructionMachines.png'
import NuovaCibaLogos from '../../assets/images/Logo/NuovaCiba.png'
import NuovaCibaInvertedLogos from '../../assets/images/Logo/NuovaCibaInverted.png'
import PartnersLogos from '../../assets/images/Logo/Partners.png'
import PowerSystemsLogos from '../../assets/images/Logo/PowerSystems.png'
// import ZDigitLogos from '../../assets/images/Logo/ZDigit.png'
// import ZDigitInvertedLogos from '../../assets/images/Logo/ZDigitInverted.png'
import Headline from '../typography/Headline'
import Swatch from '../swatch/Swatch'
import DownloadFile from '../download/DownloadFile.jsx'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  [`@media (min-width: ${ theme.breakpoint.m })`]: {
    container: {
      justifyContent: 'flex-start',
    },
  },
})

function Logos({ classes }) {
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const data = [
    { title: 'Zeppelin Corporate', src: CorporateLogos },
    { title: 'Zeppelin Corporate Inverted', src: CorporateInvertedLogos },
    { title: 'Zeppelin Construction Machines', src: ConstructionMachinesLogos },
    { title: 'Zeppelin Rental', src: RentalLogos },
    { title: 'Zeppelin Power Systems', src: PowerSystemsLogos },
    { title: 'Zeppelin Partners', src: PartnersLogos },
    { title: 'Nuova Ciba', src: NuovaCibaLogos },
    { title: 'Nuova Ciba Inverted', src: NuovaCibaInvertedLogos },
    // { title: 'Z Digit', src: ZDigitLogos },
    // { title: 'Z Digit Inverted', src: ZDigitInvertedLogos },
  ]
  return (
    <div className={classes.root}>
      <Headline variant="sm">Logo Colors</Headline>
      <div className={classes.container}>
        {Object.keys(logo).map(elem => (
          <Swatch color={logo[elem]} key={`swatch${ elem }`} />
        ))}
      </div>
      <Headline variant="sm">Logo Usage from Size</Headline>
      {data.map((elem, idx) => (
        <ExpansionPanel
          expanded={expanded === `panel${ idx }`}
          onChange={handleChange(`panel${ idx }`)}
        >
          <ExpansionPanelSummary
            expandIcon={<ZepiconsChevronDown />}
            aria-controls={`panel${ idx }bh-content`}
            id={`panel${ idx }bh-header`}
          >
            <p className={classes.heading}>{elem.title}</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.container}>
            <img src={elem.src} alt={`${ elem.title } logo`} />
            <div>
              <DownloadFile
                title={`Download ${ elem.title }`}
                href={`https://cdn-zel.zepdev.net/zel/${ zelVersion }/css/assets/dist/${ elem.title.replace(
                  ' ',
                  ''
                ) }`}
                download={`${ elem.title }.zip`}
                ariaLabel={`Download ${ elem.title }`}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  )
}

Logos.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Logos)