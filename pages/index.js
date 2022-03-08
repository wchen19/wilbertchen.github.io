import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wilbert Chen&apos;s Personal Github Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/wchen19" target="_blank" rel='noreferrer'>Wilbert Chen&apos;s</a> Personal Github Page
        </h1>

      </main>
    </div>
  )
}
