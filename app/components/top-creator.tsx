import React, { useState } from 'react'
import Button from './UI/button'
import CreatorCard from './UI/creator-card'
import Title from './UI/title'
import { Swiper, SwiperSlide } from 'swiper/react'

const TopCreator = () => {
  const [filter, setFilter] = useState(0)
  const [cards, setCards] = useState([
    {
      name: 'Hibnastiar',
      image: 'https://robohash.org/velitsaepeet.png?size=300x300&set=set2',
      workCount: '27.3K',
      coverImage: 'https://picsum.photos/200/300?key=1',
      isFollowed: false
    },
    {
      name: 'Tukirin',
      image: 'https://robohash.org/velitsaepeet.png?size=300x300&set=set1',
      workCount: '27.3K',
      coverImage: 'https://picsum.photos/200/300?key=2',
      isFollowed: true
    },
    {
      name: 'AhmetOzcan',
      image: 'https://robohash.org/velitsaepeet.png?size=300x300&set=set3',
      workCount: '27.3K',
      coverImage: 'https://picsum.photos/200/300?key=3',
      isFollowed: false
    },
    {
      name: 'MehmetOzcan',
      image: 'https://robohash.org/velitsaepeet.png?size=300x300&set=set4',
      workCount: '27.3K',
      coverImage: 'https://picsum.photos/200/300?key=4',
      isFollowed: false
    },
    {
      name: 'turkbayrak',
      image: 'https://robohash.org/velitsaepeet.png?size=300x300&set=set5',
      workCount: '27.3K',
      coverImage: 'https://picsum.photos/200/300?key=5',
      isFollowed: false
    }
  ])

  const followHandler = (index: number) => {
    const newCards = [...cards]
    newCards[index].isFollowed = !newCards[index].isFollowed
    setCards(newCards)
  }

  return (
    <div className="mb-10">
      <Title>Top List Creator</Title>
      <div className="centered mb-16 mt-8 gap-6">
        <Button
          onClick={() => setFilter(0)}
          rounded="md"
          variant={filter === 0 ? 'primary' : 'outline'}
        >
          Popular
        </Button>
        <Button
          rounded="md"
          onClick={() => setFilter(1)}
          variant={filter === 1 ? 'primary' : 'outline'}
        >
          Following
        </Button>
      </div>
      <Swiper spaceBetween={50} slidesPerView={4}>
        {cards.map((card, index) => (
          <SwiperSlide key={`creator-item-${card.name}-${index}`}>
            <CreatorCard {...card} onFollow={() => followHandler(index)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TopCreator
