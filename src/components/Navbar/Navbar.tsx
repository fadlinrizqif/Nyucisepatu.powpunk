
const links = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "Service",
    href: "",
  },
  {
    name: "About",
    href: "",
  },
  {
    name: "Contact",
    href: "",
  },
]


export default function Navbar() {
  return (
    <header className="sticky top-2 z-50 flex flex-row justify-between items-center w-full h-auto  px-2 bg-primary ">
      <div className="p-1">
        <a href="/"><img src="/Logo.svg" alt="" /></a>
      </div>
      <nav className=" text-white text-[2.2rem] font-mono font-bold">
        <ul className="flex flex-row gap-10">
          {links.map((link) => {
            return (
              <li key={link.name}><a href={link.href}>{link.name}</a></li>
            )
          })}
        </ul>
      </nav>
    </header>
  );
}
