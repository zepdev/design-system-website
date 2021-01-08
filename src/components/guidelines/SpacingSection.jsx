import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { spacing } from "@zlab-de/zel-react/guidelines.json"

const useStyles = makeStyles(theme => ({
  root: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    marginBottom: theme.space.xl.px * 2,
    borderCollapse: "collapse",
  },
  th: {
    padding: `${theme.space.m.px}px ${theme.space.l.px}px`,
    textAlign: "left",
    display: "table-cell",
  },
  tr: {
    display: "table-row",
  },
  tbody: {
    display: "table-row-group",
  },
  header: {
    background: theme.color.global.white,
    display: "table-header-group",
  },
  lowercase: {
    textTransform: "lowercase",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  borderBottom: {
    borderBottom: `1px solid ${theme.color.global.lightGray}`,
  },
  square: {
    background: theme.indigo.primary,
  },
}))

function SpacingSection() {
  const classes = useStyles()
  const header = ["name", "px", "rem", "actual size"]

  return (
    <div className={classes.root}>
      <table className={classes.table}>
        <caption className="zep-visually-hidden">Spacing Scale</caption>
        <thead className={classes.header}>
          <tr className={classes.tr}>
            {header.map(elem => (
              <th
                scope="col"
                className={clsx(classes.th, "zep-typo--normal-1", {
                  [classes.lowercase]: elem === "rem" || elem === "px",
                  [classes.capitalize]: elem !== "rem" && elem !== "px",
                })}
                key={`header_${elem}`}
              >
                {elem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {Object.keys(spacing.component).map(elem => (
            <tr key={`row_${elem}`} className={classes.tr}>
              {header.map((item, idx) => (
                <th
                  className={clsx(
                    classes.th,
                    classes.borderBottom,
                    "zep-typo--normal-body2"
                  )}
                  key={`spacing${idx}`}
                  scope={idx === 0 ? "row" : null}
                >
                  {item === "actual size" ? (
                    <div
                      style={{
                        width: spacing.component[elem].px,
                        height: spacing.component[elem].px,
                        color: "green",
                      }}
                      className={classes.square}
                    />
                  ) : item === "name" ? (
                    `zep-spacing--${elem}`
                  ) : item === "px" ? (
                    `${spacing.component[elem][item]}px`
                  ) : (
                    `${spacing.component[elem][item]}rem`
                  )}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SpacingSection
