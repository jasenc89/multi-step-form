const Input = ({
  labelText,
  placeholderText,
  inputType,
  inputValue,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-left p-2">{labelText}</label>
      <input
        className="p-2 border-2 rounded-lg shadow-md"
        placeholder={placeholderText}
        required
        onChange={onChange}
        type={inputType}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
