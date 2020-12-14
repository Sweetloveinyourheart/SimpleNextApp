import * as React from 'react';
import Head from 'next/head'
import { Header } from '../components/Header/header';
import AboutComponent from '../components/About/about'
import Footer from '../components/Footer/footer';

export interface AboutProps {
    any
}
 
const About: React.SFC<AboutProps> = () => {
    return ( 
        <main>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Modak&family=Pacifico&family=Satisfy&display=swap"
                    rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet" />
                <link rel="stylesheet" type="text/css"  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <Header status={"header-sticky"}/>
            <AboutComponent />
            <Footer />
        </main>
     );
}
 
export default About;