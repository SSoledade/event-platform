import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { Sidebar } from './Sidebar'

interface MenuDownProps {
  isMd?: boolean
}

export function MenuDown(props: MenuDownProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="">
      <button
        onClick={() => {
          if (isVisible == false) {
            setIsVisible(!isVisible)
          } else {
            setIsVisible(!isVisible)
          }
        }}
      >
        {isVisible ? <X size={32} /> : <List size={32} />}
      </button>
      <Sidebar isMenu={true} visible={isVisible}/>
    </div>
  )
}
