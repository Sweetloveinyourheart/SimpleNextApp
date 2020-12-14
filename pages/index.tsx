import Head from 'next/head'
import { Header } from '../components/Header/header'
import { HomePage } from '../components/Home/home'
import '../styles/globals.scss'

export default function Home() {
    return (
        <main>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Modak&family=Pacifico&family=Satisfy&display=swap"
                    rel="stylesheet" />
            </Head>
            <Header />
            <HomePage />
        </main>
    )
}
