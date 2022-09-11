import React from 'react'
import Button from './UI/button'

interface Props {
  title: string
  username: string
  description?: string
  price: string
  image: string
  isCollected?: boolean
}

const TrendCard = ({
  title,
  username,
  description,
  price,
  image,
  isCollected = false
}: Props) => {
  return (
    <div className="min-w-[350px] w-full max-w-[470px] m-auto">
      <div className="text-center px-8">
        <img src={image} alt={username} className="w-[350px] h-[220px]" />
      </div>
      <div className="mx-auto h-[120px] w-full min-w-[350px] max-w-[470px] flex items-center -mt-12 border-2 p-4 backdrop-blur-lg bg-white/10 rounded-[15px]">
        <div className="flex flex-col whitespace-nowrap w-full">
          <span className="m-0 font-bold md:text-base xl:text-2xl">
            {username}
          </span>
          <span className="text-slate-500">@{username}</span>
          <span className="bg-gradient-to-r from-title-yellow-300 to-title-yellow-500 bg-clip-text font-bold md:text-base xl:text-xl">
            {price}
          </span>
        </div>
        <div className="flex justify-end w-full">
          <Button>Collect Now</Button>
        </div>
      </div>
    </div>
  )
}

export default TrendCard
