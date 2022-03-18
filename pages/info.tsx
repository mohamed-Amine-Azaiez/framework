import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Place from "../components/Place"

function info({ rondoinfo }) {
  const router = useRouter()
  const { id,title,location } = router.query

  const idr = parseInt(id)


  


  return (
    <div>
      <Header placeholder="" />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs-small">
            {location}
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            {title}
          </h1>
          

          <div className='flex flex-col'>
        
            {rondoinfo.filter(item => item.id === idr ).map(({img,p1,p2,p3,location,title,price,id}) => (
            
            <Place img={img} location={location} title={title} p1={p1} p2={p2} p3={p3} price={price}  id={id} />
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
  const res = await fetch('https://raw.githubusercontent.com/mohamed-Amine-Azaiez/framework/main/data/rondodata.json');
  const rondoinfo = await res.json()
  
  return {
    props: {
      rondoinfo,
    },
  };
}
