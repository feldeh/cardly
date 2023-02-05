import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../../components/all/Navbar/Navbar';
import WaitlistLayout from '../../components/waitlist/WaitlistLayout/WaitlistLayout';

// export const getServerSideProps = (context) => {
//   return {
//     props: {
//       email: context.query.email || null,
//     },
//   };
// };

const Waitlist = () => {
  const router = useRouter();
  const { email } = router.query;
  return (
    <>
      <Head>
        <title>Waitlist | Cardly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
