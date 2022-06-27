import { MenuIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/solid'

export default function HamBurger({ open }) {
  return <>{open ? <XIcon /> : <MenuIcon />}</>
}
