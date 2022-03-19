import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
function search({ searchResults }) {
  const router = useRouter()
  const { location } = router.query
  var rlocation=""
  if(!location){
    rlocation="All"
  }else{
    rlocation=location[0].toUpperCase() + location.slice(1)
  }

  

  return (
    <div>
      <Header placeholder={`${location}`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs-small">{
            searchResults.filter(item=> item.location === (rlocation==="All"?item.location:rlocation) ).length

          } Sorties trouvées</p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="flex flex-col">
            {searchResults.filter(item=> item.location === (rlocation==="All"?item.location:rlocation) ).map(
              ({
                img,
                location,
                title,
                description,
                start,
                price,
                total,
                star,
                id,
              }) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  start={start}
                  price={price}
                  star={star}
                  id={id}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default search

export async function getServerSideProps() {
  const searchResults = await fetch(
    'https://raw.githubusercontent.com/mohamed-Amine-Azaiez/framework/main/data/rondodata.json'
  ).then((res) => res.json())
  return {
    props: {
      searchResults,
    },
  }
}
