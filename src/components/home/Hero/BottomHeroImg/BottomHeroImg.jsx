import { decouvrir, rounded, threeCards } from './svg';

const BottomHeroImg = () => {
  return (
    <div className="relative">
      <div
        className="absoluteCenter top-[-115px]"
        dangerouslySetInnerHTML={{
          __html: threeCards,
        }}
      />
      <div className="relative z-10">
        <div
          className="absoluteCenter top-[-16px]"
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
