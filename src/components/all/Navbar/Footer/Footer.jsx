import GradientLink from '../../../shared/GradientLink/GradientLink';

const Footer = () => {
  return (
    <div className="relative bottom-0 w-full px-10 pt-10 lg:pt-[210px] pb-4 lg:pb-[50px] text-center text-white bg-black">
      <p className="text-xl lg:text-[70px] lg:leading-[80px] leading-[30px] mb-[50px] lg:mb-[80px]">
        Connect with the Future <br /> Go Digital with Your Business Card
      </p>
      <div className="mb-[40px] lg:mb-[120px]">
        <GradientLink href="/waitlist" text="rejoindre la liste d'attente" />
      </div>
      <p className="text-[14px]">Cardly</p>
    </div>
  );
};

export default Footer;
