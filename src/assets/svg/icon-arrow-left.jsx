import React, { memo } from 'react'
import { styleStrToObject } from './utils'

const IconArrowLeft = memo((prop) => {
  const { width = "12px", height = "12px" } = prop

  return (
    <svg
      viewBox='0 0 18 18'
      role='img'
      aria-hidden='false'
      aria-label='previous'
      focusable='false'
      style={styleStrToObject(
        `height: ${height}; width: ${width}; display: block; fill: currentcolor;`
      )}
    >
      <path
        d='m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z'
        fillRule='evenodd'
      ></path>
    </svg>
  )
})

export default IconArrowLeft
