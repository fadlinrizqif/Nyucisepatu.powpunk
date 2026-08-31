import Hero from "../components/sections/Hero"
import Service from "../components/sections/Service"
import Process from "../components/sections/Process"
import Testimony from "../components/sections/Testimony"
import Contact from "../components/sections/Contact"
import Navbar from "@/components/Navbar/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Service />
        <Process />
        <Testimony />
        <Contact />
      </main>
    </>
  );
}
