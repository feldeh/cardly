import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import WaitlistBtn from './WaitlistBtn/WaitlistBtn';
import WaitListInput from './WaitListInput/WaitListInput';

const WaitlistForm = ({ email }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: email,
  });
  const [isExploding, setIsExploding] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsExploding(!isExploding);
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
    }, 400);
  };

  useEffect(() => {
    if (
      !(form.firstName == null || form.firstName == '') &&
      !(form.lastName == null || form.lastName == '') &&
      !(form.email == null) &&
      form.email.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [form.firstName, form.lastName, form.email]);

  return (
    <div className="pt-20 pb-[20px] text-white  mx-[45px]">
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <div>
            <WaitListInput
              data={form.firstName}
              setData={setForm}
              placeholder="Prénom*"
              name="firstName"
              type="text"
            />
          </div>
          <div className="my-[26px]">
            <WaitListInput
              data={form.lastName}
              setData={setForm}
              placeholder="Nom*"
              name="lastName"
              type="text"
            />
          </div>
          <div>
            <WaitListInput
              data={form.email}
              setData={setForm}
              placeholder="Email*"
              name="email"
              type="email"
              fullWidth
            />
          </div>
        </div>
        <div className="mx-auto w-fit 2xl:mt-[80px]">
          <WaitlistBtn
            buttonDisabled={buttonDisabled}
            isExploding={isExploding}
          />
        </div>
        <p className="text-[12px] mt-[50px] font-ABeeZeeItalic text-transparent bg-clip-text purpleGradient mx-auto w-fit text-center 2xl:mt-[70px]">
          *En t’inscrivant, tu bénéficies d’un accès “Early Bird”
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm;
