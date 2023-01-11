import GradientLink from '../../../shared/GradientLink/GradientLink';

const Footer = () => {
  return (
    <div className="bg-black relative text-white text-center bottom-0 w-full pt-10 pb-4 px-10">
      <p className="text-xl leading-[30px] mb-[50px]">
        Connect with the Future Go Digital with Your Business Card
      </p>
      <div className="mb-[40px]">
        <GradientLink href="/" />
      </div>
      <p className="text-[14px]">Cardly</p>
    </div>
  );
};

export default Footer;
