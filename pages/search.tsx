import { tr } from 'date-fns/locale'
import { useRouter } from 'next/dist/client/router'
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
                Date,
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
                  date={Date}
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
