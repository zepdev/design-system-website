/* eslint react/jsx-key: 0 */

import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import CopyButton from '../button/CopyButton'
import theme from 'zeppelin-element-library/guidelines.json'

const codeTheme = {
  plain: {
    backgroundColor: theme.color.gray.grayMidDark.hex,
    marginBottom: `${theme.spacing.component.xxl.rem}rem`,
    color: theme.color.gray.grayLighter.hex,
    paddingLeft: `${theme.spacing.component.l.rem}rem`,
    paddingBottom: `${theme.spacing.component.l.rem}rem`,
    paddingTop: 8,
    paddingRight: 8,
    fontSize: '0.875rem',
    marginTop: 0,
    display: 'flex',
    justifyContent: 'space-between',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: theme.color.gray.grayLighter.hex,
      },
    },
    {
      types: ['deleted'],
      style: {
        color: theme.color.gray.grayLighter.hex,
      },
    },
    {
      types: ['inserted'],
      style: {
        color: theme.color.gray.grayLighter.hex,
      },
    },
    {
      types: ['comment'],
      style: {
        color: theme.color.gray.grayLighter.hex,
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: theme.color.gray.grayLighter.hex,
      },
    },
    {
      types: ['constant'],
      style: {
        color: theme.color.gray.grayLighter.hex,
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: theme.color.support.alert.hex,
      },
    },
    {
      types: ['variable'],
      style: {
        color: theme.color.gray.grayLighter.hex,
      },
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: theme.color.gray.grayLighter.hex,
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: theme.color.support.warning.hex,
      },
    },
    {
      types: [
        'keyword',
        'operator',
        'property',
        'namespace',
        'tag',
        'selector',
        'doctype',
      ],
      style: {
        color: theme.color.support.info.hex,
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function', 'class-name'],
      style: {
        color: theme.color.support.alert.hex,
      },
    },
  ],
}

export default ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : 'js'

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={codeTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
          }}
        >
          <div style={{ paddingTop: 16 }} data-testid="codeDiv">
            {tokens.map((line, i) =>
              line[0].empty === true ? null : (
                <div
                  data-testid="code"
                  key={i}
                  {...getLineProps({ line, key: i })}
                  style={{
                    paddingBottom:
                      tokens.length - 1 === i
                        ? null
                        : theme.spacing.component.s.px,
                  }}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            )}
          </div>
          <CopyButton element={children} />
        </pre>
      )}
    </Highlight>
  )
}
