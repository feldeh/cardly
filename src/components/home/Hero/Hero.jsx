import BottomHeroImg from './BottomHeroImg/BottomHeroImg';
import EmailInput from './EmailInput/EmailInput';
import HeroHeader from './HeroHeader/HeroHeader';

const Hero = () => {
  return (
    <div className="pt-[130px] mb-[65px] lg:pb-[185px] bg-black text-white w-full mx-auto">
      <HeroHeader />
      <EmailInput />

      <div className="mt-[185px]">
        <BottomHeroImg />
      </div>
    </div>
  );
};

export default Hero;
