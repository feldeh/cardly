import BottomHeroImg from './BottomHeroImg/BottomHeroImg';
import EmailInput from './EmailInput/EmailInput';
import HeroHeader from './HeroHeader/HeroHeader';

const Hero = () => {
  return (
    <div className="pt-[150px] lg:pt-[190px] xl:pt-[190px] mb-[65px] smartphone:pb-[5px] sm:pb-[70px] md:pb-[1px] lg:pb-[115px] largeScreen:pb-[250px] xl:pb-[350px] bg-black text-white w-full">
      <div className="md:pb-[100px] lg:pb-0">
        <HeroHeader />
        <div className="md:float-right md:mt-5 md:mr-[60px] lg:mt-[-50px] xl:mt-[10px] largeScreen:float-none ">
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
