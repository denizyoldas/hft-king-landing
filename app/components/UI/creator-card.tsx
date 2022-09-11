import React from 'react'
import Button from './button'

interface Props {
  name: string
  image: string
  coverImage: string
  workCount: string
  isFollowed?: boolean
  onFollow?: () => void
}

const CreatorCard = ({
  name,
  image,
  coverImage,
  workCount,
  isFollowed = false,
  onFollow
}: Props) => {
  return (
    <div className="w-full pb-4 rounded-4xl bg-white/10 backdrop-blur-sm">
      <div className="relative">
        <img
          src={coverImage}
          alt={name}
          className="w-full h-36 object-cover rounded-4xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full -mt-10 border-8 border-white/10 z-10 bg-black"
        />
        <div className="flex flex-col items-center justify-center pt-4 gap-5 w-full">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm bg-gradient-to-r from-title-yellow-300 to-title-yellow-500 bg-clip-text">
            <span className="text-md font-bold">{workCount}</span> Artwork
          </p>
          <Button
            onClick={onFollow}
            variant={isFollowed ? 'outline' : 'primary'}
            className="w-5/6 rounded-sm"
          >
            {isFollowed ? 'Followed' : 'Follow'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreatorCard
