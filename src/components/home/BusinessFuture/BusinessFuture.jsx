import Image from 'next/image';
import GradientLink from '../../shared/GradientLink/GradientLink';

const BusinessFuture = () => {
  return (
    <div className="bg-black mt-[120px] text-white w-full relative lg:px-[72px] lg:pb-[300px]">
      <div className="ml-5 mr-[130px] pt-8 text-xl leading-8 lg:pt-48 lg:text-[50px] lg:leading-[65px] lg:w-3/6 lg:tracking-wide xl:pt-48 xl:text-[60px] xl:leading-[80px] xl:w-3/6 xl:tracking-wide">
        Meet Your Business Future Starting From Now With Cardly
      </div>
      <div className=" h-[260px] w-[270px] right-0 top-[38px] absolute lg:h-[600px] lg:w-[689px] lg:right-[40px] lg:top-[80px] xl:h-[700px] xl:w-[804px] xl:right-[70px] xl:top-[10px]">
        <Image src="/assets/img/card.svg" fill alt="your card" />
      </div>

      <div className="mt-[120px] pb-8 lg:mt-[80px] lg:float-left lg:ml-5">
        <GradientLink href="/waitlist" text="rejoindre la liste d'attente" />
      </div>
    </div>
  );
};

export default BusinessFuture;
