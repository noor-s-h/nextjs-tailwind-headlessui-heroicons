import { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function Collapse({ title, children }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg p-2 hover:bg-gray-100">
            <span>{title}</span>
            <ChevronRightIcon
              className={`${
                open ? 'rotate-90 transform' : ''
              } h-5 w-5 transition duration-300`}
            />
          </Disclosure.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition duration-300 ease-out translate-y-0"
            enterFrom="transform opacity-0 translate-y-1"
            enterTo="transform opacity-100 translate-y-0"
            leave="transition duration-300 ease-out"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0 translate-y-1"
          >
            <Disclosure.Panel as="ul" className="text-gray-500">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
