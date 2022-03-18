import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);

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
      console.log(step);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-1/2 m-auto">
        <div className="flex align-center justify-center pt-12">
          <ProgressBar formSteps={steps} currentStep={step} />
        </div>
        <div className="flex align-center justify-between">
          <Button btnText="Back" onClick={decrementStep} />
          <Button
            btnText="Next"
            bgColor="bg-primary"
            textCol="text-white"
            onClick={incrementStep}
          />
        </div>
      </div>
    </div>
  );
}
