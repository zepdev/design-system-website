/* eslint max-len: ["error", { "code": 140 }] */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import IconArrowChevronRight from '@zlab-de/zel-react-icons/IconArrowChevronRight'
import IconArrowChevronDown from '@zlab-de/zel-react-icons/IconArrowChevronDown'
import guidelines from '@zlab-de/zel-react/guidelines.json'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: `${theme.space.xxl.rem}rem`,
  },
}))

function useType(value) {
  if (Array.isArray(value)) {
    return 'array'
  }
  if (value === null) {
    return 'null'
  }

  return typeof value
}

function useLabel(value, type) {
  switch (type) {
    case 'array':
      return `Array(${value.length})`
    case 'null':
      return 'null'
    case 'undefined':
      return 'undefined'
    case 'function':
      return `f ${value.name}()`
    case 'object':
      return 'Object'
    case 'string':
      return `"${value}"`
    case 'symbol':
      return `Symbol(${String(value)})`
    case 'bigint':
    case 'boolean':
    case 'number':
    default:
      return String(value)
  }
}

function useTokenType(type) {
  switch (type) {
    case 'object':
    case 'array':
      return 'comment'
    default:
      return type
  }
}

function ObjectEntryLabel({ objectKey, objectValue }) {
  const type = useType(objectValue)
  const label = useLabel(objectValue, type)
  const tokenType = useTokenType(type)

  return (
    <React.Fragment>
      {objectKey}: <span className={clsx('token', tokenType)}>{label}</span>
    </React.Fragment>
  )
}

function ObjectEntry(props) {
  const { nodeId, objectKey, objectValue } = props

  const keyPrefix = nodeId

  let children = null
  if (
    (objectValue !== null && typeof objectValue === 'object') ||
    typeof objectValue === 'function'
  ) {
    children =
      Object.keys(objectValue).length === 0
        ? undefined
        : Object.keys(objectValue).map(key => {
            return (
              <ObjectEntry
                key={key}
                nodeId={`${keyPrefix}.${key}`}
                objectKey={key}
                objectValue={objectValue[key]}
              />
            )
          })
  }

  return (
    <TreeItem
      nodeId={nodeId}
      label={
        <ObjectEntryLabel objectKey={objectKey} objectValue={objectValue} />
      }
    >
      {children}
    </TreeItem>
  )
}

function Api() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TreeView
        defaultCollapseIcon={<IconArrowChevronDown />}
        defaultExpandIcon={<IconArrowChevronRight />}
      >
        {Object.keys(guidelines).map(section => {
          return (
            <ObjectEntry
              key={section}
              nodeId={`${'ROOT'}.${section}`}
              objectKey={section}
              objectValue={guidelines[section]}
            />
          )
        })}
      </TreeView>
    </div>
  )
}

export default Api
