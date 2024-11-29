// should manage the state for an array
// add values to array
// remove values from array
// empty the array
// sort the array
// accept default values

import {useState} from 'react';

const useList = (initialValue = []) => {
  const [list, setList] = useState(initialValue);

  const addElement = (element) => {
    const copy = [
      ...list,
      element,
    ];

    setList(copy);
  };

  const removeElement = (element) => {
    const copy = list.filter((el) => el !== element);

    setList(copy);
  };

  const empty = () => {
    setList([]);
  };

  const sort = () => {
    const copy = [...list].sort();

    setList(copy);
  };
  
  return {
    list,
    addElement,
    removeElement,
    empty,
    sort,
  };
};

export default useList;
