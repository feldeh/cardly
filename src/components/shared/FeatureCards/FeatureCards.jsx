import Image from 'next/image';

const FeatureCards = ({ features, featuresSection }) => {
  return (
    <div className="md:flex md:justify-center">
      {features.map((feature, i) => {
        return (
          <div
            key={i}
            className="mx-4 mb-0 rounded-[20px] text-center bg-whiteGrey my-8 lg:hover:bg-black"
          >
            {/* <div
            key={i}
            className={`${
              featuresSection ? 'md:mx-4' : ''
            } mx-4 mb-[33px] rounded-[20px] text-center bg-whiteGrey my-4 lg:hover:bg-black`}
          > */}
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
