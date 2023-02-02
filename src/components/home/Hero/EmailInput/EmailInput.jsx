import Link from 'next/link';
import { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="mb-[60px] flex flex-row justify-between smartphone:mx-auto smartphone:max-w-xs md:max-w-sm xl:max-w-md mx-8 border-[1px] h-[55px] border-white rounded-[50px]">
      <input
        type="text"
        placeholder="Entre ton email"
        value={email}
        onChange={(e) => {
          setEmail(() => e.target.value);
        }}
        className="rounded-[50px] bg-black text-white placeholder-white ml-5 focus:outline-none"
      />

      <Link
        href={{
          pathname: '/waitlist',
          query: { email: email },
        }}
      >
        <div className="uppercase bg-white text-black text-[10px] text-center leading-3 w-[130px] h-[55px] rounded-[48px] pt-4 px-3 mt-[-1px]">
          rejoindre la liste d&apos;attente
        </div>
      </Link>
    </div>
  );
};

export default EmailInput;
