import { useState, useCallback } from "react";

function useInputs(initial) {
  const [input, setInput] = useState(initial);

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  return [input, onChange];
}

export default useInputs;
