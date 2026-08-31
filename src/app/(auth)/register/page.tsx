"use client"

import { handleLogin, handleRegister, LoginRespond, payloadRegister, RegisterRespond } from "@/services/authService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaGoogle } from 'react-icons/fa'

export default function Page() {
  const router = useRouter()

  const [formData, setFormData] = useState<payloadRegister>({
    name: "",
    email: "",
    password: "",
  })
  const [message, setMessage] = useState<RegisterRespond | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault()
    try {
      const [result, err] = await handleRegister(formData)
      if (err) {
        setMessage({ error: err.message })
        return
      }

      console.log(result)
      setMessage(result)
      router.push("/login")

    } catch (err) {
      setMessage({ error: String(err) })
      console.log(err)
    }
  }

  return (

    <div className="flex justify-center items-center w-full h-screen bg-neutral">
      <main className="flex flex-col justify-around gap-2 w-100 h-auto p-4 border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
        <div className="text-center">
          <h1 className="font-black font-sans text-3xl text-primary">Register</h1>
          <p className="font-mono">Please fill the form below</p>
          {message?.error && (<p className='font-mono text-red-400'>{message.error}</p>)}
          {message?.name && (<p className='font-mono text-green-400'>Welcome {message.name}</p>)}
        </div>
        <div className="mx-6 px-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <div className="flex flex-col">
              <label htmlFor="name">name</label>
              <input
                className="border-2 border-primary-light bg-white"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="border-2 border-primary-light bg-white"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                className="border-2 border-primary-light bg-white"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center w-full h-auto text-center">
              <p>Or</p>
              <a href="http://localhost:8080/auth/google/login" target='_blank'>
                <FaGoogle className='w-6 h-6 text-primary' />
              </a>
              <p>Already have account ?<a href="/login"> Login Here</a></p>
            </div>
            <div className="w-full flex justify-center">
              <button type="submit" className="w-[16rem] h-auto bg-primary text-[2rem] text-white font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">Login</button>
            </div>
          </form>
        </div>

      </main>
    </div>
  );

}
