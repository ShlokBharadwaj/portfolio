import Head from 'next/head'
import Terminal from '../components/Terminal'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shlok Bharadwaj | Portfolio</title>
        <meta name="description" content="Simple Portfolio made in Terminal Style with Next.js and Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Terminal />
    </div>
  )
}
