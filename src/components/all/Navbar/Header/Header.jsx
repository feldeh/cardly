import Image from 'next/image';
import HeaderLink from './HeaderLink/HeaderLink';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full fixed h-[100px] px-[20px] top-0 bg-darkGrey z-50">
      <div>
        <Image src="/assets/logo/logo.svg" width={95} height={41} alt="logo" />
      </div>
      <HeaderLink />
    </div>
  );
};

export default Header;
