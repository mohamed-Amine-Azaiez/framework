import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import ContactCard from "../components/ContactCard"
import bg3 from "../data/img/bg3.jpg"

function contact() {
  return (
    <div >
        <Header placeholder={""} />
        <div className="mx-auto max-w-7xl px-8 sm:px-16">
        <LargeCard url="" img={bg3} title="N'hésitez pas" description="à nous contacter pour toute précision ou information." buttonText="" />
        
        <ContactCard title="Contact" op1="Collaboration" op2="Presse" op3="Rejoins notre équipe" op4="Discuter" sop1="support@example.com" sop2="123 465 789"/>
        <ContactCard title="Localisation" op1="Sousse" op2="Sfax" op3="Tunis" op4="Discuter" sop1="Bizerte" sop2="123 465 789" />




        </div>
        
        <Footer />
    </div>
  )
}

export default contact