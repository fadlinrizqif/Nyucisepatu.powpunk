'use client'

import { handleLogout } from "@/services/authService";
import { getUserData, UserRespond } from "@/services/userService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCartShopping, FaRegCircleUser } from "react-icons/fa6";
import CartList from "../Carts/CartList";

const links = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "Service",
    href: "",
  },
  {
    name: "About",
    href: "",
  },
  {
    name: "Contact",
    href: "",
  },
]



export default function Navbar() {
  const [userData, SetUserData] = useState<UserRespond | null>(null)
  const [showCart, setShowCart] = useState(true)
  const [showProfile, setShowProfile] = useState(true)
  const router = useRouter()

  const isShowCart = () => {
    setShowCart(!showCart)
  }

  const isShowProfile = () => {
    setShowProfile(!showProfile)
  }


  useEffect(() => {
    const fetchData = async () => {
      try {

        const [user, err] = await getUserData()
        if (user?.error) {
          SetUserData(err)
        }

        SetUserData(user)

      } catch (err) {
        const errorInstace = err instanceof Error ? err : new Error("Something wrong in Network")
        SetUserData(errorInstace)
      }
    }

    fetchData()
  }, [])

  const handleButton = async () => {

    const [, err] = await handleLogout()
    if (err) {
      console.log(err)
      return
    }
    console.log("berhasil gaes")
    SetUserData(null)

    router.refresh()

  }

  return (
    <header className="relative z-50 flex flex-row justify-between items-center w-full h-auto  px-2 bg-primary ">
      <div className="p-1">
        <a href="/"><img src="/Logo.svg" className="w-[13.7rem]" alt="" /></a>
      </div>
      <nav className=" flex flex-row gap-5 text-[1.7rem] font-mono font-bold mr-3">
        <ul className="flex flex-row gap-5 text-white">
          {links.map((link) => {
            return (
              <li key={link.name}><a href={link.href}>{link.name}</a></li>
            )
          })}
        </ul>
        {
          userData?.name ? (
            <>
              <div className="flex items-end justify-center w-auto h-full mx-2">
                <button onClick={isShowCart} className="absolute top-5">
                  <FaCartShopping className="text-white hover:text-primary-light" />
                </button>
                {!showCart && <CartList />}
              </div>
              <div className="flex flex-row gap-5 items-center">
                <button onClick={isShowProfile} className="flex flex-col items-center">
                  <FaRegCircleUser className="w-5 h-5 text-white" />
                  <p className="text-white text-[0.8rem]">{userData.name}</p>
                </button>
                {!showProfile &&

                  <div className="absolute  top-15 right-1.5 w-auto h-auto p-2 bg-neutral border-2 border-primary shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
                    <button onClick={handleButton} className=" w-32 h-auto bg-white text-[1.2rem] text-primary font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)] flex justify-center items-center"  >Sign Out</button>
                  </div>
                }
              </div>


            </>
          ) : (

            <div className="flex flex-row gap-5">
              <a href="/login" className=" w-32 h-auto bg-white text-[1.2rem] text-primary font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)] flex justify-center items-center"  >Login</a>
              <a href="/register" className=" w-32 h-auto bg-white text-[1.2rem] text-primary font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)] flex justify-center items-center"  >Register</a>
            </div>


          )
        }
      </nav>
    </header >
  );
}
