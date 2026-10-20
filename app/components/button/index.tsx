import Link from 'next/link';
import type { ComponentProps } from 'react';

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: 'primary' | 'ghost';
  arrow?: boolean;
};

export default function ButtonLink({
  variant = 'primary',
  arrow = false,
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`btn btn-${variant} ${className}`} {...props}>
      {children}
      {arrow && <span className="arr">→</span>}
    </Link>
  );
}

export function ButtonRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-3">{children}</div>;
}
