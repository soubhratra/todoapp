import {useState} from 'react';
import { callbackify } from 'util';

export const useInputValue = (initialValue = "") => {
  const [inputvalue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: event => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyPut: (event, callBack) => {
      if(event.which === 13 || event.keyCode === 13) {
        callbackify(input);
        return true;
      }
      return false;
    }
  };
};