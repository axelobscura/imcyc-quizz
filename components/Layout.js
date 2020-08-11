import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <footer className={styles.footer}>
            @2020. Instituto Mexicano del Cemento y del Concreto A.C.
        </footer>
    </div>
);

export default Layout;