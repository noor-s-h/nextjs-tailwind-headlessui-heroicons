import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import HamBurger from './HamBurger'
import NavMenu from './NavMenu'

export default function MobileNav() {
  return (
    <Popover as={Fragment}>
      {({ open, close }) => (
        <>
          <Popover.Button className="h-5 w-5 md:hidden">
            <span className="sr-only">Toggle Navigation</span>
            <HamBurger open={open} />
          </Popover.Button>
          <Transition
            show={open && open}
            as={Fragment}
            enter="transition duration-300 ease-out translate-y-0"
            enterFrom="transform opacity-0 translate-y-1"
            enterTo="transform opacity-100 translate-y-0"
            leave="transition duration-300 ease-out"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0 translate-y-1"
          >
            <Popover.Panel
              as="ul"
              className="fixed inset-0 top-16 bg-white p-2 md:hidden"
            >
              <NavMenu onClick={() => close()} />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
