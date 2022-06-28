import Link from 'next/link'
import { navdata } from '@/data/navdata'
import Collapse from './Collapse'
import SubMenu from './SubMenu'
import DropDown from './DropDown'
import useMediaQuery from '@/lib/useMediaQuery'

export default function NavMenu({ onClick, isOpen, open, close }) {
  const isDesktop = useMediaQuery('(min-width: 786px)')
  return (
    <>
      {navdata.map(({ label, href, children }, index) =>
        children ? (
          isDesktop ? (
            <DropDown
              key={index}
              label={label}
              isOpen={isOpen}
              open={open}
              close={close}
            >
              <SubMenu data={children} onClick={onClick} />
            </DropDown>
          ) : (
            <Collapse title={label}>
              <SubMenu data={children} onClick={onClick} />
            </Collapse>
          )
        ) : (
          <li key={index} className="md:px-2">
            <Link href={href}>
              <a
                className="flex flex-1 rounded-lg p-2 hover:bg-gray-100"
                onClick={onClick}
              >
                {label}
                {isDesktop ? 'hi' : 'hello'}
              </a>
            </Link>
          </li>
        )
      )}
    </>
  )
}
