//custom types

// eslint-disable-next-line
import React from 'react'

/// <reference types="react-scripts" />

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      bg?: string; // background
    }
}