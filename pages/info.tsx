import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from "../components/InfoCard"
function info({ rondoinfo }) {
  const router = useRouter()
  const { idr } = router.query



  


  return (
    <div>
      <Header placeholder="" />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs-small">
            300+ Stays
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in 
          </h1>
          

          <div className='flex flex-col'>
          {rondoinfo.map(({id}) => (
            
            
            <li>{id==idr?"yes":"aa"}</li>
          ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default info;

export async function getServerSideProps() {
  const rondoinfo = await fetch('https://raw.githubusercontent.com/mohamed-Amine-Azaiez/framework/main/data/rondodata.json').then(
    (res) => res.json()
  );
  return {
    props: {
      rondoinfo,
    },
  };
}
