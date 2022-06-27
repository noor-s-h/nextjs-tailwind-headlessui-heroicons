import Link from 'next/link'

export default function Dropdown({ data, onClick }) {
  return (
    <>
      {data.map(({ label, href }, index) => (
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
      ))}
    </>
  )
}
