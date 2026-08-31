'use client'

import { getProducts, ProductsResponse } from "@/services/productService";
import { useCart } from "@/stores/useCart";
import { useEffect, useState } from "react";

export default function Service() {
  const [product, setProduct] = useState<ProductsResponse | null>(null)
  const addItem = useCart((state) => state.addItem)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [services, err] = await getProducts({
          category: "service"
        })
        if (services?.error) {
          setProduct(services)
        }

        setProduct(services)

      } catch (err) {
        const errorInstace = err instanceof Error ? err : new Error("Something wrong in Network")
        setProduct({
          error: errorInstace.message
        })
      }
    }
    fetchData()
  }, [])


  return (
    <section className="w-full h-auto bg-primary pt-7 pb-10">
      <div className="w-full h-auto mb-7">
        <h1 className="font-sans text-[3rem] text-center text-white font-black">OUR SERVICE</h1>
      </div>
      <div className="w-full h-auto flex justify-center gap-7.5 px-7.5">
        {product?.error ?
          <div className="w-full h-auto bg-neutral border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
            <h2 className="font-sans text-[2rem] text-primary-light text-center font-black my-1">
              {product.error}
            </h2>
          </div>

          :
          product?.data?.map((service) => {
            return (
              <div key={service.id} className="w-120 h-auto p-6.25 bg-neutral border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">

                <div className="w-full text-left">
                  <h2 className="capitalize font-sans text-[2rem] text-primary-light font-black my-1">{service.name}</h2>
                  <h3 className="font-sans text-[1.25rem] text-black font-black mb-2">Rp.{service.price.toLocaleString("id-ID")}</h3>
                  <p>{service.description}</p>
                  <ul className="list-disc list-inside">
                    <li>Coverage: {service.features.coverage}</li>
                    <li>Material: {service.features.material}</li>
                    <li>Bonus: {service.features.bonus}</li>
                    <li>Estimasi: {service.features.estimasi}</li>
                  </ul>
                </div>
                <div className="w-full h-auto flex justify-center mt-3">

                  <button onClick={() => {
                    console.log("clean button di klik")
                    addItem({ id: service.id, name: service.name, price: service.price, quantity: 1 })
                  }} className=" w-[16rem] h-auto bg-primary text-[2rem] text-white hover:bg-neutral hover:text-primary font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]" type="button">Clean Now</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </section >
  );
}
