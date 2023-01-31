const SectionTitle = ({
  title,
  subTitle,
  subTitle2,
  description,
  number,
  id,
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
        <p className="text-[28px] lg:text-[40px] font-ABeeZeeItalic leading-8 lg:leading-[50px] text-black">
          {subTitle} <br /> {subTitle2}
        </p>
        <p className="mt-6 font-ABeeZeeItalic text-[17px] leading-6">
          {description}
        </p>
      </div>

      <p className="absoluteCenter left-[130px] top-[44px] font-ABeeZeeItalic text-[200px] text-whiteGrey">
        {number}
      </p>
    </div>
  );
};

export default SectionTitle;
