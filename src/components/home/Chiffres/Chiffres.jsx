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
    <div className="h-[960px] lg:h-[550px] mt-24 lg:mt-[180px] largeScreen:flex largeScreen:flex-row lg:mb-20 largeScreen:mb-0">
      <div className="w-full">
        <SectionTitle
          title="En Chiffres"
          id="faq"
          subTitle="Cardly En Un Coup"
          subTitle2="D’oeil"
          number="04"
        />
      </div>

      <div className=" top-[118px] lg:top-[200px] w-full largeScreen:flex largeScreen:flex-col largeScreen:items-center largeScreen:mr-28 xl:mr-[400px]">
        <div className="lg:flex lg:justify-center">
          <ExperienceCards experiences={experiences1} />
        </div>
        <div className="lg:flex lg:justify-center">
          <ExperienceCards experiences={experiences2} />
        </div>
      </div>
    </div>
  );
};

export default Chiffres;
