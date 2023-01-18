import { useState } from 'react';
import Confetti from 'react-dom-confetti';

const WaitlistBtn = ({ buttonDisabled, isExploding }) => {
  const config = {
    angle: '80',
    spread: '360',
    startVelocity: 30,
    elementCount: 120,
    dragFriction: 0.12,
    duration: 2000,
    stagger: 2,
    width: '12px',
    height: '12px',
    perspective: '500px',
    colors: ['#fc6a88', '#f44a9e', '#cc72c0', '#99a5eb', '#a864fd'],
  };

  return (
    <>
      <button
        className={`${
          buttonDisabled ? 'bg-lightGrey' : 'purpleGradient'
        } rounded-[50px] w-[200px] h-[62px] px-6 mt-[90px] text-base uppercase text-center leading-[18px]`}
        type="submit"
        disabled={buttonDisabled}
      >
        rejoindre la liste d&apos;attente
        <Confetti active={isExploding} config={config} />
      </button>
    </>
  );
};

export default WaitlistBtn;
