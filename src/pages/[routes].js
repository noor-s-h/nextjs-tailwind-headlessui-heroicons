import { useRouter } from 'next/router'

export default function Routes() {
  const router = useRouter()
  const { routes } = router.query

  return (
    <h1 className="container mx-auto max-w-5xl px-4 pt-2 text-gray-500">{routes}</h1>
  )
}
