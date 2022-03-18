const Button = ({ btnText, bgColor, textCol, onClick }) => {
  return (
    <button
      className={`border rounded-lg py-2 px-14 ${bgColor} ${textCol}`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
