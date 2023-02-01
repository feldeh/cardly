import Image from 'next/image';
import { decouvrir, rounded, threeCards } from './svg';

const BottomHeroImg = () => {
  return (
    <div className="relative">
      <div className="absoluteCenter w-[384px] h-[310px] top-[-115px] lg:w-[1200px] lg:h-[600px] lg:top-[-115px]">
        <Image src="/assets/img/threeCards.svg" alt="cards" fill />
      </div>
      <div className="relative z-10 lg:hidden">
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
