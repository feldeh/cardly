import RegularLink from '../../../shared/RegularLink/RegularLink';

const DataCard = () => {
  return (
    <div className="text-center purpleGradient rounded-[20px] mx-8 mt-[33px]">
      <div className="pt-10 mb-14">
        <p className="text-3xl text-white leading-[38px] mx-[21px]">
          Toutes Tes Données
        </p>
        <p className="text-3xl text-white leading-[38px] mx-[24px]">
          Dans Une Seule Carte&nbsp;☝️
        </p>
      </div>
      <div className="pb-14">
        <RegularLink href="/waitlist" />
      </div>
    </div>
  );
};

export default DataCard;
