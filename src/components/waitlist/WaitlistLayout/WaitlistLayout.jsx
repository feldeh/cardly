import Image from 'next/image';
import WaitlistForm from './WaitlistForm/WaitlistForm';
import WaitlistHeader from './WaitlistHeader/WaitlistHeader';

const WaitlistLayout = ({ email }) => {
  return (
    <div className="relative pt-[25px] 2xl:pt-[100px] 2xl:pb-[0px]">
      <div className="absolute w-full h-full z-[-10]">
        <Image
          className="w-full bg-black"
          src="/assets/img/cardWaitlist.svg"
          fill
          alt="card"
        />
      </div>
      <div className="bg-black/60 w-full h-full absolute z-[-5]" />

      <div className="md:mx-[100px] lg:mx-[200px] macbook:mx-[450px] 2xl:mx-[600px]">
        <WaitlistHeader />
        <WaitlistForm email={email} />
      </div>
    </div>
  );
};

export default WaitlistLayout;
