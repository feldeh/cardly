import { useRouter } from 'next/router';
import { useState } from 'react';

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
    const res = await fetch('/api/waitlist', {
      body: JSON.stringify({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    router.push('/envoi');
  };

  return (
    <div className="pt-20 pb-[40px] text-white bg-black px-[37px]">
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
          </button>
        </div>
        <p className="text-[12px] mt-[50px] font-ABeeZeeItalic text-transparent bg-clip-text purpleGradient mx-auto w-fit text-center">
          *En t’inscrivant, tu bénéficies d’un accès “Early Bird”
        </p>
        <p className="text-4xl">{email}</p>
      </form>
    </div>
  );
};

export default WaitlistForm;
