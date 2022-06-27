import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/solid'

import { faqdata } from '@/data/faqdata'
import { Fragment } from 'react'

export default function Accordion() {
  return (
    <div className="mx-auto max-w-md">
      {faqdata.map(({ question, answers }, index) => (
        <Disclosure key={index}>
          {({ open, close }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 hover:bg-gray-100">
                <span>{question}</span>
                <ChevronRightIcon
                  className={`${
                    open ? 'rotate-90 transform' : ''
                  } h-5 w-5 transition`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                as={Fragment}
                enter="transition duration-300 ease-out translate-y-0"
                enterFrom="transform opacity-0 translate-y-0.5"
                enterTo="transform opacity-100 translate-y-0"
                leave="transition duration-300 ease-out"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0 translate-y-0.5"
              >
                <Disclosure.Panel className="flex flex-col gap-2 p-2">
                  {answers &&
                    answers.map(({ icon, label }, index) => (
                      <li
                        className="flex cursor-pointer list-none items-center rounded-lg p-2 hover:bg-gray-100"
                        key={index}
                        onClick={() => close()}
                      >
                        {icon}
                        {label}
                      </li>
                    ))}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
