'use client'

import { CartItem, useCart } from "@/stores/useCart";


export default function CartList() {
  const items = useCart((state) => state.items)
  const addItem = useCart((state) => state.addItem)
  const decreseItem = useCart((state) => state.decreseItem)
  const clearItem = useCart((state) => state.clearItem)
  const inCart = items.length > 0 ? true : false;

  console.log(items)
  console.log(inCart)
  return (
    <div className="absolute flex flex-col gap-2 top-15 right-1.5 w-100 h-auto p-2 bg-neutral border-2 border-primary shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
      {!inCart ?
        <p>No item in Cart</p>
        :
        <>
          {items.map((item: CartItem) => {
            return (
              < div key={item.id} className="flex flex-col gap-2 w-full h-auto">
                <div className="flex flex-row justify-between w-full p-1 border-2 border-black ">
                  <div>
                    <p className="text-primary text-[1.5rem]">{item.name}</p>
                    <p className="text-[1rem]">{(item.price * item.quantity).toLocaleString("id-ID")}</p>
                  </div>
                  <div className="flex flex-row items-center gap-4 ">
                    <button onClick={() => decreseItem(item.id)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => addItem({ id: item.id, name: item.name, price: item.price, quantity: 1 })}>+</button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-full h-auto">
            <button onClick={clearItem}>Clear Cart</button>
          </div>
        </>

      }
      <hr className="h-1 bg-primary border-none" />
      <div className="flex flex-row justify-between w-full h-auto p-2">
        <p>Rp. {items.reduce((a, b) => a + (b.price * b.quantity), 0).toLocaleString("id-ID")}</p>
        <a href="/orders" className={!inCart ? "hidden" : "w-32 h-auto bg-primary text-[1.2rem] text-neutral font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)] flex justify-center items-center"} >
          Checkout
        </a>
      </div>
    </div >
  );
}
