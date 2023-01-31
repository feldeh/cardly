import FeatureCards from '../../shared/FeatureCards/FeatureCards';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import DataCard from './DataCard/DataCard';

const About = () => {
  const features = [
    {
      title: 'Fonctionnalité 1',
      src: '/assets/img/hexagone.svg',
      description: 'Protection des données garantie',
    },
    {
      title: 'Fonctionnalité 2',
      src: '/assets/img/hexagone.svg',
      description: 'Protection des données garantie',
    },
    {
      title: 'Fonctionnalité 3',
      src: '/assets/img/hexagone.svg',
      description: 'Protection des données garantie',
    },
  ];
  return (
    <div>
      <div className="mb-6">
        <SectionTitle
          title="A Propos"
          id="aboutus"
          subTitle="En Savoir Plus Sur"
          subTitle2="Cardly"
          description="Cardly is more of a mindset than technology or industry, our product is
              designed by tech specialist to solve these problems. It will save you
              time, money and other problems."
          number="03"
        />
      </div>
      <FeatureCards features={features} />
      <DataCard />
    </div>
  );
};

export default About;
