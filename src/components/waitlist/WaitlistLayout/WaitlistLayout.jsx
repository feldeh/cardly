import Image from 'next/image';
import WaitlistForm from '../WaitlistForm/WaitlistForm';
import WaitlistHeader from '../WaitlistHeader/WaitlistHeader';

const WaitlistLayout = ({ email }) => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Image
        className="absolute z-[-10] bg-black w-full overflow-x-hidden"
        src="/assets/img/cardWaitlist.svg"
        fill
        alt="card"
      />
      <div className="bg-black/60 w-full h-full absolute z-[-5]" />

      <WaitlistHeader />
      <WaitlistForm email={email} />
    </div>
  );
};

export default WaitlistLayout;
