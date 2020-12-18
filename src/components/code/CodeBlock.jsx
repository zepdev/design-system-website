/* eslint react/jsx-key: 0 */

import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import CopyButton from '../button/CopyButton'
import guidelines from '@zlab-de/zel-react/guidelines.json'

const codeTheme = {
  plain: {
    backgroundColor: guidelines.color.global.black,
    marginBottom: `${ guidelines.spacing.component.xxl.rem }rem`,
    color: guidelines.color.global.white,
    paddingLeft: `${ guidelines.spacing.component.l.rem }rem`,
    paddingBottom: `${ guidelines.spacing.component.l.rem }rem`,
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
        color: guidelines.color.global.lightGray,
      },
    },
    {
      types: ['deleted'],
      style: {
        color: guidelines.color.global.lightGray,
      },
    },
    {
      types: ['inserted'],
      style: {
        color: guidelines.color.global.lightGray,
      },
    },
    {
      types: ['comment'],
      style: {
        color: guidelines.color.global.lightGray,
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: guidelines.color.global.lightGray,
      },
    },
    {
      types: ['constant'],
      style: {
        color: guidelines.color.global.lightGray,
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: guidelines.color.support.alert,
      },
    },
    {
      types: ['variable'],
      style: {
        color: guidelines.color.global.lightGray,
      },
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: guidelines.color.global.lightGray,
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: guidelines.color.support.warning,
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
        color: guidelines.color.support.info,
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function', 'class-name'],
      style: {
        color: guidelines.color.support.alert,
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
                      tokens.length - 1 === i ?
                        null :
                        guidelines.spacing.component.s.px,
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
