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
    <div className="mb-[130px] mt-[130px]">
      <div className="lg:flex">
        <div className="mb-14 lg:mt-[140px]">
          <SectionTitle
            title="Fonctionnalités"
            id="features"
            subTitle="Best features"
            subTitle2="provided by Cardly"
            description="Cardly is more of a mindset than technology or industry, our product is designed by tech specialist to solve these problems. It will save you time, money and other problems."
            number="01"
          />
          <div className="hidden lg:block lg:float-left lg:ml-[55px] lg:mt-[70px]">
            <RegularLink href="/waitlist" black />
          </div>
        </div>
        <div className="mb-[50px] mx-4 lg:w-full">
          <FeatureCards features={features} featuresSection />
          <FeatureCards features={features} featuresSection />
        </div>
      </div>
      <div className="lg:hidden">
        <RegularLink href="/waitlist" black />
      </div>
    </div>
  );
};

export default Features;
