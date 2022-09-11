import React from 'react'
import cx from 'classnames'

interface Props {
  variant?: 'primary' | 'outline'
  className?: string
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  variant = 'primary',
  className,
  rounded = 'md',
  children,
  onClick
}: Props) => {
  return (
    <button
      className={cx(
        `px-4 py-2 !rounded-${rounded} font-bold text-sm`,
        {
          'bg-gradient-to-r to-primary from-secondary text-white rounded-2xl':
            variant === 'primary',
          'bg-transparent border border-primary': variant === 'outline'
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
