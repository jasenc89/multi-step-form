import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import Introduction from "./steps/Introduction";
import PersonalDetails from "./steps/PersonalDetails";
import FinancialHistory from "./steps/FinancialHistory";
import Review from "./steps/Review";
import FormSubmitted from "./steps/FormSubmitted";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

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

  const recaptchaRef = useRef();

  const steps = [
    "Introduction",
    "Personal details",
    "Financial history",
    "Review",
  ];

  const showPage = () => {
    if (step === 0) {
      return <Introduction />;
    } else if (step === 1) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <FinancialHistory formData={formData} setFormData={setFormData} />;
    } else {
      return <Review formData={formData} />;
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
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current.execute();
    console.log(recaptchaRef.current);
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({ formData, captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert
        setFormSubmitted(true);
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      setFormData({
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
    }
  };

  return (
    <div className="m-auto">
      <ProgressBar formSteps={steps} currentStep={step} />
      <div className="w-[65%] mx-auto mt-12">
        {formSubmitted ? (
          <FormSubmitted />
        ) : (
          <form className="m-auto mb-12" onSubmit={handleSubmit}>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              size="invisible"
              ref={recaptchaRef}
              onChange={onReCAPTCHAChange}
            />
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
        )}
      </div>
    </div>
  );
};

export default Form;
