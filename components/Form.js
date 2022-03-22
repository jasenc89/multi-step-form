import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import Introduction from "../components/steps/Introduction";
import PersonalDetails from "../components/steps/PersonalDetails";
import FinancialHistory from "../components/steps/FinancialHistory";
import Review from "../components/steps/Review";
import { useState } from "react";

const Form = () => {
  const [step, setStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    isaProvider: "",
  });

  const steps = [
    "Introduction",
    "Personal details",
    "Financial history",
    "Review",
  ];

  const showPage = () => {
    if (!formSubmitted) {
      if (step === 0) {
        return <Introduction />;
      } else if (step === 1) {
        return (
          <PersonalDetails formData={formData} setFormData={setFormData} />
        );
      } else if (step === 2) {
        return (
          <FinancialHistory formData={formData} setFormData={setFormData} />
        );
      } else {
        return <Review />;
      }
    } else {
      return <h1>form submitted!</h1>;
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data submitted");
    setFormSubmitted(true);
  };

  return (
    <div className="m-auto">
      <ProgressBar formSteps={steps} currentStep={step} />
      <div className="w-[65%] mx-auto mt-12">
        <form className="m-auto mb-12" id="client-form" onSubmit={handleSubmit}>
          <div>{showPage()}</div>
          <div className="flex align-center justify-between mt-8">
            <Button
              btnText="Back"
              bgColor="bg-white"
              onClick={handleDecrement}
              inputType="button"
              disabled={step === 0}
            />
            {step === steps.length - 1 ? (
              <Button
                btnText="Submit"
                bgColor="bg-green-500"
                textCol="text-white"
                form="client-form"
                type="submit"
              />
            ) : (
              <Button
                btnText="Next"
                bgColor="bg-primary"
                textCol="text-white"
                onClick={handleIncrement}
                type="button"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
