import Link from 'next/link';
import WaitlistLink from '../../../../shared/GradientLink/GradientLink';

const FooterGradientLink = () => {
  return (
    <WaitlistLink href="/waitlist" positionY="top-auto" />
    // <Link href="/waitlist">
    //   <div className="bg-white absoluteCenter top-auto z-20 rounded-[50px] w-[190px] h-[56px] pt-3 px-5 text-base font-light uppercase text-center leading-[17px] purpleGradient text-white">
    //     <div>rejoindre la liste d&apos;attente</div>
    //   </div>
    //   <div className="z-0 absoluteCenter top-auto w-[200px] h-[60px] blur-sm purpleGradient rounded-[50px]" />
    // </Link>
  );
};

export default FooterGradientLink;
