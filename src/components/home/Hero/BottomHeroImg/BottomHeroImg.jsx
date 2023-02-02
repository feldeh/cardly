import Image from 'next/image';
import { decouvrir, rounded, threeCards } from './svg';

const BottomHeroImg = () => {
  return (
    <div className="relative pointer-events-none select-none ">
      <div className="absoluteCenter w-[384px] h-[310px] top-[-115px] md:w-[550px] md:h-[462px] md:top-[-230px] md:left-[300px] lg:w-[900px] lg:h-[450px] lg:top-[-110px] lg:left-[450px] xl:w-[1200px] xl:h-[600px] xl:top-[-115px] xl:left-1/2">
        <Image src="/assets/img/threeCards.svg" alt="cards" fill />
      </div>
      <div className="relative z-10 min-[392px]:hidden">
        <div className="absoluteCenter left-[38%] top-[-60px] w-[94px] h-[94px] animate-rotation-slow">
          <Image src="/assets/img/decouvrir.svg" alt="decouvrir" fill />
        </div>
        <div className="w-full h-[40px]">
          <Image src="/assets/img/roundedVector.svg" alt="round" fill />
        </div>
      </div>
    </div>
  );
};

export default BottomHeroImg;
