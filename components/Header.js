import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import Login from '../components/Login'
import logo from "../data/img/logo.png"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useEffect } from 'react'

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('')
  const [logged, setLogged] = useState('false')
  useEffect(() => {
    // Perform localStorage action
    localStorage.getItem('logged') === 'True'
      ? setLogged('True')
      : setLogged('false')

    var style = document.createElement('style')
    style.innerHTML = `
  [role=tooltip].popup-content {
    width: 170px;
    box-shadow: 0 0 3px rgb(0 0 0 / 16%);
    border-radius: 5px;
}
  `
    document.head.appendChild(style)
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

  const contact = () => {
    router.push({
      pathname: '/contact',
    })
  }

  const deconnect = () => {
    localStorage.setItem('logged', 'False')
    window.location.reload()
  }
  const dash =() =>{
    router.push({
      pathname: '/dashboard',
    })
  }
  const add =() =>{
    router.push({
      pathname: 'ajouter',
    })
  }

  const checkLog = () => {
    if (logged === 'True') {
      return (
        <div className="flex items-center justify-end space-x-4 text-gray-500">
          <Popup
            trigger={
              <div className="flex items-center space-x-2 rounded-full border-2 p-2">
                <p className="hidden cursor-pointer md:inline">Compte</p>
                <UserCircleIcon className="h-6 cursor-pointer" />
              </div>
            }
            position="bottom center"
          >
            <div className="text-center pb-4 font-semibold">
              <p onClick={dash} className="cursor-pointer my-2 pb-2 border-b-2">Dashboard</p>
              <p onClick={add} className="cursor-pointer my-2 pb-2 border-b-2">Ajouter</p>
              <p onClick={deconnect} className="cursor-pointer">Deconnexion</p>
            </div>
          </Popup>
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
          src={logo}
          layout=""
          objectFit="contain"
          objectPosition="left"
          height="120px"
          
        />
      </div>

      {/* middle */}
      <div className="flex items-center rounded-full py-2 md:border-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow bg-transparent pl-5 text-gray-600 placeholder-gray-600 outline-none"
          type="text"
          placeholder={placeholder || 'Commencer votre recherche'}
        />
        <SearchIcon
          onClick={search}
          className="hidden h-8 cursor-pointer rounded-full bg-[#4BB543] p-2 text-white md:mx-2 md:inline-flex"
        />
      </div>

      {/* right */}
      <div
        onClick={contact}
        className="flex items-center justify-end space-x-4 text-gray-500"
      >
        <div className="flex hidden items-center space-x-2 rounded-full border-2 p-2 md:block">
          <p className=" cursor-pointer px-1 md:inline">Contact</p>
        </div>

        {checkLog()}
      </div>
    </header>
  )
}

export default Header
