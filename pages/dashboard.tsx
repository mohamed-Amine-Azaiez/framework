import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function dashboard({ searchResults }) {

    const router = useRouter()


    useEffect(() => {
        // Perform localStorage action
        if(localStorage.getItem('logged') !== 'True'){
            window.location.replace("/")
        }
      }, [])

    const dt = new Date().toLocaleDateString("en-US").toString()


    function dateCompare(d1, d2){
        const date1 = new Date(d1).toLocaleDateString("en-US");
        const date2 = new Date(d2).toLocaleDateString("en-US");

        const date1fr = new Date(d1).toLocaleDateString("fr-FR");
        const date2fr = new Date(d2).toLocaleDateString("fr-FR");

        if(date1 > date2){
            return "active"
        } else if(date1 < date2){
            return "expired"
        } else{
            return "today"
        }
    }
    
    
    
    
  return (
    <div>
      <Header placeholder={''} />
      <div className="mx-auto max-w-7xl px-8 py-20 sm:px-16">
        <h3 className="mb-3 w-64 text-4xl font-bold">Dashboard</h3>
        <table className="my-[100px] w-full border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="... border border-slate-600">Randonnée</th>
              <th className="... border border-slate-600">Ville</th>
              <th className="... border border-slate-600">Date</th>
              <th className="... border border-slate-600">Etat</th>
              <th className="... border border-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((item) => (
              <tr key={item.id}>
                <td className="... border border-slate-700">{item.title}</td>
                <td className="... border border-slate-700">{item.location}</td>
                <td className="... border border-slate-700">{item.Date}</td>
                <td className="... border border-slate-700">{dateCompare(item.Date, dt)}</td>
                <td className="... border border-slate-700 flex justify-around ">
                    <p>Modifier</p>
                    <p>Supprimer</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default dashboard

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
