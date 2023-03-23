import React from "react";

const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="flex flex-col">
      <label className="font-light" htmlFor="email">
        {label}
      </label>
      <input className="border-b-2 rounded px-2" {...inputOptions} />
    </div>
  );
};

export default FormInput;
