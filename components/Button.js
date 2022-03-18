const Button = ({ btnText, bgColor, textCol, onClick }) => {
  return (
    <button
      className={`border rounded-lg py-2 px-14 ${bgColor} ${textCol} disabled:bg-gray-300 disabled:text-gray-100`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
