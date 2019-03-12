/* eslint react/jsx-key: 0 */

import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from '../data/theme'

const codeTheme = {
  plain: {
    backgroundColor: theme.colors.gray.gray.hex,
    color: theme.colors.gray.grayLighter.hex,
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
      style: {
        color: theme.colors.primary.rentalRed.hex,
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['tag', 'operator', 'number'],
      style: {
        color: theme.colors.gray.grayLighter.hex,
      },
    },
    {
      types: ['property', 'function'],
      style: {
        color: theme.colors.gray.grayLighter.hex,
      },
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: '##5ac0dd',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#ff6461',
      },
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable',
      ],
      style: {
        color: '#5ac0dd',
      },
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through',
      },
    },
    {
      types: ['inserted'],
      style: {
        textDecorationLine: 'underline',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['important'],
      style: {
        color: '#5ac0dd',
      },
    },
  ],
}

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '')

  if (live) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }
  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={codeTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
