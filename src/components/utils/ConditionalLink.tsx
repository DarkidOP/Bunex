// components/UnstyledLink.tsx
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'

export type UnstyledLinkProps = {
  href: string
  children: React.ReactNode
  openNewTab?: boolean
  className?: string
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps

export default function CLink({
  children,
  href,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith('/') && !href.startsWith('#')

  if (!isNewTab) {
    return (
      <Link href={href}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={cn(className, 'cursor-newtab')}
    >
      {children}
    </a>
  )
}
