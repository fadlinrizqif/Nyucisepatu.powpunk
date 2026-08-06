
export default function Contact() {
  return (
    <section className="w-full bg-neutral pt-10 pb-10">
      <div className="w-full h-auto mb-2">
        <h1 className="font-sans text-[3rem] text-center text-primary-light font-black">Contact Us</h1>
      </div>
      <div className="flex flex-row w-full h-auto ">
        <div className="w-2xl h-auto ">
          <form action="" method="POST" className="p-5 font-sans text-[1.2rem]">
            <div className="flex flex-col gap-2 pb-4">
              <label htmlFor="name">Full Name</label>
              <input className="border-2" type="text" id="name" name="name" placeholder="ex: John Doe" required />
            </div>
            <div className="flex flex-col gap-2 pb-4">
              <label htmlFor="email">Email</label>
              <input className="border-2" type="email" id="email" name="email" placeholder="ex: john@doe.com" required />
            </div>
            <div className="flex flex-col gap-2 pb-4">
              <label htmlFor="message">Message</label>
              <textarea className="border-2" name="message" id="message" placeholder="ex: How are your?" required></textarea>
            </div>
            <button className=" w-[16rem] h-auto bg-primary text-[2rem] text-white font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)]" type="submit">Submit</button>
          </form>
        </div>
        <div className="flex flex-col gap-4 w-auto h-auto p-5">
          <div>
            <h3>Address:</h3>
            <p>Kampung Ode, Desa Kuri, Kecamatan Hakumai, Provinsi Wano</p>
          </div>
          <div>
            <h3>Phone:</h3>
            <p>08xxxxxxxxxxxx</p>
          </div>
          <div>
            <h3>Email:</h3>
            <p>nyucisepatu@powpunk.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
