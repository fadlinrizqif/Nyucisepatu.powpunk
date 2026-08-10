import { getProducts } from "@/services/productService";

export default async function Service() {

  const [services, err] = await getProducts({
    category: "service"
  })

  if (err) {
    console.log(err.message)
  } else {
    console.log(services.data[1].features)
  }

  return (
    <section className="w-full h-auto bg-primary pt-7 pb-10">
      <div className="w-full h-auto mb-7">
        <h1 className="font-sans text-[3rem] text-center text-white font-black">OUR SERVICE</h1>
      </div>
      <div className="w-full h-auto flex gap-7.5 px-7.5">
        {err ?
          <div className="w-full h-auto bg-neutral border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
            <h2 className="font-sans text-[2rem] text-primary-light text-center font-black my-1">
              {err.message}
            </h2>
          </div>

          :
          services.data.map((service) => {
            return (
              <div key={service.id} className="w-auto h-auto p-6.25 bg-neutral border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]">
                <div className="w-fit h-[13.18rem] overflow-hidden">
                  <img src="/shoe-image.svg" className="w-full h-full object-cover" alt="regulan clean" />
                </div>
                <div className="w-fit text-left">
                  <h2 className="font-sans text-[2rem] text-primary-light font-black my-1">{service.name}</h2>
                  <h3 className="font-sans text-[1.25rem] text-black font-black mb-2">Rp.{service.price}</h3>
                  <p>{service.description}</p>
                  <ul className="list-disc list-inside">
                    <li>Coverage: {service.features.coverage}</li>
                    <li>Material: {service.features.material}</li>
                    <li>Bonus: {service.features.bonus}</li>
                    <li>Estimasi: {service.features.estimasi}</li>
                  </ul>
                </div>
                <div className="w-full h-auto flex justify-center mt-3">

                  <button className=" w-[16rem] h-auto bg-primary text-[2rem] text-white font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]" type="button">Clean Now</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </section >
  );
}
