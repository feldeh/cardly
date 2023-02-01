import Image from 'next/image';
import GradientLink from '../../shared/GradientLink/GradientLink';

const BusinessFuture = () => {
  return (
    <div className="bg-black mt-[120px] text-white w-full relative lg:px-[72px] lg:pb-[300px]">
      <div className="ml-5 mr-[130px] pt-8 lg:pt-48 text-xl lg:text-[60px] leading-8 lg:leading-[80px] lg:w-3/6 lg:tracking-wide">
        Meet Your Business Future Starting From Now With Cardly
      </div>
      <div className=" h-[260px] w-[270px] right-0 top-[38px] absolute lg:hidden">
        <Image src="/assets/img/card.svg" fill alt="your card" />
      </div>
      <div className="hidden lg:block h-[700px] w-[804px] right-[70px] top-[10px] absolute">
        <Image src="/assets/img/card.svg" fill alt="your card" />
      </div>
      <div className="mt-[120px] lg:mt-[80px] pb-8 lg:float-left">
        <GradientLink href="/waitlist" text="rejoindre la liste d'attente" />
      </div>
    </div>
  );
};

export default BusinessFuture;
