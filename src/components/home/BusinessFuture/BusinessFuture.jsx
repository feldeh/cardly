import Image from 'next/image';
import GradientLink from '../../shared/GradientLink/GradientLink';

const BusinessFuture = () => {
  return (
    //   <div className="bg-black mt-[120px] text-white w-full relative lg:px-[72px] lg:pb-[300px]">
    //   <div className="ml-5 mr-[130px] pt-8 text-xl leading-8 smartphone:w-1/2 smartphone:leading-[40px] smartphone:pt-[70px] sm:w-3/5 sm:text-[30px] sm:leading-[50px] lg:pt-48 lg:text-[50px] lg:leading-[65px] lg:w-3/6 lg:tracking-wide xl:pt-48 xl:text-[60px] xl:leading-[80px] xl:w-3/6 xl:tracking-wide">
    //     Meet Your Business Future Starting From Now With Cardly
    //   </div>
    //   <div className=" h-[260px] w-[270px] right-0 top-[38px] absolute smartphone:top-[20px] sm:h-[300px] sm:w-[400px] lg:h-[600px] lg:w-[689px] lg:right-[40px] lg:top-[80px] xl:h-[700px] xl:w-[804px] xl:right-[70px] xl:top-[10px]">
    //     <Image src="/assets/img/card.svg" fill alt="your card" />
    //   </div>

    //   <div className="mt-[120px] pb-8 smartphone:mt-[80px] smartphone:pb-16 lg:mt-[80px] lg:float-left lg:ml-5">
    //     <GradientLink href="/waitlist" text="rejoindre la liste d'attente" />
    //   </div>
    // </div>
    <div className="bg-black mt-[120px] text-white w-full relative lg:px-[72px] lg:pb-[300px] xl:min-h-[748px]">
      <div className="pt-8 ml-5 mr-[130px] text-xl leading-8 smartphone:w-5/12 smartphone:leading-[40px] smartphone:pt-[70px] sm:ml-12 sm:w-7/12 sm:text-[30px] sm:leading-[50px] lg:ml-0 lg:pt-48 lg:text-[50px] lg:leading-[65px] lg:w-3/6 lg:tracking-wide xl:pt-32 xl:text-[60px] xl:leading-[80px] xl:w-3/6 xl:max-w-[800px] xl:tracking-wide">
        Meet Your Business Future Starting From Now With Cardly
      </div>
      <div className="absolute h-[260px] w-[270px] right-0 top-[38px] smartphone:top-[30px] min-[570px]:right-[50px] sm:right-0 sm:h-[300px] sm:w-[400px] lg:h-[600px] lg:w-[689px] lg:right-[-40px] lg:top-[80px] xl:h-[700px] xl:w-[804px] xl:right-[70px] xl:top-[10px] 2xl:right-[100px] min-[1800px]:right-[150px]">
        <Image src="/assets/img/card.svg" fill alt="your card" />
      </div>

      <div className="mt-[120px] pb-8 smartphone:mt-[80px] smartphone:pb-16 lg:mt-[80px] lg:float-left lg:ml-5">
        <GradientLink href="/waitlist" text="rejoindre la liste d'attente" />
      </div>
    </div>
  );
};

export default BusinessFuture;
