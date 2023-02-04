const ExperienceCards = ({ experiences }) => {
  return (
    <div className="md:flex md:justify-between">
      {experiences.map((experience, i) => {
        return (
          <div
            key={i}
            className="mx-4 mb-[33px] h-44 md:w-[300px] bg-[#F3F3F3] rounded-[20px] text-center"
          >
            <p className="text-[65px] tracking-wide text-transparent bg-clip-text purpleGradient w-fit mx-auto pt-6">
              {experience.number}+
            </p>
            <p className="text-black text-[20px]">{experience.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceCards;
