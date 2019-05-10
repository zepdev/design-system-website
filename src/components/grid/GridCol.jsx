import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

function GridCol({ children, className: classNameProp, align, xxs, xs, s, m, l, xl }) {
  const className = clsx(
    'zep-grid__col',
    {
      [`zep-grid__row--align-self-${ align }`]: align !== undefined,
      [`zep-grid__col--xxs-${ String(xxs) }-4`]: xxs !== undefined,
      [`zep-grid__col--xs-${ String(xs) }-6`]: xs !== undefined,
      [`zep-grid__col--s-${ String(s) }-6`]: s !== undefined,
      [`zep-grid__col--m-${ String(m) }-8`]: m !== undefined,
      [`zep-grid__col--l-${ String(l) }-12`]: l !== undefined,
      [`zep-grid__col--xl-${ String(l) }-12`]: xl !== undefined,
    },
    classNameProp
  )

  return <div className={className} dangerouslySetInnerHTML={{ __html: children }} />
}

GridCol.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  align: PropTypes.oneOf(['stretch', 'flex-end', 'center', 'flex-start', 'baseline']),
  xxs: PropTypes.oneOf([1, 2, 3, 4]),
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  s: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  m: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  l: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

GridCol.defaultProps = {
  align: 'stretch',
}

export default GridCol
