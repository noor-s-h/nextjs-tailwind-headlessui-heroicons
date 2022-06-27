export default function MobileNavMenu({ onClick }) {
  return (
    <ul className="absolute inset-0 top-16 bg-red-100 p-2 md:hidden">
      <li className="cursor-pointer " onClick={onClick}>Mobilelink</li>
    </ul>
  )
}
