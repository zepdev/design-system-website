import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import clsx from 'clsx'
import { createUseStyles, useTheme } from 'react-jss'
import ButtonBase from '../button/ButtonBase'
import ChevronDownIcon from '../icons/ChevronDownIcon'

const useStyles = createUseStyles(theme => ({
  button: {
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${ theme.spacing.component.s.px }px ${ theme.spacing.component.xl.px }px`,
    '&:hover': {
      background: theme.color.gray.grayLightest.hex,
    },
  },
  buttonActive: {
    background: theme.color.gray.grayLightest.hex,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  subnav: {
    textTransform: 'capitalize',
    padding: `${ theme.spacing.component.s.px }px ${ theme.spacing.component.xl
      .px * 1.5 }px`,
    '&:hover': {
      background: theme.color.gray.grayLightest.hex,
    },
  },
  icon: {
    color: theme.color.gray.grayLight.hex,
  },
  iconActive: {
    WebkitTransform: 'rotate(180deg)',
    MsTransform: 'rotate(180deg)',
    transform: 'rotate(180deg)',
    transition: 'all 0.75s 0.25s',
  },
  iconReset: {
    WebkitTransform: 'rotate(0deg)',
    MsTransform: 'rotate(0deg)',
    transform: 'rotate(0deg)',
    transition: 'all 0.75s 0.25s',
  },
  homeLink: {},
  [`@media (min-width: ${ theme.breakpoint.m })`]: {
    homeLink: {
      display: 'none',
    },
  },
}))

function SidebarNavItem({ item, home, link, ...props }) {
  const [isButtonOpen, setButton] = useState(false)
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  return (
    <li className={clsx({ [classes.homeLink]: home })}>
      {link && (
        <a
          href={link}
          target="_blank"
          alt={item.title}
          rel="noopener norefferer"
          className={clsx(
            classes.button,
            'zep-typo--normal-body1',
            'zep-button--full'
          )}
        >
          {item.title}
        </a>
      )}
      {!link && item.subnav && (
        <ButtonBase
          fullWidth
          onClick={() => setButton(!isButtonOpen)}
          className={clsx(classes.button, 'zep-typo--normal-body1', {
            [classes.buttonActive]: isButtonOpen,
          })}
        >
          {item.title}
          <ChevronDownIcon
            width="20"
            height="20"
            className={clsx(classes.icon, {
              [classes.iconActive]: isButtonOpen,
              [classes.iconReset]: !isButtonOpen,
            })}
          />
        </ButtonBase>
      )}
      {!link && !item.subnav && (
        <Link
          to={
            home
              ? '/'
              : `/content/${ item.title.toLowerCase().replace(/ /g, '-') }/`
          }
          className={clsx(
            classes.button,
            'zep-typo--normal-body1',
            'zep-button--full'
          )}
        >
          {item.title}
        </Link>
      )}
      {item.subnav && isButtonOpen && (
        <ul data-testid="subnav-list" className={classes.list}>
          {Object.keys(item.subnav).map((elem, idx) => (
            <li key={`sublistitem${ idx }`} className={classes.listItem}>
              <Link
                to={`/content/${ item.title
                  .toLowerCase()
                  .replace(/ /g, '-') }/${ item.subnav[elem].title
                  .toLowerCase()
                  .replace(/ /g, '-') }/`}
                activeStyle={{ color: theme.color.gray.gray.hex }}
                className={clsx(
                  classes.subnav,
                  'zep-typo--normal-body1',
                  'zep-button--full'
                )}
                data-testid="sidebarNavItemLink"
              >
                {item.subnav[elem].title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

SidebarNavItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default SidebarNavItem
