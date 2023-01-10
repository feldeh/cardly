import Link from 'next/link';

const BizGradientLink = () => {
  return (
    <Link href="/">
      <div className="bg-white absoluteCenter top-[290px] z-20 rounded-[50px] w-[190px] h-[56px] pt-3 px-5 text-base font-light uppercase text-center leading-[17px] textGradient text-white">
        <div>rejoindre la liste d&apos;attente</div>
      </div>
      <div className="z-0 absoluteCenter top-[290px] w-[200px] h-[60px] blur-sm textGradient rounded-[50px]" />
    </Link>
  );
};

export default BizGradientLink;
