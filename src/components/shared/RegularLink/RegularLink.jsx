import Link from 'next/link';

const RegularLink = ({ href, black }) => {
  return (
    <div className="z-50 mx-auto w-fit">
      <Link href={href}>
        <div
          className={`${
            black ? 'bg-black' : 'bg-white'
          } rounded-[50px] w-[200px] h-[62px] pt-[14px] px-5 text-base uppercase text-center leading-[18px]`}
        >
          <div className="text-transparent bg-clip-text purpleGradient">
            <div>rejoindre la liste d&apos;attente</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RegularLink;
