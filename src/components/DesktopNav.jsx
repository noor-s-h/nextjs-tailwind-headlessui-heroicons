import NavMenu from './NavMenu'
import { useState } from 'react'

export default function DesktopNav() {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return (
    <ul className="hidden md:flex">
      <NavMenu isOpen={isOpen} open={open} close={close} onClick={close} />
    </ul>
  )
}
