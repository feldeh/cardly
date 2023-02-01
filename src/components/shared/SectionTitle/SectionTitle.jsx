const SectionTitle = ({
  title,
  subTitle,
  subTitle2,
  description,
  number,
  id,
  flex,
}) => {
  return (
    <div className="relative">
      <div className="relative z-20 mx-[54px]">
        <a
          id={id}
          className="text-lg lg:text-[25px] lg:leading-[40px] font-ABeeZeeItalic anchor"
        >
          {title}
        </a>
        <div className={`${flex ? 'lg:flex' : ''}`}>
          <p className="text-[28px] lg:text-[40px] font-ABeeZeeItalic leading-8 lg:leading-[50px] text-black">
            {subTitle} <br /> {subTitle2}
          </p>
          <p
            className={`${
              flex ? 'lg:mt-2 lg:w-4/5 lg:pl-[400px]' : ''
            } mt-6  font-ABeeZeeItalic text-[17px] lg:tracking-wide leading-5 mx-auto`}
          >
            {description}
          </p>
        </div>
      </div>

      <p className="absoluteCenter left-[130px] top-[44px] font-ABeeZeeItalic text-[200px] text-whiteGrey">
        {number}
      </p>
    </div>
  );
};

export default SectionTitle;
