import { useState } from 'react';

const WaitListInput = ({ data, placeholder, name, fullWidth }) => {
  const [showInvalidInput, setShowInvalidInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <input
        className="placeholder:text-white placeholder:text-xl font-ABeeZeeItalic bg-black h-[39px] focus:outline-none peer"
        type="text"
        placeholder={placeholder}
        value={data.lastName}
        name={name}
        required
        onChange={handleChange}
        onBlur={() => setShowInvalidInput(true)}
      />
      <hr
        className={`${fullWidth ? '' : 'w-[50%]'}        
    ${
      showInvalidInput ? 'peer-invalid:border-[#f2077b]' : ''
    } border-t-2 border-white
    `}
      />
    </>
  );
};

export default WaitListInput;
