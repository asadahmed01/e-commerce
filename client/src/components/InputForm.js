import React from "react";

const InputForm = ({ value, label, name, placeholder, type, onChange }) => {
  return (
    <div className="mt-3">
      {label && (
        <label
          htmlFor="input-field"
          className="block text-sm text-gray-00 pb-2"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        className="w-full px-5 py-3 tracking-widest text-gray-700 bg-gray-200 rounded"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForm;
