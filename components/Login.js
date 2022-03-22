import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [passw, setPassw] = useState('')


    const loginfunc =() =>{
      if(username==="admin"&& passw==="admin"){
        localStorage.setItem("logged", "True");
        window.location.reload()
      }
    }
    
  return (
    <div className="pt-5 text-center">
      <div className="mb-6 md:flex md:items-center">
        <div className="">
          <input
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            id="inline-full-name"
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-6 md:flex md:items-center">
        <div className="">
          <input
          
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            id="inline-password"
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => setPassw(e.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center content-center">
        <button
        onClick={loginfunc}
          className="focus:shadow-outline rounded bg-purple-500 py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
          type="button"
        >
          Connexion
        </button>
      </div>
    </div>
  )
}

export default Login
