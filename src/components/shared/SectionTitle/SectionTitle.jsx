const SectionTitle = ({ title, subTitle, number }) => {
  return (
    <div className="relative">
      <div className="absolute z-20 mx-[54px]">
        <p className="text-lg font-ABeeZeeItalic">{title}</p>
        <p className="text-[28px] font-ABeeZeeItalic leading-8 text-black">
          {subTitle}
        </p>
      </div>

      <p className="absoluteCenter left-[130px] top-[44px] font-ABeeZeeItalic text-[200px] text-[#F3F3F3]">
        {number}
      </p>
    </div>
  );
};

export default SectionTitle;
