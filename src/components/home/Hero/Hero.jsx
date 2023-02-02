import BottomHeroImg from './BottomHeroImg/BottomHeroImg';
import EmailInput from './EmailInput/EmailInput';
import HeroHeader from './HeroHeader/HeroHeader';

const Hero = () => {
  return (
    <div className="pt-[130px]  mb-[65px] md:pb-[1px] lg:pb-[78px] xl:pb-[185px] bg-black text-white w-full mx-auto">
      <div className="md:pb-[100px] lg:pb-0 xl:pb-[0px]">
        <HeroHeader />
        <div className="md:float-right md:mt-5 lg:mt-[-50px] xl:mt-5 xl:float-none">
          <EmailInput />
        </div>
      </div>
      <div className="mt-[185px]">
        <BottomHeroImg />
      </div>
    </div>
  );
};

export default Hero;
