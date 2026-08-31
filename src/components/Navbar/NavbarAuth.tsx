import { FaArrowLeft } from "react-icons/fa";


export default function NavbarAuth() {
  return (
    <header className="relative z-50 flex flex-row justify-start items-center w-full h-auto  px-2 bg-neutral">
      <div className="flex flex-row gap-2 w-auto h-full text-primary text-2xl">
        <a href="/" className="flex flex-row gap-2 items-center">
          <FaArrowLeft />
          <p>Back to Landing page</p>
        </a>
      </div>
    </header>
  )
}
