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
    }
  };

  return (
    <div>
      <Header />
      <div className="m-auto">
        <div>
          <ProgressBar formSteps={steps} currentStep={step} />
        </div>

        <div className="flex justify-center">
          <Input />
        </div>

        <div className="w-3/4 m-auto flex align-center justify-between">
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
