import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import Introduction from "../components/steps/Introduction";
import PersonalDetails from "../components/steps/PersonalDetails";
import FinancialHistory from "../components/steps/FinancialHistory";
import Review from "../components/steps/Review";
import { useState } from "react";

const Home = () => {
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState({});

  const steps = [
    "Introduction",
    "Personal details",
    "Financial history",
    "Review",
  ];

  const incrementStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const decrementStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const showPage = () => {
    if (step === 0) {
      return <Introduction />;
    } else if (step === 1) {
      return <PersonalDetails />;
    } else if (step === 2) {
      return <FinancialHistory />;
    } else {
      return <Review />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <div className="m-auto">
        <div className="mb-12">
          <ProgressBar formSteps={steps} currentStep={step} />
        </div>

        <div className="w-3/4 m-auto flex justify-center text-center mb-12">
          {showPage()}
        </div>

        <div className="w-3/4 m-auto flex align-center justify-between">
          <Button btnText="Back" bgColor="bg-white" onClick={decrementStep} />
          {step === 3 ? (
            <Button
              btnText="Submit"
              bgColor="bg-green-500"
              textCol="text-white"
            />
          ) : (
            <Button
              btnText="Next"
              bgColor="bg-primary"
              textCol="text-white"
              onClick={incrementStep}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
