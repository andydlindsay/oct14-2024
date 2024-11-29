import {useState} from 'react';

const useToggle = (initialState) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => {
    setIsOn(!isOn);
  };

  // return [isOn, toggle];
  return { isOn, toggle };
};

export default useToggle;
