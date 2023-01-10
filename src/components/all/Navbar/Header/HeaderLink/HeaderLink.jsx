const HeaderLink = () => {
  return (
    <div className="relative">
      <div className="bg-white absolute z-10 right-0 bottom-[-25px] rounded-[50px] w-[155px] h-[50px] py-3 px-5 text-sm font-medium uppercase text-center leading-[14px]">
        <div className="text-transparent bg-clip-text textGradient">
          rejoindre la liste d&apos;attente
        </div>
      </div>
      <div className="right-0 bottom-[-25px] z-0 absolute w-[155px] h-[50px] blur-[10px] textGradient rounded-[50px]" />
    </div>
  );
};

export default HeaderLink;
