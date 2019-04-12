import React from 'react'
import PropTypes from 'prop-types'
import Headline from '../typography/Headline'
import Table from '../../components/table/Table.jsx'
import Structure from '../../components/structure/Structure.jsx'
import elements from '../../data/elements.js'

const ElementStyles = ({ element }) => {
  return (
    <>
      <Headline variant="sm">Typography</Headline>

      <Table
        title="typography"
        content={elements[element].typography}
        header={['name', 'px', 'rem', 'specifications', 'actual size']}
      />

      <Headline variant="sm">Colors</Headline>

      <Table
        title="typography"
        content={elements[element].colors}
        header={['name', 'property', 'zeppelin', 'cat', 'rental']}
      />
      <Headline variant="sm">Structure</Headline>

      <Structure element="button" />

      <Table
        title="structure"
        content={elements[element].structure}
        header={['name', 'property', 'px', 'rem']}
      />
    </>
  )
}

ElementStyles.propTypes = {
  element: PropTypes.string.isRequired,
}

export default ElementStyles
