import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import ExperienceCards from './ExperienceCards/ExperienceCards';

const Chiffres = () => {
  return (
    <div className="h-[960px] mt-24 relative">
      <SectionTitle
        title="En Chiffres"
        subTitle="Cardly En Un Coup D’oeil"
        number="04"
      />

      <div className="absolute top-[118px] w-full">
        <ExperienceCards />
      </div>
    </div>
  );
};

export default Chiffres;
