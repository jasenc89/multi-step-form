import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
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

  return (
    <div>
      <Header />
      <div className="flex justify-center pt-12">
        <ProgressBar formSteps={steps} currentStep={step} />
      </div>
    </div>
  );
}
