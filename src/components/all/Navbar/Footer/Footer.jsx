import GradientLink from '../../../shared/GradientLink/GradientLink';

const Footer = () => {
  return (
    <div className="relative bottom-0 w-full px-10 pt-10 pb-4 text-center text-white bg-black">
      <p className="text-xl leading-[30px] mb-[50px]">
        Connect with the Future Go Digital with Your Business Card
      </p>
      <div className="mb-[40px]">
        <GradientLink href="/waitlist" />
      </div>
      <p className="text-[14px]">Cardly</p>
    </div>
  );
};

export default Footer;
