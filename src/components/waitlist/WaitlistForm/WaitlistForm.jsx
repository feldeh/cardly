import { useState } from 'react';

const WaitlistForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <div className="pt-20 pb-[90px] text-white bg-black px-[45px]">
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
      </form>
    </div>
  );
};

export default WaitlistForm;
