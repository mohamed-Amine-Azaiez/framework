import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from "../components/InfoCard"
function search({ searchResults }) {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query
  const formattedStartDate = format(new Date(startDate), 'dd/MM/yyyy')
  const formattedEndDate = format(new Date(endDate), 'dd/MM/yyyy')
  const range = `${formattedStartDate} - ${formattedEndDate}`
  return (
    <div>
      <Header placeholder={` ${location} | $(range) | ${noOfGuests}  guests`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs-small">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className="text-gr* mb-5 hidden space-x-3 whitespace-nowrap lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className='flex flex-col'>
          {searchResults.map(({img,location,title,description,start,price,total,star}) => (
            <InfoCard img={img} location={location} title={title} description={description} start={start} price={price} total={total} star={star} />
          ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
