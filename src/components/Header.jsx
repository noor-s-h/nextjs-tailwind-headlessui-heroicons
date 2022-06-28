import Logo from './Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import useMediaQuery from '@/lib/useMediaQuery'

export default function Header() {
  const isDesktop = useMediaQuery('(min-width: 786px)')
  
  return (
    <nav className="flex h-16 items-center justify-between border-b bg-white p-2">
      <Logo />
      {isDesktop ? <DesktopNav /> : <MobileNav />}
    </nav>
  )
}
