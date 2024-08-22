"use client"

import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import { Axios } from "axios"

export default function SignupPage(){
    const [user,setUser] = React.useState({
        username:"",
        email:"",
        password:"",
    })

    const onSignup = async ()=>{

    }
    return(
         <div
      className="flex flex-col items-center justify-center min-h-screen
    py-2 text-white bg-black "
    >
      <h1 className="font-bold text-3xl">SignupPage</h1>
      <label className="mt-3" htmlFor="username">
        username
      </label>
      <input
        className="p-2 text-black rounded-lg"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label className="mt-3" htmlFor="email">
        email
      </label>
      <input
        className="p-2 text-black rounded-lg"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label className="mt-3" htmlFor="password">
        password
      </label>
      <input
        className="p-2 text-black rounded-lg"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
      onClick={onSignup}
      className="p-2 border flex bg-zinc-500 mt-3 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600">
        SignUp
      </button>
      <Link href="/login">visit login page</Link>
    </div>
    )
}