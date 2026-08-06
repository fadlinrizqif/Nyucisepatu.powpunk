export default function Process() {
  return (
    <section className="w-full bg-neutral pt-10 pb-10">
      <div className="w-full h-auto ">
        <h1 className="font-sans text-[3rem] text-center text-primary-light font-black">HOW IT WORK</h1>
      </div>
      <div className="w-full h-auto grid grid-cols-5 grid-rows-1 gap-7  my-7">
        <div className="flex flex-col items-center justify-end ">
          <img src="/web-icon.svg" className="w-30" alt="website-icon" />
          <h2 className="text-center font-normal">Order Online</h2>
        </div>
        <div className="flex flex-col justify-end items-center ">
          <img src="/truck-icon.svg" className="w-30" alt="website-icon" />
          <h2 className="text-center">Pick Up</h2>
        </div>
        <div className="flex flex-col justify-end items-center ">
          <img src="/soap-icon.svg" className="w-30" alt="website-icon" />
          <h2 className="text-center">Deep Clean</h2>
        </div>
        <div className="flex flex-col justify-end items-center">
          <img src="/truck-icon.svg" className="w-30" alt="website-icon" />
          <h2 className="text-center">Delivery</h2>
        </div>
        <div className="flex flex-col gap-7 justify-end items-center px-3">
          <img src="/shoe-icon.svg" className="w-30" alt="website-icon" />
          <h2 className="text-center">Ready to Wear</h2>
        </div>
      </div>
    </section>
  );
}
