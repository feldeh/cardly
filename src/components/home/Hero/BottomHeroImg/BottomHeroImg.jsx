import { decouvrir, rounded, threeCards } from "./svg";

const BottomHeroImg = () => {
  return (
    <div className='relative'>
      <div
        className='absoluteCenter top-[-115px]'
        dangerouslySetInnerHTML={{
          __html: threeCards,
        }}
      />
      <div className='relative z-10'>
        <div
          id='decouvrir'
          className='absoluteCenter left-[38%] top-[-60px]'
          dangerouslySetInnerHTML={{
            __html: decouvrir,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: rounded,
          }}
        />
      </div>
    </div>
  );
};

export default BottomHeroImg;
