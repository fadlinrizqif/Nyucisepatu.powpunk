
export default function Hero() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center bg-neutral overflow-hidden">
      <img src="/Background-shoes.svg" alt="" className="absolute top-0 right-0 w-fit z-0" />

      <div className="flex items-center flex-col gap-5 w-fit h-auto p-2.5  ">
        <h1 className="text-[3.5rem] text-center text-primary-light font-black font-sans leading-normal">DROP YOUR KICKS,<br />
          WE BLAST THE DIRT</h1>
        <p className="font-sans text-[1rem] text-center">Jasa perawatan & cuci sepatu premium dengan <br />antar-jemput gratis dan garansi bersih 100%</p>
        <button className=" w-[16rem] h-auto bg-primary text-[2rem] text-white font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]" type="button">Clean Now</button>
      </div>
    </section>
  );
}
