import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '../button/ButtonBase'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import guidelines from '@zlab-de/zel-react/guidelines'

const useStyles = makeStyles(theme => ({
  button: {
    width: '100%',
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${ theme.space.s.px }px ${ theme.space.xl.px }px`,
    '&:hover': {
      background: theme.color.global.almostWhite,
    },
  },
  buttonActive: {
    background: theme.color.global.almostWhite,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  subnav: {
    textTransform: 'capitalize',
    padding: `${ theme.space.s.px }px ${ theme.space.xl.px * 1.5 }px`,
    '&:hover': {
      background: theme.color.global.almostWhite,
    },
  },
  icon: {
    color: theme.color.global.lightGray,
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
  homeLink: {
    [theme.breakpoints.up('m')]: {
      display: 'none',
    },
  },
}))

function SidebarNavItem({ item, home, link }) {
  const [isButtonOpen, setButton] = useState(false)

  const classes = useStyles()
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
                activeStyle={{ color: guidelines.color.global.lightGray }}
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
