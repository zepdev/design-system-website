import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import clsx from 'clsx'
import withStyles from 'react-jss'
import ButtonBase from '../button/ButtonBase'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'

const styles = theme => ({
  button: {
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.component.s.px}px ${theme.spacing.component.xl.px}px`,
    '&:hover': {
      background: theme.colors.gray.grayLightest.hex,
    },
  },
  buttonActive: {
    background: theme.colors.gray.grayLightest.hex,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  subnav: {
    textTransform: 'capitalize',
    padding: `${theme.spacing.component.s.px}px ${theme.spacing.component.xl
      .px * 1.5}px`,
    '&:hover': {
      background: theme.colors.gray.grayLightest.hex,
    },
  },
  icon: {
    color: theme.colors.gray.grayLight.hex,
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
})

function SidebarNavItem({ item, setMenu, home, link, classes }) {
  const [isButtonOpen, setButton] = useState(false)
  return (
    <li>
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
              : `/content/${item.title.toLowerCase().replace(/ /g, '-')}/`
          }
          onClick={() => setMenu(false)}
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
            <li key={`sublistitem${idx}`} className={classes.listItem}>
              <Link
                to={`/content/${item.title
                  .toLowerCase()
                  .replace(/ /g, '-')}/${item.subnav[elem].title
                  .toLowerCase()
                  .replace(/ /g, '-')}/`}
                onClick={() => setMenu(false)}
                activeStyle={{ color: theme.colors.gray.gray.hex }}
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
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  setMenu: PropTypes.func.isRequired,
}

export default withStyles(styles)(SidebarNavItem)
