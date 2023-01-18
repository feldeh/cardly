import Head from 'next/head';
import Navbar from '../../components/all/Navbar/Navbar';
import WaitlistLayout from '../../components/waitlist/WaitlistLayout/WaitlistLayout';

export const getServerSideProps = (context) => {
  return {
    props: {
      email: context.query.email || null,
    },
  };
};

const Waitlist = ({ email }) => {
  return (
    <>
      <Head>
        <title>Waitlist | Cardly</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale-1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar current="waitlist">
          <WaitlistLayout email={email} />
        </Navbar>
      </main>
    </>
  );
};

export default Waitlist;
