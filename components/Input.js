const Input = ({ labelText, placeholderText }) => {
  return (
    <div className="flex flex-col">
      <label className="text-left p-2">{labelText}</label>
      <input
        className="p-2 border-2 rounded-lg shadow-md"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default Input;
