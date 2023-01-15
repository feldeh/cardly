import BottomHeroImg from './BottomHeroImg/BottomHeroImg';
import EmailInput from './EmailInput/EmailInput';
import HeroHeader from './HeroHeader/HeroHeader';

const Hero = () => {
  return (
    <div className="pt-[160px] mb-[65px] bg-black text-white w-full">
      <HeroHeader />
      <EmailInput />
      <div className="flex flex-row mx-9">
        <div className="space-y-[17px]">
          <p className="text-xl tracking-widest">500k+</p>
          <p className="text-base leading-[18px]">
            Personnes se sont déjà enregistrées
          </p>
        </div>
        <div className="space-y-[17px] mx-[27px]">
          <p className="text-xl tracking-widest">80%+&#8288;€</p>
          <p className="text-base leading-[18px]">
            D’économies réalisées par inscrit
          </p>
        </div>
        <div className="space-y-[17px]">
          <p className="text-xl tracking-widest">20M+</p>
          <p className="text-base leading-[18px]">
            Nombres de cartes papier remplacées
          </p>
        </div>
      </div>
      <div className="mt-52">
        <BottomHeroImg />
      </div>
    </div>
  );
};

export default Hero;
