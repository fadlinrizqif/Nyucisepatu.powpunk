import React from "react"

type ButtonPros = {
  onClick: () => void
  children: React.ReactNode
  className?: string
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary"
  size?: string
  textSize?: string
}


export default function Button({
  onClick,
  children,
  className,
  type = "button",
  variant = "primary",
  size = "w-[16rem] h-auto",
  textSize = "text-[2rem]"
}: ButtonPros) {

  const variantButton = variant == "primary" ?
    "bg-primary text-neutral hover:bg-neutral hover:text-primary" : "bg-neutral text-primary hover:bg-primary hover:text-neutral"


  const style = `${size} ${textSize} ${variantButton}  font-sans font-black border-2 border-black shadow-[6.44px_6.44px_0px_0px_rgba(0, 0, 0, 0.25)]  ${className}`

  return (
    <button onClick={onClick} className={style} type={type}> {children}</button >
  )
}
