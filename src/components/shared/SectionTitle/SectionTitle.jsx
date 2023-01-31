const SectionTitle = ({ title, subTitle, description, number }) => {
  return (
    <div className="relative">
      <div className="relative z-20 mx-[54px]">
        <a id="features" className="text-lg font-ABeeZeeItalic anchor">
          {title}
        </a>
        <p className="text-[28px] font-ABeeZeeItalic leading-8 text-black">
          {subTitle}
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
