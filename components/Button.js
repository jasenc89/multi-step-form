const Button = ({ btnText, bgColor, textCol, type, disabled, onClick }) => {
  return (
    <button
      className={`border rounded-lg py-2 px-14 ${bgColor} ${textCol} disabled:bg-gray-300 disabled:text-gray-100`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
