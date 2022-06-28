import Link from 'next/link'

export default function SubMenu({ data, onClick }) {
  return (
    <>
      {data.map(({ label, href }, index) => (
        <li key={index}>
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
