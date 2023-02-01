import BottomHeroImg from "./BottomHeroImg/BottomHeroImg";
import EmailInput from "./EmailInput/EmailInput";
import HeroHeader from "./HeroHeader/HeroHeader";

const Hero = () => {
  return (
    <div className='pt-[130px] mb-[65px] bg-black text-white w-full mx-auto'>
      <HeroHeader />
      <EmailInput />
      {/* <div className='flex flex-row justify-around '>
        <div className='space-y-[17px] w-1/4'>
          <p className=' text-3xl tracking-widest font-bold text-transparent bg-clip-text purpleGradient w-fit'>
            +500k
          </p>
          <p className='text-base leading-[18px]'>
            Personnes se sont déjà enregistrées
          </p>
        </div>
        <div className='space-y-[17px]  w-1/4 '>
          <p className='text-3xl tracking-widest font-bold text-transparent bg-clip-text purpleGradient w-fit'>
            +80%
          </p>
          <p className='text-base leading-[18px]'>
            D’économies réalisées par inscrit
          </p>
        </div>
        <div className='space-y-[17px]  w-1/4'>
          <p className='text-3xl tracking-widest font-bold text-transparent bg-clip-text purpleGradient w-fit'>
            +20M
          </p>
          <p className='text-base leading-[18px]'>
            Nombres de cartes papier remplacées
          </p>
        </div>
      </div> */}
      <div className='mt-48'>
        <BottomHeroImg />
      </div>
    </div>
  );
};

export default Hero;
