const ExperienceCards = () => {
  const experiences = [
    {
      number: '13',
      description: 'Années D’expériences',
    },
    {
      number: '84',
      description: 'Années D’expériences',
    },
    {
      number: '30',
      description: 'Années D’expériences',
    },
    {
      number: '40K',
      description: 'Années D’expériences',
    },
  ];
  return (
    <div className="lg:flex lg:justify-between">
      {experiences.map((experience, i) => {
        return (
          <div
            key={i}
            className="mx-8 mb-[33px] h-44 lg:w-[300px] bg-[#F3F3F3] rounded-[20px] text-center"
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
