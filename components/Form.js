import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import Introduction from "../components/steps/Introduction";
import PersonalDetails from "../components/steps/PersonalDetails";
import FinancialHistory from "../components/steps/FinancialHistory";
import Review from "../components/steps/Review";
import { useState } from "react";

const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    addressLineOne: "",
    addressLineTwo: "",
    addressLineThree: "",
    postcode: "",
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
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <FinancialHistory />;
    } else {
      return <Review />;
    }
  };

  return (
    <div className="m-auto">
      <div className="mb-12">
        <ProgressBar formSteps={steps} currentStep={step} />
      </div>

      <form className="w-[65%] m-auto text-center mb-12" action="">
        <div>{showPage()}</div>

        <div className="flex align-center justify-between mt-8">
          <Button btnText="Back" bgColor="bg-white" onClick={handleDecrement} />
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
              onClick={handleIncrement}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;