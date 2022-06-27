import Logo from './Logo'
import DesktopNavMenu from './DesktopNavMenu'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <nav className="flex h-16 items-center justify-between border-b bg-white">
      <Logo />
      <MobileNav />
      <DesktopNavMenu />
    </nav>
  )
}
