import Flex from '../../../shared/Flex/Flex';
import FooterGradientLink from './FooterGradientLink/FooterGradientLink';

const Footer = () => {
  return (
    <Flex
      className="bg-black relative text-white text-center px-10 bottom-0"
      flexDirection="flex-col"
    >
      <p className="text-xl mt-10 mb-[82px] leading-[30px]">
        Connect with the Future Go Digital with Your Business Card
      </p>
      <div className="mb-[80px]">
        <FooterGradientLink />
      </div>
      <p className="mb-4 text-[14px] font-light">Cardly</p>
    </Flex>
  );
};

export default Footer;
