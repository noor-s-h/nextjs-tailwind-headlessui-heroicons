import Logo from './Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <nav className="flex h-16 items-center justify-between border-b bg-white p-2">
      <Logo />
      <MobileNav />
      <DesktopNav />
    </nav>
  )
}
