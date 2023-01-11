import Link from 'next/link';

const GradientLink = ({ href, positionX, positionY }) => {
  return (
    <Link href={href}>
      <div
        className={`${positionX} ${positionY} bg-white absoluteCenter z-20 rounded-[50px] w-[190px] h-[56px] pt-3 px-5 text-base font-light uppercase text-center leading-[17px] textGradient text-white`}
      >
        <div>rejoindre la liste d&apos;attente</div>
      </div>
      <div
        className={`${positionX} ${positionY} z-0 absoluteCenter w-[200px] h-[65px] blur-sm textGradient rounded-[50px]`}
      />
    </Link>
  );
};

export default GradientLink;
