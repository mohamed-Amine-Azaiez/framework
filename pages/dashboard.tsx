import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import bg4 from "../data/img/bg4.jpg"
function dashboard({ searchResults }) {

    const router = useRouter()
    const [list, updateList] = useState(searchResults);

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


        if(date1 > date2){
            return "Active"
        } else if(date1 < date2){
            return "Expirée"
        } else{
            return "Aujourd'hui"
        }
    }
    
    const edit = (item) => {
        router.push({
            pathname: '/ajouter',
            query: {
              rtitle: item.title,
              rlocation:item.location,
              rdescription:item.description,
              rp1:item.p1,
              rp2:item.p2,
              rp3:item.p3,
              rprix:item.price
            },
          })
    }
    const sup =(it) =>{
      updateList(list.filter(item => item !== it));
    }
    
    
  return (
    <div>
      <Header placeholder={''} />
      <div className="mx-auto max-w-7xl px-8 sm:px-16">
      <LargeCard img={bg4} title="Dashboard" description="" buttonText="Ajouter Nouveau" url="ajouter" />
        
        <table className=" w-full border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="... border border-slate-600 ">Randonnée</th>
              <th className="... border border-slate-600">Ville</th>
              <th className="... border border-slate-600">Date</th>
              <th className="... border border-slate-600">Etat</th>
              <th className="... border border-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.id}>
                <td className="... border border-slate-700">{item.title}</td>
                <td className="... border border-slate-700">{item.location}</td>
                <td className="... border border-slate-700">{new Date(item.Date).toLocaleDateString("fr-FR")}</td>
                <td className="... border border-slate-700">{dateCompare(item.Date, dt)}</td>
                <td className="... border border-slate-700 flex justify-around ">
                    <p onClick={()=>edit(item)} className='cursor-pointer hover:font-bold'>Modifier</p>
                    <p onClick={()=>sup(item)} className='cursor-pointer hover:font-bold text-red-600'>Supprimer</p>
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
