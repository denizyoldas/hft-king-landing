import React from 'react'
import Button from './UI/button'

const Explore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
      <div>
        <div className="font-bold text-6xl">
          Discover & Collect{' '}
          <span className="bg-gradient-to-r from-title-yellow-300 to-title-yellow-500 bg-clip-text">
            Super Rare
          </span>{' '}
          Digital Artworks
        </div>
        The largest NFT marketplace. Authentic and truly unique digital
        creation. Signed and issued by the creator, made possible by blockchain
        technology
        <div>
          <Button>Let’s Explore</Button>
          <Button variant="outline">Sell NFT</Button>
        </div>
      </div>
      <div className="relative flex justify-center">
        <img src="/images/explore.png" alt="explore" />
        <div className="w-full absolute grid grid-cols-3 bottom-10 h-32 border border-white items-center backdrop-blur-md text-center font-bold text-lg rounded-lg">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/metamask-icon.png"
              className="h-9"
              alt="meta mask wallet"
            />{' '}
            MetaMask
          </div>
          <div>ICON Binance</div>
          <div>ICON Coinbase</div>
        </div>
      </div>
    </div>
  )
}

export default Explore
