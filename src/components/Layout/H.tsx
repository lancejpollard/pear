import React, { HTMLAttributes } from 'react'
import c from 'classnames'
import styles from './index.module.css'

export type ComponentProps = HTMLAttributes<HTMLElement> & {
  // tag?: string
  className?: string
  children?: React.ReactNode
  align?: 'left' | 'center' | 'right'
}

function Component({
  className,
  // tag = 'div',
  align = 'left',
  children,
}: ComponentProps): React.ReactElement {
  // const Element = tag
  return (
    <div className={c(className, styles.h, styles[align])}>{children}</div>
  )
}

export default Component
