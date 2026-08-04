
export default function Service() {
  return (
    <section className="w-full h-auto bg-primary pb-10">
      <div className="w-full h-auto ">
        <h1 className="font-sans text-[4rem] text-center text-white font-black">OUR SERVICE</h1>
      </div>
      <div className="w-full h-auto flex gap-7.5 px-7.5">
        <div className="w-auto h-auto p-6.25 bg-neutral border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
          <div className="w-fit h-[13.18rem] overflow-hidden">
            <img src="/shoe-image.svg" className="w-full h-full object-cover" alt="regulan clean" />
          </div>
          <div className="w-fit text-left">
            <h2 className="font-sans text-[2rem] text-primary-light font-black my-1">Regular Clean</h2>
            <h3 className="font-sans text-[1.25rem] text-black font-black mb-2">Rp.10.000</h3>
            <p>Pembersihan standar bagian luar untuk menjaga sepatu harianmu tetap rapi dan bebas bau.</p>
            <ul className="list-disc list-inside">
              <li>Coverage: Upper & Midsole Only</li>
              <li>Material: Canvas & Mesh Standard</li>
              <li>Bonus: Free Deodorizer Spray</li>
              <li>Estimasi: 1–2 Hari Kerja</li>
            </ul>
          </div>
          <div className="w-full h-auto flex justify-center mt-3">

            <button className=" w-[16rem] h-auto bg-primary text-[2rem] text-white font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]" type="button">Clean Now</button>
          </div>
        </div>
        <div className="w-auto h-auto p-6.25 bg-neutral border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
          <div className="w-fit h-[13.18rem] overflow-hidden">
            <img src="/shoe-image.svg" className="w-full h-full object-cover" alt="regulan clean" />
          </div>
          <div className="w-fit text-left">
            <h2 className="font-sans text-[2rem] text-primary-light font-black my-1">Premium Clean</h2>
            <h3 className="font-sans text-[1.25rem] text-black font-black mb-2">Rp.15.000</h3>
            <p>Pembersihan ekstra menyeluruh hingga ke sela-sela terdalam dengan teknik & cairan khusus. </p>
            <ul className="list-disc list-inside">
              <li>Coverage: All Parts (Upper, Midsole, Outsole & Laces)</li>
              <li>Material: Safe for Suede, Nubuck, Leather & Knit</li>
              <li>Bonus: Anti-Bacterial & Unyellowing Touchup</li>
              <li>Estimasi: 2–3 Hari Kerja</li>
            </ul>
          </div>
          <div className="w-full h-auto flex justify-center mt-3">

            <button className=" w-[16rem] h-auto bg-primary text-[2rem] text-white font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]" type="button">Clean Now</button>
          </div>
        </div>
      </div>
    </section >
  );
}
