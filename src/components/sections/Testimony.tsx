
export default function Testimony() {
  return (
    <section className="w-full h-auto bg-primary-light px-10 pb-10">
      <div className="w-full h-auto">
        <h1 className="font-sans text-[4rem] text-center text-white font-black">TESTIMONY</h1>
      </div>
      <div className="w-full flex flex-col gap-7">
        <div className="flex flex-row-reverse gap-4 w-full h-70 p-6.25 bg-neutral border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
          <div className="w-auto h-full">
            <div className="flex flex-row gap-2 w-fit h-[13.18rem] overflow-hidden">
              <img src="/shoe-image.svg" className="w-full h-full object-cover" alt="regulan clean" />
              <img src="/shoe-image.svg" className="w-full h-full object-cover" alt="regulan clean" />
            </div>
          </div>
          <div className="flex flex-col justify-around w-fit h-full  p-3">
            <h2>Roronoa Zoro</h2>
            <p className="italic">“Sepatu bekas moshpit gig kemaren kotor parah kena lumpur sama oli, pas balik dari Clean Step gokil sih... berasa baru keluar dari box lagi! Pengerjaan kilat banget.”</p>
            <ul className="list-disc list-inside">
              <li>Rating: ⭐⭐⭐⭐⭐</li>
              <li>Service: Premium Clean</li>
              <li>Shoe: Vans Old Skool</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-4 w-full h-70 p-6.25 bg-neutral border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
          <div className="w-auto h-full">
            <div className="flex flex-row gap-2 w-fit h-[13.18rem] overflow-hidden">
              <img src="/shoe-image.svg" className="w-full h-full object-cover" alt="regulan clean" />
              <img src="/shoe-image.svg" className="w-full h-full object-cover" alt="regulan clean" />
            </div>
          </div>
          <div className="flex flex-col justify-around w-fit h-full  p-3">
            <h2>Kamado Tanjiro</h2>
            <p className="italic">“Jujur tadinya ragu mau cuci Jordan 1 High Suede di luar, takut bahannya rontok. Tapi treatment-nya rapi banget, warna suede-nya tetep dapet dan gak kaku sama sekali. Top notch!”</p>
            <ul className="list-disc list-inside">
              <li>Rating: ⭐⭐⭐⭐⭐</li>
              <li>Service: Premium Clean</li>
              <li>Shoe: Air Jordan 1 High</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-4 w-full h-70 p-6.25 bg-neutral border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
          <div className="w-auto h-full">
            <div className="flex flex-row gap-2 w-fit h-[13.18rem] overflow-hidden">
              <img src="/shoe-image.svg" className="w-full h-full object-cover" alt="regulan clean" />
              <img src="/shoe-image.svg" className="w-full h-full object-cover" alt="regulan clean" />
            </div>
          </div>
          <div className="flex flex-col justify-around w-fit h-full  p-3">
            <h2>Fujitora</h2>
            <p className="italic">“Fitur pick-up nya ngebantu banget buat anak sibuk. Tinggal order lewat web, kurir datang jemput, 2 hari kemudian sepatu udah wangi siap dipakai ngantor lagi.”</p>
            <ul className="list-disc list-inside">
              <li>Rating: ⭐⭐⭐⭐⭐</li>
              <li>Service: Premium Clean</li>
              <li>Shoe: Adidas Samba</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
