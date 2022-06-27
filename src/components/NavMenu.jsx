import Link from 'next/link'
import { navdata } from '@/data/navdata'
import Collapse from './Collapse'
import Dropdown from './Dropdown'

export default function MobileNavMenu({ onClick }) {
  return (
    <>
      {navdata.map(({ label, href, children }, index) =>
        children ? (
          <Collapse title={label}>
            <Dropdown data={children} onClick={onClick} />
          </Collapse>
        ) : (
          <li key={index} className="md:px-2">
            <Link href={href}>
              <a
                className="flex flex-1 rounded-lg p-2 hover:bg-gray-100"
                onClick={onClick}
              >
                {label}
              </a>
            </Link>
          </li>
        )
      )}
    </>
  )
}
