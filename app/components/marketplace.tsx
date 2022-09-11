import React from 'react'
import Button from './UI/button'
import Title from './UI/title'

const FILTER = [
  'All',
  'Art',
  'Music',
  'Video',
  'Photography',
  'Collectibles',
  'Sports',
  'NFTs'
]

const Marketplace = () => {
  return (
    <div className="my-10">
      <Title>Explore Marketplace</Title>
      <div className="flex items-center justify-between">
        {FILTER.map((filter, index) => (
          <Button key={index} variant="outline" className="!rounded-md">
            {filter}
          </Button>
        ))}
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="bg-white/10 rounded-lg p-4 h-[400px]" key={index}>
              <div className="flex flex-col items-center justify-between">
                <img
                  src={`https://picsum.photos/200/300?key=${index}`}
                  alt="nfts"
                />
                <div className="flex items-center justify-between">
                  <div className="ml-2">
                    <p className="text-sm font-semibold">Inception</p>
                    <p className="text-xs text-gray-400">by @inception</p>
                  </div>
                  <div className="">0.8 ETH</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marketplace
