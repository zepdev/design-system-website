/* eslint react/jsx-key: 0 */

import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from '../data/theme'

const codeTheme = {
  plain: {
    backgroundColor: theme.colors.gray.grayMidDark.hex,
    color: theme.colors.gray.grayLighter.hex,
    padding: theme.spacing.xl.px,
    fontSize: '0.75rem',
    marginTop: 0,
    marginBottom: theme.spacing.xl.px * 2,
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
          {tokens.map((line, i) =>
            line[0].empty === true ? null : (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                style={{ marginBottom: theme.spacing.s.px }}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          )}
        </pre>
      )}
    </Highlight>
  )
}
