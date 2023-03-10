import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/all/Navbar/Navbar';
import EnvoiLayout from '../../components/envoi/EnvoiLayout/EnvoiLayout';

const Envoi = () => {
  return (
    <>
      <Head>
        <title>Envoi | Cardly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div className="pb-20 2xl:pb-28">
          <EnvoiLayout />
        </div>
      </main>
    </>
  );
};

export default Envoi;
