import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function DropDown({ isOpen, open, close, label, children }) {
  return (
    <Popover>
      <Popover.Button
        onMouseEnter={open}
        onMouseLeave={close}
        className="flex w-full items-center justify-between rounded-lg p-2 hover:bg-gray-100"
      >
        <span>{label}</span>
        <ChevronDownIcon className="h-5 w-5 ml-1" />
      </Popover.Button>
      <Transition
        show={isOpen}
        onMouseEnter={open}
        onMouseLeave={close}
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
          className="absolute top-12 min-w-[10rem] rounded-lg border bg-white p-2 text-gray-500"
        >
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
