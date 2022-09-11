import React from 'react'
import Button from './UI/button'
import Input from './UI/Input'

const Subscribe = () => {
  return (
    <div className="w-full centered flex-col h-96 border border-white/50 rounded-md bg-white/10">
      <h2 className="font-semibold text-4xl">Never miss a drop!</h2>
      <span className="font-normal">
        Subscribe to super-exclusive drop list and be the first to know about
        upcoming drops
      </span>
      <div className="flex gap-4">
        <Input placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </div>
    </div>
  )
}

export default Subscribe
