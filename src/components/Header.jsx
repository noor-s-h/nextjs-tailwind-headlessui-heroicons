import Logo from "./Logo";
import HamBurger from './HamBurger'
import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'

export default function Header() {
  return (
    <nav className="flex items-center justify-between h-16">
      <Logo />
      <HamBurger />
      <MobileNavigation />
      <DesktopNavigation />
    </nav>
  )
}
