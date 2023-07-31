import ReactInputMask from "react-input-mask";
import React from "react";

const CEP_MASK = "99999-999"; // Definimos a máscara do CEP

function useCEPMask() {
  return {
    CEP_MASK,
    InputWithCEPMask,
  };
}

function InputWithCEPMask({ value, onChange, ...rest }) {
  return (
    <ReactInputMask mask={CEP_MASK} 
                    value={value} 
                    onChange={onChange} 
                    {...rest} 
    />
  );
}

export default useCEPMask;
