import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import ExperienceCards from './ExperienceCards/ExperienceCards';

const Chiffres = () => {
  const experiences1 = [
    {
      number: '13',
      description: 'Années D’expériences',
    },
    {
      number: '84',
      description: 'Années D’expériences',
    },
  ];
  const experiences2 = [
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
    <div className="mb-24 mt-24 lg:mt-[180px] largeScreen:flex largeScreen:flex-row lg:mb-36">
      <div className="">
        <SectionTitle
          title="En Chiffres"
          id="faq"
          subTitle="Cardly&nbsp;En&nbsp;Un&nbsp;Coup"
          subTitle2="D’oeil"
          number="04"
        />
      </div>

      <div className="w-full md:mt-20 largeScreen:flex largeScreen:flex-col">
        <div className="md:flex md:justify-center">
          <ExperienceCards experiences={experiences1} />
        </div>
        <div className="md:flex md:justify-center">
          <ExperienceCards experiences={experiences2} />
        </div>
      </div>
    </div>
  );
};

export default Chiffres;
