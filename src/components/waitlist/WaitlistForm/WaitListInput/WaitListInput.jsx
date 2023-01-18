import { useState } from 'react';

const WaitListInput = ({
  data,
  setData,
  placeholder,
  name,
  type,
  fullWidth,
}) => {
  const [showInvalidInput, setShowInvalidInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <input
        className="placeholder:text-white placeholder:text-xl font-ABeeZeeItalic bg-black h-[39px] focus:outline-none peer"
        type={type}
        placeholder={placeholder}
        value={data}
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
