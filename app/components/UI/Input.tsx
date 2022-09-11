import React from 'react'

interface Props {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type = 'text', placeholder, value, onChange }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full h-12 rounded-md bg-white/10 border border-white/50"
    />
  )
}

export default Input
