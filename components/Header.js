import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/dist/client/router'

import Login from '../components/Login'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useEffect } from "react";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('')
  const [logged, setLogged] = useState("false")
  useEffect(() => {
    // Perform localStorage action
    localStorage.getItem('logged')==="True"
    ? setLogged("True")
    : setLogged("false")
  }, [])


  if (placeholder === 'undefined') {
    placeholder = 'All'
  }
  const router = useRouter()

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
      },
    })
  }
  const deconnect=() =>{
    localStorage.setItem("logged", "False");
        window.location.reload()
  }
  const checkLog = () => {
    if (logged === "True") {
      return (
        <div onClick={deconnect} className="flex items-center justify-end space-x-4 text-gray-500">
          <div className="flex items-center space-x-2 rounded-full border-2 p-2">
            <p className="hidden cursor-pointer md:inline">Deconnexion</p>
            <UserCircleIcon className="h-6 cursor-pointer" />
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex items-center justify-end space-x-4 text-gray-500">
          <Popup
            trigger={
              <div className="flex items-center space-x-2 rounded-full border-2 p-2">
                <p className="hidden cursor-pointer md:inline">Connexion</p>
                <UserCircleIcon className="h-6 cursor-pointer" />
              </div>
            }
            position="bottom center"
          >
            <Login />
          </Popup>
        </div>
      )
    }
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* left */}
      <div
        onClick={() => router.push('/')}
        className="relative my-auto flex h-10 cursor-pointer items-center"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/2560px-Airbnb_Logo_Bélo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div className="flex items-center rounded-full py-2 md:border-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow bg-transparent pl-5 text-gray-600 placeholder-gray-600 outline-none"
          type="text"
          placeholder={placeholder || 'Start your search'}
        />
        <SearchIcon
          onClick={search}
          className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex"
        />
      </div>

      {/* right */}
      {checkLog()}
    </header>
  )
}

export default Header
