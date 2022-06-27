import Accordion from '@/components/Accordion'
import Header from '@/components/Header'

export default function Home() {
  return (
    <h1 className="container mx-auto max-w-5xl px-2 text-gray-500">
      <Header />
      <Accordion />
    </h1>
  )
}
