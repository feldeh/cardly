import Link from 'next/link';

const GradientLink = ({ href }) => {
  return (
    <div className="z-50 w-fit mx-auto">
      <Link href={href}>
        {/* <div
          className={`${positionX} ${positionY} bg-white absoluteCenter z-20 rounded-[50px] w-[190px] h-[56px] pt-3 px-5 text-base font-light uppercase text-center leading-[17px] purpleGradient text-white`}
        >
          <div>rejoindre la liste d&apos;attente</div>
        </div>
        <div
          className={`${positionX} ${positionY} z-0 absoluteCenter w-[200px] h-[65px] blur-sm purpleGradient rounded-[50px]`}
        /> */}
        <div className="bg-white rounded-[50px] w-[200px] h-[62px] pt-[14px] px-5 text-base uppercase text-center leading-[18px] purpleGradient text-white">
          <div>rejoindre la liste d&apos;attente</div>
        </div>
      </Link>
    </div>
  );
};

export default GradientLink;
