import React, { useState } from 'react'
import TrendCard from './trend-card'
import Title from './UI/title'

const Trending = () => {
  const [trendCards, setTrendCards] = useState([
    {
      title: 'Miles Grogosters',
      username: '@MilesGrogosters',
      description: 'Miles Grogosters is a digital artist and designer based in',
      price: '15 ETH',
      image: 'https://picsum.photos/200/300?key=1'
    },
    {
      title: 'Miles Grogosters',
      username: '@MilesGrogosters',
      description: 'Miles Grogosters is a digital artist and designer based in',
      price: '15 ETH',
      image: 'https://picsum.photos/200/300?key=1'
    }
  ])

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2">
        <Title>Trending This Week</Title>
        <h3 className="text-white/50">
          Various kinds of Artwork categories that are trending this week. The
          trend will be reset every week. Don’t miss out on the best artworks
          every week
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {trendCards.map((trendCard, index) => (
          <div key={index} className="mt-4">
            <TrendCard {...trendCard} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending
