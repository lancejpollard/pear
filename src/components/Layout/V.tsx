import React, { HTMLAttributes } from 'react'
import c from 'classnames'
import styles from './index.module.css'

export type ComponentProps = HTMLAttributes<HTMLElement> & {
  // tag?: string
  className?: string
  children?: React.ReactNode
  valign?: 'top' | 'center' | 'bottom'
  halign?: 'left' | 'center' | 'right'
}

function Component({
  className,
  // tag = 'div',
  children,
  valign = 'top',
  halign = 'left',
  ...attrs
}: ComponentProps): React.ReactElement {
  // const Element = tag
  return (
    <div {...attrs} className={c(className, styles.v, styles[`v${valign}`], styles[`h${halign}`])}>{children}</div>
  )
}

export default Component
