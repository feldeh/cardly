import FeatureCards from '../../shared/FeatureCards/FeatureCards';
import RegularLink from '../../shared/RegularLink/RegularLink';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';

const Features = () => {
  const features = [
    {
      title: 'Protection',
      src: '/assets/img/hexagone.svg',
      description: 'Protection des données garantie',
    },
    {
      title: 'Tracking',
      src: '/assets/img/hexagone.svg',
      description: 'Tracking all your virtual datas',
    },
  ];
  return (
    <div className="mb-[130px]">
      <div className="mb-14">
        <SectionTitle
          title="Fonctionnalités"
          id="features"
          subTitle="Best features"
          subTitle2="provided by Cardly"
          description="Cardly is more of a mindset than technology or industry, our product is
            designed by tech specialist to solve these problems. It will save you
            time, money and other problems."
          number="02"
        />
      </div>
      <div className="mb-[50px]">
        <FeatureCards features={features} />
      </div>
      <RegularLink href="/waitlist" black />
    </div>
  );
};

export default Features;
