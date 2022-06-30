
import { useState } from 'react'
import { Logo } from './Logo'
import { MenuDown } from './MenuDown'

export function Header() {
  const [isScreenMd, setIsScreenMd] = useState(false)

  window.addEventListener('resize', ()=>{
    if(window.screen.width <= 767){
      setIsScreenMd(true)
    }else{
      setIsScreenMd(false)
    }
  })

  return (
    <header className="col-span-12 w-full py-5 flex items-center justify-between px-4 md:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      {
        isScreenMd ? <MenuDown/> : ""
      }
    </header>
  )
}
