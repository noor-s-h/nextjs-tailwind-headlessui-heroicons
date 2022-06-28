import 'focus-visible'
import '@/styles/tailwind.css'
import Header from '@/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="container mx-auto max-w-5xl px-2">
        <Header />
      </div>
      <Component {...pageProps} />
    </>
  )
}
