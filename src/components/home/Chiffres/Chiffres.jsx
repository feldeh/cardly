import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import ExperienceCards from './ExperienceCards/ExperienceCards';

const Chiffres = () => {
  return (
    <div className="h-[960px] lg:h-[550px] mt-24 lg:mt-[250px] relative">
      <SectionTitle
        title="En Chiffres"
        id="faq"
        subTitle="Cardly En Un Coup"
        subTitle2="D’oeil"
        number="04"
      />

      <div className="absolute top-[118px] lg:top-[200px] w-full">
        <ExperienceCards />
      </div>
    </div>
  );
};

export default Chiffres;
