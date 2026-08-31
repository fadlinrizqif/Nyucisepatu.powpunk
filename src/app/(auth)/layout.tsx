import Footer from "@/components/Footer/Footer";
import NavbarAuth from "@/components/Navbar/NavbarAuth";
import React from "react";


export default function authLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <NavbarAuth />
      <main>{children}</main>
    </>
  )
}
