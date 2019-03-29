/* eslint react/jsx-key: 0 */

import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import CopyButton from '../button/CopyButton'
import theme from '../../data/theme'

const codeTheme = {
  plain: {
    backgroundColor: theme.colors.gray.grayMidDark.hex,
    marginBottom: `${ theme.spacing.xxl.rem }rem`,
    color: theme.colors.gray.grayLighter.hex,
    paddingLeft: `${ theme.spacing.l.rem }rem`,
    paddingBottom: `${ theme.spacing.l.rem }rem`,
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
        color: theme.colors.gray.grayLighter.hex,
      },
    },
    {
      types: ['deleted'],
      style: {
        color: theme.colors.gray.grayLighter.hex,
      },
    },
    {
      types: ['inserted'],
      style: {
        color: theme.colors.gray.grayLighter.hex,
      },
    },
    {
      types: ['comment'],
      style: {
        color: theme.colors.gray.grayLighter.hex,
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: theme.colors.gray.grayLighter.hex,
      },
    },
    {
      types: ['constant'],
      style: {
        color: theme.colors.gray.grayLighter.hex,
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: theme.colors.support.alert.hex,
      },
    },
    {
      types: ['variable'],
      style: {
        color: theme.colors.gray.grayLighter.hex,
      },
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: theme.colors.gray.grayLighter.hex,
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: theme.colors.support.warning.hex,
      },
    },
    {
      types: ['keyword', 'operator', 'property', 'namespace', 'tag', 'selector', 'doctype'],
      style: {
        color: theme.colors.support.info.hex,
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function', 'class-name'],
      style: {
        color: theme.colors.support.alert.hex,
      },
    },
  ],
}

export default ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : 'js'

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={codeTheme}>
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
                    paddingBottom: tokens.length - 1 === i ? null : theme.spacing.s.px,
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
