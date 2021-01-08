import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import ButtonBase from "./button/ButtonBase"
import ZeppelinIcon from "./icons/ZeppelinIcon"
import LinkedinIcon from "./icons/LinkedinIcon"
import XingIcon from "./icons/XingIcon"
import TwitterIcon from "./icons/TwitterIcon"

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.color.global.lightGray}`,
    paddingTop: `${theme.space.xs.rem}rem`,
    paddingBottom: `${theme.space.xs.rem}rem`,
    [theme.breakpoints.up("xs")]: {
      padding: "1.25rem 1.25rem",
    },
    [theme.breakpoints.up("s")]: {
      padding: "1.6875rem 1.6875rem",
    },
    [theme.breakpoints.up("l")]: {
      padding: "1.875rem",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "2.875rem",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      height: "1.5rem",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  containerLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "row",
    },
  },
  containerIcons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "flex-end",
    },
  },
  logo: {
    display: "none",
    [theme.breakpoints.up("l")]: {
      display: "block",
      width: 125,
      height: "1.5rem",
      marginRight: 90,
      color: theme.color.global.lightGray,
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: 95,
    },
  },
  link: {
    textDecoration: "none",
    marginBottom: "0.9375rem",
    [theme.breakpoints.up("xs")]: {
      marginRight: "2rem",
      marginBottom: 0,
      paddingTop: 15,
      paddingBottom: 15,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "0.875rem",
    },
  },
  icon: {
    width: "1.75rem",
    height: "1.75rem",
    color: theme.color.global.lightGray,
    [theme.breakpoints.up("xs")]: {
      width: "1.25rem",
      height: "1.25rem",
      marginLeft: "1.5rem",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer>
      <div className={classes.root}>
        <div>
          <div className={classes.container}>
            <div className={classes.containerLinks}>
              <ZeppelinIcon className={classes.logo} ariaLabel="footerLogo" />
              <Link
                to="/content/privacy/"
                className={clsx("zep-typo--normal-body2", classes.link)}
              >
                Privacy Policy
              </Link>
              <Link
                to="/content/legal/"
                className={clsx("zep-typo--normal-body2", classes.link)}
              >
                Terms & Conditions
              </Link>
              {/* <Link to="/" className={classes.link}>
              Feedback
            </Link> */}
            </div>
            <div className={classes.containerIcons}>
              <ButtonBase
                href="https://www.linkedin.com/company/zeppelingroup/?originalSubdomain=de"
                target="_blank"
                rel="noopener"
              >
                <LinkedinIcon className={classes.icon} />
              </ButtonBase>
              <ButtonBase
                href="https://www.xing.com/company/zeppelinkonzern"
                target="_blank"
                rel="noopener"
              >
                <XingIcon className={classes.icon} />
              </ButtonBase>
              <ButtonBase
                href="https://twitter.com/Zeppelin_Group"
                target="_blank"
                rel="noopener"
              >
                <TwitterIcon className={classes.icon} />
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
