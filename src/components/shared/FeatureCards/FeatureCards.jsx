import Image from 'next/image';

const FeatureCards = ({ features, featuresSection }) => {
  return (
    <div className="lg:flex lg:justify-center">
      {features.map((feature, i) => {
        return (
          <div
            key={i}
            className={`${
              featuresSection ? 'lg:mx-4' : ''
            } mx-8 mb-[33px] rounded-[20px] text-center bg-whiteGrey lg:my-auto lg:hover:bg-black`}
          >
            <div className="flex flex-col items-center mx-10 py-[45px]">
              <p className="text-xl">{feature.title}</p>
              <div className="mt-8">
                <Image
                  src={feature.src}
                  height={68}
                  width={68}
                  alt="hexagone"
                />
              </div>
              <p className="mt-8 text-lg leading-[21px] mx-0">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCards;
