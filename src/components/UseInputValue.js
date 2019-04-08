import {useState} from 'react';

export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: event => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event, callBack) => {
      if(event.which === 13 || event.keyCode === 13) {
        callBack(inputValue);
        return true;
      }
      return false;
    }
  };
};