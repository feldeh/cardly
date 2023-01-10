import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const Chiffres = () => {
  return (
    <div className="h-[960px] mt-24 relative">
      <SectionTitle
        title="En Chiffres"
        subTitle="Cardly En Un Coup D’oeil"
        number="04"
      />

      <div className="absolute top-[118px] w-full">
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Chiffres;
