import Explore from '~/components/explore'
import Footer from '~/components/footer'
import Header from '~/components/header'
import Marketplace from '~/components/marketplace'
import Subscribe from '~/components/subscribe'
import TopCreator from '~/components/top-creator'
import Trending from '~/components/trending'
import swiperBundle from 'swiper/swiper-bundle.min.css'
import sipwerMin from 'swiper/swiper.min.css'

export function links() {
  return [
    { rel: 'stylesheet', href: swiperBundle },
    { rel: 'stylesheet', href: sipwerMin }
  ]
}

export default function Index() {
  return (
    <div className="bg-black bg-[url('/lines.png')]">
      <Header />
      <div className="px-20">
        <Explore />
        <Trending />
        <Marketplace />
        <TopCreator />
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}
