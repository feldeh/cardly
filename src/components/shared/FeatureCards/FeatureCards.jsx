import Image from 'next/image';

const FeatureCards = ({ features }) => {
  return (
    <div className="space-y-[33px]">
      {features.map((feature, i) => {
        return (
          <div
            key={i}
            className=" mx-8 rounded-[20px] text-center bg-whiteGrey hover:bg-black"
          >
            <div className="flex flex-col items-center mx-16 py-[53px]">
              <p className="text-xl">{feature.title}</p>
              <div className="mt-8">
                <Image
                  src={feature.src}
                  height={68}
                  width={68}
                  alt="hexagone"
                />
              </div>
              <p className="mt-8 text-lg leading-[21px]">
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
