import Image from 'next/image';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';

const HowTo = () => {
  return (
    <div className="mb-32">
      <SectionTitle
        title="How To"
        id="howto"
        subTitle="Comment fonctionne Cardly"
        description="Cardly is more of a mindset than technology or industry, our product is
        designed by tech specialist to solve these problems. It will save you
        time, money and other problems."
        number="02"
        flex
      />
      <div className="mt-[50px] bg-[#E8E8E7] relative lg:mx-[50px] lg:rounded-[55px] lg:pb-[130px] xl:mx-[300px] 2xl:mx-[500px]">
        <div className="text-center text-[28px] leading-8 pt-10 pb-[150px] lg:text-[60px] lg:leading-[60px] lg:pt-16">
          <p className="text-black font-ABeeZeeItalic">Comment fonctionne</p>
          <p className="mx-auto text-transparent bg-clip-text purpleGradient w-fit">
            Cardly
          </p>
        </div>
        <div className="absoluteCenter h-[81px] w-[81px] lg:hidden">
          <Image src="/assets/img/play.svg" fill alt="play" />
        </div>
        <div className="hidden absoluteCenter h-[200px] w-[200px] top-[230px] lg:block">
          <Image src="/assets/img/playLarge.svg" fill alt="play" />
        </div>
      </div>
    </div>
  );
};

export default HowTo;
