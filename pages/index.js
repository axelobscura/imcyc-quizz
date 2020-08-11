import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CUESTIONARIO IMCYC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>BIENVENIDO</p>
        <h1>CUESTIONARIO IMCYC</h1>
        <a className="btn">
          <Link href="/quiz">
            <a>INGRESAR AL CUESTIONARIO</a>
          </Link>
        </a>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
