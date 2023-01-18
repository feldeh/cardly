import { useRouter } from 'next/router';
import { useState } from 'react';
import Confetti from 'react-dom-confetti';

const WaitlistForm = ({ email }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsExploding(!isExploding);
    console.log(isExploding);
    const res = await fetch('/api/waitlist', {
      body: JSON.stringify({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    setTimeout(() => {
      router.push('/envoi');
    }, 1500);
  };

  const [isExploding, setIsExploding] = useState(false);

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
    <div className="pt-20 pb-[40px] text-white bg-black px-[45px] overflowHiddenY">
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              className="placeholder:text-white placeholder:text-xl font-ABeeZeeItalic bg-black h-[39px] focus:outline-none"
              type="text"
              placeholder="Prénom*"
              value={form.firstName}
              name="firstName"
              required
              onChange={handleChange}
            />
            <hr className="w-[50%] border-t-2 border-white" />
          </div>
          <div className="my-[26px]">
            <input
              className="placeholder:text-white placeholder:text-xl font-ABeeZeeItalic bg-black h-[39px] focus:outline-none"
              type="text"
              placeholder="Nom*"
              value={form.lastName}
              name="lastName"
              required
              onChange={handleChange}
            />
            <hr className="w-[50%] border-t-2 border-white" />
          </div>
          <div>
            <input
              className="placeholder:text-white placeholder:text-xl font-ABeeZeeItalic bg-black h-[39px] focus:outline-none"
              type="text"
              placeholder="Email*"
              value={form.email}
              name="email"
              required
              onChange={handleChange}
            />
            <hr className="border-t-2 border-white " />
          </div>
        </div>
        <div className="mx-auto w-fit">
          <button
            className="purpleGradient rounded-[50px] w-[200px] h-[62px] px-6 mt-[90px] text-base uppercase text-center leading-[18px]"
            type="submit"
          >
            rejoindre la liste d&apos;attente
            <Confetti active={isExploding} config={config} />
          </button>
        </div>
        <p className="text-[12px] mt-[50px] font-ABeeZeeItalic text-transparent bg-clip-text purpleGradient mx-auto w-fit text-center">
          *En t’inscrivant, tu bénéficies d’un accès “Early Bird”
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm;
