import React from 'react'

interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return <h2 className="font-semibold text-4xl text-center mb-8">{children}</h2>
}

export default Title
