import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
        </Head>
        <div className={styles.container}>
            <main className={styles.main}>
                <Link href="/">
                    <img src="http://www.imcyc.com/wp-content/uploads/2017/07/logo_200.png" title="" alt="" className="logo" />
                </Link>
                {children}
            </main>
        </div>
        <footer className={styles.footer}>
            @2020. Instituto Mexicano del Cemento y del Concreto A.C.
        </footer>
    </div>
);

export default Layout;