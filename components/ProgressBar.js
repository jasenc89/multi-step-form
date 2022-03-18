import ProgressStep from "./ProgressStep";

const ProgressBar = ({ formSteps, currentStep }) => {
  const setBorderRounding = (index, arr) => {
    if (index === 0) {
      return "rounded-l-lg";
    } else if (index === arr.length - 1) {
      return "rounded-r-lg";
    }
  };

  const highlightStep = (index) => {
    return index === currentStep ? "border-b-4 border-primary" : "";
  };

  const createProgressBar = formSteps.map((step, index) => {
    return (
      <div
        className={`w-1/4 border-2 border-gray-200 ${setBorderRounding(
          index,
          formSteps
        )}`}
      >
        <ProgressStep
          stepNumber={index + 1}
          stepName={step}
          stepBorder={highlightStep(index)}
        />
      </div>
    );
  });

  return <div className="flex w-1/2 m-auto mb-12">{createProgressBar}</div>;
};

export default ProgressBar;
