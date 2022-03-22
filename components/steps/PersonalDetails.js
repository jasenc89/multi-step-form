import Input from "../Input";
import Button from "../Button";

const PersonalDetails = () => {
  return (
    <div>
      <section className="flex justify-between border-b-2 pb-4 mb-4">
        <h2 className="w-1/4 font-bold text-primary text-left">
          Personal information
        </h2>
        <div className="w-[60%] bg-white shadow p-8 rounded-lg flex flex-wrap gap-8">
          <Input labelText="First name" />
          <Input labelText="Last name" />
          <Input labelText="Date of birth" placeholderText="DD/MM/YYYY" />
        </div>
      </section>

      <section className="flex justify-between border-b-2 pb-4 mb-4">
        <h2 className="w-1/4 font-bold text-primary text-left">
          Address information
        </h2>
        <div className="w-[60%] bg-white shadow p-8 rounded-lg flex flex-wrap gap-8">
          <Input labelText="Postcode" />
          <div>
            <Button
              btnText="Find my address"
              textCol="text-white"
              bgColor="bg-primary"
            />
          </div>
          <Input labelText="Address line 1" />
          <Input labelText="Address line 2" />
          <Input labelText="Address line 3" />
        </div>
      </section>

      <section className="flex justify-between pb-4">
        <h2 className="w-1/4 font-bold text-primary text-left">
          Contact information
        </h2>
        <div className="w-[60%] bg-white shadow p-8 rounded-lg flex flex-wrap gap-8">
          <Input labelText="Email address" />
          <Input labelText="Phone number" />
        </div>
      </section>
    </div>
  );
};

export default PersonalDetails;
