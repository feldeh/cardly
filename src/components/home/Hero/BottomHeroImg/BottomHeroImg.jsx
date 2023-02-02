import Image from 'next/image';

const BottomHeroImg = () => {
  return (
    <div className="relative pointer-events-none select-none ">
      <div className="absoluteCenter w-[384px] h-[310px] top-[-115px] smartphone:w-[384px] smartphone:h-[240px] smartphone:top-[-115px] sm:w-[550px] sm:h-[300px] sm:top-[-80px] md:w-[550px] md:h-[462px] md:top-[-230px] md:left-[300px] lg:w-[900px] lg:h-[450px] lg:top-[-110px] lg:left-[450px] largeScreen:w-[1000px] largeScreen:h-[500px] largeScreen:top-0 largeScreen:left-[47%] xl:w-[1200px] xl:h-[600px] xl:top-[50px]">
        <Image src="/assets/img/threeCards.svg" alt="cards" fill />
      </div>
      <div className="relative z-10 smartphone:hidden">
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
