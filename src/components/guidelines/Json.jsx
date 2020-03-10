/* eslint max-len: ["error", { "code": 140 }] */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import ZepiconsChevronRight from '@zlab-de/zel-react-icons/ZepiconsChevronRight'
import ZepiconsChevronDown from '@zlab-de/zel-react-icons/ZepiconsChevronDown'
import guidelines from 'zeppelin-element-library/guidelines.json'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: `${ theme.space.xxl.rem }rem`,
  },
}))

function Tree() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TreeView
        defaultCollapseIcon={<ZepiconsChevronDown />}
        defaultExpandIcon={<ZepiconsChevronRight />}
      >
        {Object.keys(guidelines).map((section, sectionIdx) => (
          <TreeItem nodeId={`section${ sectionIdx }`} label={section}>
            {Object.keys(guidelines[section]).map((levelOne, levelOneIdx) => (
              <TreeItem nodeId={`levelOne${ levelOneIdx }`} label={levelOne}>
                {Object.keys(guidelines[section][levelOne]).map(
                  (levelTwo, levelTwoIdx) =>
                    typeof guidelines[section][levelOne][levelTwo][0] !==
                    'string' ? (
                        <TreeItem
                          nodeId={`levelTwoOne${ levelTwoIdx }`}
                          label={levelTwo}
                        >
                          {Object.keys(
                            guidelines[section][levelOne][levelTwo]
                          ).map((levelThree, levelThreeIdx) => (
                            <TreeItem
                              nodeId={`levelThree${ levelThreeIdx }`}
                              label={`${ levelThree }: ${ guidelines[section][levelOne][levelTwo][levelThree] }`}
                            />
                          ))}
                        </TreeItem>
                      ) : (
                        <TreeItem
                          nodeId={`levelTwo${ levelTwoIdx }`}
                          label={`${ levelTwo }: ${ guidelines[section][levelOne][levelTwo] }`}
                        ></TreeItem>
                      )
                )}
              </TreeItem>
            ))}
          </TreeItem>
        ))}
      </TreeView>
    </div>
  )
}

export default Tree
