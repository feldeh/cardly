import FeatureCards from '../../shared/FeatureCards/FeatureCards';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import DataCard from './DataCard/DataCard';

const About = () => {
  return (
    <div>
      <div className="mb-6 mt-[200px]">
        <SectionTitle
          title="A Propos"
          subTitle="En Savoir Plus Sur Cardly"
          description="Cardly is more of a mindset than technology or industry, our product is
              designed by tech specialist to solve these problems. It will save you
              time, money and other problems."
          number="03"
        />
      </div>
      <FeatureCards />
      <DataCard />
    </div>
  );
};

export default About;
