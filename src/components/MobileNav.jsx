import { Popover } from '@headlessui/react'
import HamBurger from './HamBurger'
import MobileNavMenu from './MobileNavMenu'

export default function MobileNav() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button>
            <HamBurger open={open} />
          </Popover.Button>
          <Popover.Panel>
            <MobileNavMenu onClick={() => close()} />
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}
