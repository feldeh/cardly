import Image from 'next/image';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';

const HowTo = () => {
  return (
    <div className="mb-32">
      <SectionTitle
        title="How To"
        subTitle="Comment fonctionne Cardly"
        description="Cardly is more of a mindset than technology or industry, our product is
        designed by tech specialist to solve these problems. It will save you
        time, money and other problems."
        number="02"
      />
      <div className="mt-[50px] bg-[#E8E8E7] relative">
        <div className="text-center text-[28px] font-ABeeZeeItalic leading-8 pt-10 pb-[150px]">
          <p className="text-black">Comment fonctionne</p>
          <p className="text-transparent bg-clip-text purpleGradient w-fit mx-auto">
            Cardly
          </p>
        </div>
        <div className="absoluteCenter">
          <Image src="/assets/img/play.svg" height={81} width={81} alt="play" />
        </div>
      </div>
    </div>
  );
};

export default HowTo;
