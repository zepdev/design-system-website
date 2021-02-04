import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { logo } from "@zlab-de/zel-react/guidelines.json"
import { version as zelVersion } from "zeppelin-element-library/package.json"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ZepIconArrowChevronDown from "@zlab-de/zel-react-icons/ZepIconArrowChevronDown"
// import CorporateLogos from "../../assets/images/Logo/Corporate.png"
// import RentalLogos from "../../assets/images/Logo/Rental.png"
// import CorporateInvertedLogos from "../../assets/images/Logo/CorporateInverted.png"
// import ConstructionMachinesLogos from "../../assets/images/Logo/ConstructionMachines.png"
// import NuovaCibaLogos from "../../assets/images/Logo/NuovaCiba.png"
// import NuovaCibaInvertedLogos from "../../assets/images/Logo/NuovaCibaInverted.png"
// import PartnersLogos from "../../assets/images/Logo/Partners.png"
// import PowerSystemsLogos from "../../assets/images/Logo/PowerSystems.png"
// import ZDigitLogos from "../../assets/images/Logo/ZDigit.png"
// import ZDigitInvertedLogos from "../../assets/images/Logo/ZDigitInverted.png"
import Headline from "../typography/Headline"
import Swatch from "../swatch/Swatch"
import DownloadFile from "../download/DownloadFile.jsx"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: `${theme.space.xxl.rem}rem`,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.up("m")]: {
      justifyContent: "flex-start",
    },
  },
}))

function LogoSection() {
  const [expanded, setExpanded] = useState(false)
  const classes = useStyles()

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const data = [
    // { title: "Zeppelin Corporate", src: CorporateLogos },
    // { title: "Zeppelin Corporate Inverted", src: CorporateInvertedLogos },
    // { title: "Zeppelin Construction Machines", src: ConstructionMachinesLogos },
    // { title: "Zeppelin Rental", src: RentalLogos },
    // { title: "Zeppelin Power Systems", src: PowerSystemsLogos },
    // { title: "Zeppelin Partners", src: PartnersLogos },
    // { title: "Nuova Ciba", src: NuovaCibaLogos },
    // { title: "Nuova Ciba Inverted", src: NuovaCibaInvertedLogos },
    // { title: "Z Digit", src: ZDigitLogos },
    // { title: "Z Digit Inverted", src: ZDigitInvertedLogos },
  ]
  return (
    <div className={classes.root}>
      <Headline variant="sm">Logo Colors</Headline>
      <div className={classes.container}>
        {Object.keys(logo).map(elem => (
          <Swatch color={logo[elem]} key={`swatch${elem}`} />
        ))}
      </div>
      {/* <Headline variant="sm">Logo Usage from Size</Headline> */}
      {data.map((elem, idx) => (
        <Accordion
          expanded={expanded === `panel${idx}`}
          onChange={handleChange(`panel${idx}`)}
          key={`logo${idx}`}
        >
          <AccordionSummary
            expandIcon={<ZepIconArrowChevronDown />}
            aria-controls={`panel${idx}bh-content`}
            id={`panel${idx}bh-header`}
          >
            <p className={classes.heading}>{elem.title}</p>
          </AccordionSummary>
          <AccordionDetails className={classes.container}>
            <p>
              Download at;
              https://cdn-zel.zepdev.net/zel/[VERSION]/assets/logos/
              {elem.title.replace(" ", "")}.zip
            </p>
            <img src={elem.src} alt={`${elem.title} logo`} />
            <div>
              <DownloadFile
                title={`Download ${elem.title}`}
                href={`https://cdn-zel.zepdev.net/zel/${zelVersion}/logos/${elem.title.replace(
                  " ",
                  ""
                )}.zip`}
                download={`${elem.title}.zip`}
                ariaLabel={`Download ${elem.title}`}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export default LogoSection
