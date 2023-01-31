import Image from 'next/image';
import Link from 'next/link';
import HeaderLink from './HeaderLink/HeaderLink';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full fixed h-[100px] px-[20px] top-0 bg-darkGrey z-50">
      <div>
        <Link href="/">
          <Image
            src="/assets/logo/logo.svg"
            width={95}
            height={41}
            alt="logo"
          />
        </Link>
      </div>
      <div className="text-[20px] text-white justify-between hidden w-3/6 lg:flex pr-[130px]">
        <div>Features</div>
        <div>How to</div>
        <div>About us</div>
        <div>Faq</div>
      </div>
      <HeaderLink />
    </div>
  );
};

export default Header;
