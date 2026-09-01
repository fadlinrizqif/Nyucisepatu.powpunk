import Link from "next/link";
import React from "react";

type LinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
  size?: string
  textSize?: string
}

export default function LinkButton({
  href,
  children,
  className,
  variant = "primary",
  size = "w-32 h-auto",
  textSize = "text-[1.2rem]"
}: LinkProps) {

  const variantLink = variant == "primary" ?
    "bg-primary text-neutral hover:bg-neutral hover:text-primary" : "bg-neutral text-primary hover:bg-primary hover:text-neutral"

  const style = `${size} ${textSize} ${variantLink} font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0,0,0,0.25)] flex justify-center items-center ${className}`

  return (

    <Link href={href} className={style}>{children}</Link>
  )
}
