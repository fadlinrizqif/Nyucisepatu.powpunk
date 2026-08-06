
export default function Footer() {
  return (
    <footer className="w-full h-auto bg-primary">
      <div className="w-full h-auto grid grid-cols-3 grid-rows-1 gap-4  p-4 text-neutral">
        <div className="flex flex-col items-center  gap-4">
          <a href="/">
            <img src="/Logo.svg" alt="Logo NyuciSepatu" />
          </a>
        </div>
        <div className="flex flex-col text-center ">
          <h2 className="font-bold">Bantuan</h2>
          <a href="">Tentang Kami</a>
          <a href="">Lacak Sepatu</a>
          <a href="">FAQ</a>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="font-bold">Menu</h2>
          <a href="">Home</a>
          <a href="">Service</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>

      </div>

      <p className="text-center text-primary bg-neutral">© 2026 NyuciSepatu.powpunk</p>
    </footer>
  );
}
