import ProgressStep from "./ProgressStep";

const ProgressBar = ({ formSteps, currentStep }) => {
  const setBorderRounding = (arr, index) => {
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
        className={`w-1/4 border-2 border-gray-200 bg-white ${setBorderRounding(
          formSteps,
          index
        )}`}
      >
        <ProgressStep
          stepNumber={index + 1}
          stepName={step}
          stepBorder={highlightStep(index)}
          borderRounding={setBorderRounding(formSteps, index)}
        />
      </div>
    );
  });

  return <div className="flex w-1/2 m-auto">{createProgressBar}</div>;
};

export default ProgressBar;
