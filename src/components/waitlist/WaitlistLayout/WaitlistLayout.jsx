import Image from 'next/image';
import WaitlistForm from './WaitlistForm/WaitlistForm';
import WaitlistHeader from './WaitlistHeader/WaitlistHeader';

const WaitlistLayout = ({ email }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full z-[-10] top-[85px]">
        <Image
          className="w-full bg-black"
          src="/assets/img/cardWaitlist.svg"
          fill
          alt="card"
        />
      </div>
      <div className="bg-black/60 w-full h-full absolute z-[-5]" />

      <WaitlistHeader />
      <WaitlistForm email={email} />
    </div>
  );
};

export default WaitlistLayout;
