'use client'

import { getUserData, UserRespond } from "@/services/userService";
import { CartItem, useCart } from "@/stores/useCart";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState<UserRespond | null>(null)
  const items = useCart((state) => state.items)

  useEffect(() => {
    const fetData = async () => {
      try {
        const [user, err] = await getUserData()
        if (user?.error) {
          setUser(err)
        }
        setUser(user)
      } catch (err) {

        const errorInstace = err instanceof Error ? err : new Error("Something wrong in Network")
        setUser(errorInstace)
      }
    }

    fetData()
  }, [])


  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-neutral overflow-hidden">

      <img src="/Background-shoes.svg" alt="" className="absolute top-0 right-0 w-fit z-0" />
      <main className="flex flex-row gap-2 w-4xl h-3/4 bg-neutral border-2 p-2 z-10">
        <div className="w-full h-auto flex flex-col gap-3 p-4 bg-neutral border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
          <h2 className="font-sans text-[1.5rem] text-primary font-black">Data Konsumen</h2>
          <dl className="flex flex-col gap-3">
            <div className="flex flex-col">
              <dt className="font-sans font-bold text-primary-light">Nama</dt>
              <dd>{user?.name}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="font-sans font-bold text-primary-light">Email</dt>
              <dd>{user?.email}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="font-sans font-bold text-primary-light">Alamat</dt>
              <dd>Jl. Contoh No. 1, Bandung</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-col gap-2 w-full h-full border-2 p-2">
          <div className="">
            <h2 className="">Detail Product</h2>
          </div>
          <div className="w-full h-auto bg-gray-400 p-2">
            {items.map((item: CartItem) => {
              return (

                <div key={item.id} className="flex justify-between w-full h-auto">
                  <p>{item.name} x {item.quantity}</p>
                  <p>Rp.{(item.price * item.quantity).toLocaleString("id-ID")}</p>
                </div>

              )
            })}
            <div className="flex justify-between w-full h-auto">
              <p>Ongkos Kirim</p>
              <p>Rp.5.000</p>
            </div>
            <div className="flex justify-between w-full h-auto font-bold">
              <p>Total</p>
              <p>Rp.{items.reduce((a, b) => a + (b.price * b.quantity), 0).toLocaleString("id-ID")}</p>
            </div>
          </div>
          <div>
            <button className="w-full h-15 bg-primary text-[2rem] text-neutral font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)] flex justify-center items-center ">
              Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
