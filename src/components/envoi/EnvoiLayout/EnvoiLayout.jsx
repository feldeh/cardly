import Image from 'next/image';
import React from 'react';
import GradientLink from '../../shared/GradientLink/GradientLink';

const EnvoiLayout = () => {
  return (
    <div className="relative w-full pt-[150px] pb-3 mt-[-90px] h-screen">
      <div className="absolute w-full h-full z-[-10] top-[90px]">
        <Image
          className="bg-black"
          src="/assets/img/cardWaitlist.svg"
          fill
          alt="card"
        />
      </div>
      <div className="bg-black/60 w-full h-full absolute z-[-5] top-[90px]" />

      <div className="text-white px-[45px] text-center">
        <p className="text-[40px] leading-[50px]">
          Bravo pour ton enregistrement 👏
        </p>
        <p className="text-[20px] mt-[75px] leading-7">
          Tu vas recevoir un mail de confirmation. Quand Cardly sera en ligne,
          tu recevras un mail te donnant accès en avant première à ta carte !
        </p>
      </div>
      <div className="mt-[100px]">
        <GradientLink href="/" text="revenir à l'accueil" />

        <p className="text-[12px] mt-[50px] font-ABeeZeeItalic text-transparent bg-clip-text purpleGradient mx-auto w-fit text-center">
          *En t’inscrivant, tu bénéficies d’un accès “Early Bird”
        </p>
      </div>
    </div>
  );
};

export default EnvoiLayout;
