import Image from 'next/image';
import React from 'react';
import GradientLink from '../../shared/GradientLink/GradientLink';

const EnvoiLayout = () => {
  return (
    <div className="relative w-full h-full pt-[160px]">
      <div className="absolute w-full h-full z-[-10] top-[60px]">
        <Image
          className="w-full bg-black"
          src="/assets/img/cardWaitlist.svg"
          fill
          alt="card"
        />
      </div>
      <div className="bg-black/60 w-full h-full absolute z-[-5] top-[60px]" />

      <div className="text-white px-[45px] text-center space-y-[100px]">
        <p className="text-[40px] leading-[50px]">
          Bravo pour ton enregistrement 👏
        </p>
        <p className="text-[20px]">
          Tu vas recevoir un mail de confirmation. Quand Cardly sera en ligne,
          tu recevras un mail te donnant accès en avant première à ta carte !
        </p>
      </div>
      <div className="mt-[130px]">
        <GradientLink href="/" text="revenir à l'accueil" />

        <p className="text-[12px] mt-[50px] font-ABeeZeeItalic text-transparent bg-clip-text purpleGradient mx-auto w-fit text-center">
          *En t’inscrivant, tu bénéficies d’un accès “Early Bird”
        </p>
      </div>
    </div>
  );
};

export default EnvoiLayout;
