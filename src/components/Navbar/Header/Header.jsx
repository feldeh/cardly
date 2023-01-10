import Image from 'next/image';
import Flex from '../../shared/Flex/Flex';
import HeaderLink from './HeaderLink/HeaderLink';

const Header = () => {
  return (
    <Flex
      className="w-full fixed h-[100px] px-[20px]"
      justifyContent="justify-between"
    >
      <div className="absolute left-0 w-full h-full bg-[#D9D9D9] opacity-20" />
      <Image src="/assets/logo/logo.svg" width={95} height={41} alt="logo" />
      <HeaderLink />
    </Flex>
  );
};

export default Header;
