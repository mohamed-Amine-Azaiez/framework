import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold"> Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

          <div className='flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData?.map(({img,title}) => (
            <MediumCard key={img} img={img} title={title}  />
          ))}
          </div>
        </section>
        <section></section>
        <LargeCard img={"https://links.papareact.com/4cj"} title="The Greatest Outdoors" description="Wishlists curated by Airbnb" buttonText="Get Inspired" />
      </main>
      <Footer  />
      
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://raw.githubusercontent.com/mohamed-Amine-Azaiez/framework/main/data/indexdata.json').then(
    (res) => res.json()
  )
  const cardsData = await fetch('https://raw.githubusercontent.com/mohamed-Amine-Azaiez/framework/main/data/indexbigcards.json').then(
    (res) => res.json()
  )
  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData,
    },
  }
}
