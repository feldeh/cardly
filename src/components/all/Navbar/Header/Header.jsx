import Image from 'next/image';
import Flex from '../../../shared/Flex/Flex';
import HeaderLink from './HeaderLink/HeaderLink';

const Header = () => {
  return (
    <Flex
      className="w-full fixed h-[100px] px-[20px] top-0 bg-darkGrey "
      justifyContent="justify-between z-50"
    >
      <div>
        <Image src="/assets/logo/logo.svg" width={95} height={41} alt="logo" />
      </div>
      <HeaderLink />
    </Flex>
  );
};

export default Header;
