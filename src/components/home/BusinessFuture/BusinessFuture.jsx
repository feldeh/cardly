import Image from 'next/image';
import GradientLink from '../../shared/GradientLink/GradientLink';

const BusinessFuture = () => {
  return (
    <div className="bg-black relative h-[385px] mt-[120px] text-white">
      <div className="ml-5 mr-[130px] pt-8 text-xl leading-8">
        Meet Your Business Future Starting From Now With Cardy
      </div>
      <div className="absolute h-[260px] w-[270px] right-[-20px] top-[30px]">
        <Image src="/assets/img/card.svg" fill alt="your card" />
      </div>
      <GradientLink href="/" positionY="top-[315px]" />
    </div>
  );
};

export default BusinessFuture;
