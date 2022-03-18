const ProgressStep = ({ stepNumber, stepName, stepBorder }) => {
  return (
    <div className={`w-48 flex align-center justify-start p-3 ${stepBorder}`}>
      <span className="font-bold border-2 border-primary rounded-full py-1 px-3 mr-1">
        {stepNumber}
      </span>
      <p className="p-1">{stepName}</p>
    </div>
  );
};

export default ProgressStep;
