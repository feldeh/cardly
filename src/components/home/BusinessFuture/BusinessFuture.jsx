import Image from 'next/image';
import GradientLink from '../../shared/GradientLink/GradientLink';

const BusinessFuture = () => {
  return (
    <div className="bg-black mt-[120px] text-white w-full relative">
      <div className="ml-5 mr-[130px] pt-8 text-xl leading-8">
        Meet Your Business Future Starting From Now With Cardly
      </div>
      <div className=" h-[260px] w-[270px] right-0 top-[38px] absolute">
        <Image src="/assets/img/card.svg" fill alt="your card" />
      </div>
      <div className="mt-[120px] pb-8">
        <GradientLink href="/waitlist" />
      </div>
    </div>
  );
};

export default BusinessFuture;
