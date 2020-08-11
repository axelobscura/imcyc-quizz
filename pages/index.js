import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Bienvenido al IMCYC | CUESTIONARIO">
        <p>BIENVENIDO</p>
        <h2>Instituto Mexicano del Cemento y del Concreto A.C.</h2>
        <h3>COMPARTIR EL CONOCIMIENTO</h3>
        <h1>ENCUESTA DE SATISFACCIÓN</h1>
        <Link href="/quiz">
          <a className="btn">INGRESAR AL CUESTIONARIO</a>
        </Link>
    </Layout>
  )
}
