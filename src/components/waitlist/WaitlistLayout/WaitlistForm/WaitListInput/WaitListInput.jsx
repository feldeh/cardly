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
        className="peer placeholder:text-white placeholder:text-xl font-ABeeZeeItalic bg-transparent h-[39px] focus:outline-none"
        type={type}
        placeholder={placeholder}
        value={data || ''}
        name={name}
        required
        onChange={handleChange}
        onBlur={() => setShowInvalidInput(true)}
      />
      <hr
        className={`${fullWidth ? '' : 'w-[50%]'}        
    ${
      showInvalidInput
        ? 'peer-invalid:border-[#f2077b] peer-invalid:ease-linear peer-invalid:duration-300 peer-invalid:scale-y-150 peer-valid:border-[#3dfe77] peer-valid:ease-linear peer-valid:duration-300 peer-valid:scale-y-150'
        : ''
    } border-t-2 border-white
    `}
      />
    </>
  );
};

export default WaitListInput;
