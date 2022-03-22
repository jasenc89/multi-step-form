const Input = ({ labelText, placeholderText, onChange }) => {
  const validateField = () => {};

  return (
    <div className="flex flex-col">
      <label className="text-left p-2">{labelText}</label>
      <input
        className="p-2 border-2 rounded-lg shadow-md"
        placeholder={placeholderText}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
