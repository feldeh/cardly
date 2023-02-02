import Head from 'next/head';
import Navbar from '../components/all/Navbar/Navbar';
import About from '../components/home/About/About';
import BusinessFuture from '../components/home/BusinessFuture/BusinessFuture';
import Chiffres from '../components/home/Chiffres/Chiffres';
import Features from '../components/home/Features/Features';
import Hero from '../components/home/Hero/Hero';
import HowTo from '../components/home/HowTo/HowTo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Navbar>
          <Hero />
          <Features />
          <HowTo />
          <About />
          <BusinessFuture />
          <Chiffres />
        </Navbar>
      </main>
    </>
  );
}
