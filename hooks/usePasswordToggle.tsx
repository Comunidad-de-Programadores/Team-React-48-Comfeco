import { useState } from 'react';
import {FaEye, FaEyeSlash} from "react-icons/fa";


const usePasswordToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const Icon = !isVisible ? <FaEye onClick={handleClick}/> : <FaEyeSlash onClick={handleClick} />;
  const inputType = isVisible ? "text" : "password";


  return {inputType, Icon, handleClick}
};

export default usePasswordToggle;