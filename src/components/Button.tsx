import React, { HTMLAttributes } from 'react'
import Link from 'next/link'

export type ComponentProps = HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
  children?: React.ReactNode
  href?: string
}

const Component = ({
  href,
  children,
  ...attrs
}: ComponentProps): React.ReactElement => {
  if (href) {
    return (
      <Link href={href}>
        <a {...attrs}>
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <button {...attrs}>{children}</button>
    )
  }
}

export default Component
