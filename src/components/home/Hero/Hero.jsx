import BottomHeroImg from './BottomHeroImg/BottomHeroImg';
import EmailInput from './EmailInput/EmailInput';

const Hero = () => {
  return (
    <div className="pt-[160px] mb-[65px] bg-black text-white w-full">
      <div className="mx-9 mb-[42px]">
        <p className="text-3xl">
          Une Solution Virtuelle Complète Conçue Pour Votre Entreprise
        </p>
        <p className="mt-[42px]">
          Une solution complète Une solution complète Une solution complète Une
          solution complète
        </p>
      </div>
      <EmailInput />
      <div className="mt-44">
        <BottomHeroImg />
      </div>
    </div>
  );
};

export default Hero;
