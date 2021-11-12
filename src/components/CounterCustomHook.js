import  { useState } from "react";

export const CounterCustomHook = (num = 10) => {

      const [counter, setCounter] = useState(num);

      const handleSubstract = () => {
        setCounter(counter - 1);
      };
      const handleReset = () => {
        setCounter(num);
      };
      const handleAdd = () => {
        setCounter(counter + 1);
      };

    return (
        counter,
        handleSubstract,
        handleReset,
        handleAdd
    )
}


