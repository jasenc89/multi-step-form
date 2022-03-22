import Input from "../Input";

const FinancialHistory = () => {
  return (
    <div>
      <section className="flex justify-between border-b-2 pb-4 mb-4">
        <h2 className="w-1/4 font-bold text-primary text-left">
          Personal information
        </h2>
        <div className="w-[60%] bg-white shadow p-8 rounded-lg flex flex-wrap gap-8">
          <Input labelText="Bank" />
        </div>
      </section>
    </div>
  );
};

export default FinancialHistory;
