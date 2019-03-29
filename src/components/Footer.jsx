import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import withStyles from 'react-jss'
import ButtonBase from './button/ButtonBase'
import ZeppelinIcon from './icons/ZeppelinIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import XingIcon from './icons/XingIcon'
import TwitterIcon from './icons/TwitterIcon'

const styles = theme => ({
  root: {
    borderTop: `1px solid ${ theme.colors.gray.grayMid.hex }`,
    padding: '1.5rem 1.5rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerIcons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    display: 'none',
  },
  link: {
    fontSize: '0.75rem',
    color: theme.colors.gray.grayLight.hex,
    textDecoration: 'none',
    marginBottom: '0.9375rem',
  },
  icon: {
    width: '1.75rem',
    height: '1.75rem',
    color: theme.colors.gray.grayLight.hex,
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    root: {
      padding: '1.25rem 2rem',
    },
    container: {
      height: '1.5rem',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerLinks: {
      flexDirection: 'row',
    },
    containerIcons: {
      justifyContent: 'flex-end',
    },
    link: {
      marginRight: '2rem',
      marginBottom: 0,
    },
    icon: {
      width: '1.25rem',
      height: '1.25rem',
      marginLeft: '1.5rem',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    root: {
      padding: '1.6875rem 3rem',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    root: {
      padding: '1.875rem 3rem',
    },
    logo: {
      display: 'block',
      width: 125,
      height: '1.5rem',
      marginRight: 90,
      color: theme.colors.gray.grayLight.hex,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    root: {
      padding: '2.875rem 3rem',
    },
    logo: {
      marginRight: 95,
    },
    link: {
      fontSize: '0.875rem',
    },
  },
})

const Footer = ({ classes }) => (
  <footer>
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.containerLinks}>
          <ZeppelinIcon className={classes.logo} ariaLabel="footer logo" />
          <Link to="/" className={classes.link}>
            Privacy Policy
          </Link>
          <Link to="/" className={classes.link}>
            Terms & Conditions
          </Link>
          <Link to="/" className={classes.link}>
            Feedback
          </Link>
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
          <ButtonBase href="https://twitter.com/Zeppelin_Group" target="_blank" rel="noopener">
            <TwitterIcon className={classes.icon} />
          </ButtonBase>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
