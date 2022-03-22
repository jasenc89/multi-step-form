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
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: {
      lineOne: "",
      lineTwo: "",
      lineThree: "",
      postcode: "",
    },
    emailAddress: "",
    phoneNumber: "",
  });

  const steps = [
    "Introduction",
    "Personal details",
    "Financial history",
    "Review",
  ];

  const handleIncrement = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleDecrement = () => {
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
    <div className="bg-slate-50 min-h-screen pb-12">
      <Header />
      <div className="m-auto">
        <div className="mb-12">
          <ProgressBar formSteps={steps} currentStep={step} />
        </div>

        <div className="w-[65%] m-auto text-center mb-12">
          <form action="">{showPage()}</form>
        </div>

        <div className="w-[65%] m-auto flex align-center justify-between">
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
