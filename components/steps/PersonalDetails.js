import Input from "../Input";
import Button from "../Button";

const PersonalDetails = ({ formData, setFormData }) => {
  return (
    <div>
      <section className="flex justify-between border-b-2 pb-4 mb-4">
        <h2 className="w-1/4 font-bold text-primary text-left">
          Personal information
        </h2>
        <div className="w-[60%] bg-white shadow p-8 rounded-lg flex flex-wrap gap-8">
          <Input
            labelText="First name"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            inputValue={formData.firstName}
          />
          <Input
            labelText="Last name"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            inputValue={formData.lastName}
          />
          <Input
            labelText="Date of birth"
            placeholderText="DD/MM/YYYY"
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            inputValue={formData.dateOfBirth}
          />
        </div>
      </section>

      <section className="flex justify-between border-b-2 pb-4 mb-4">
        <h2 className="w-1/4 font-bold text-primary text-left">
          Address information
        </h2>
        <div className="w-[60%] bg-white shadow p-8 rounded-lg flex flex-wrap gap-8">
          <Input
            labelText="Postcode"
            onChange={(e) =>
              setFormData({ ...formData, postcode: e.target.value })
            }
            inputValue={formData.postcode}
          />
          <div className="flex items-end">
            <Button
              btnText="Find my address"
              textCol="text-white"
              bgColor="bg-primary"
            />
          </div>
          <Input
            labelText="Address line 1"
            onChange={(e) =>
              setFormData({ ...formData, addressLineOne: e.target.value })
            }
            inputValue={formData.addressLineOne}
          />
          <Input
            labelText="Address line 2"
            onChange={(e) =>
              setFormData({ ...formData, addressLineTwo: e.target.value })
            }
            inputValue={formData.addressLineTwo}
          />
          <Input
            labelText="Address line 3"
            onChange={(e) =>
              setFormData({ ...formData, addressLineThree: e.target.value })
            }
            inputValue={formData.addressLineThree}
          />
        </div>
      </section>

      <section className="flex justify-between pb-4">
        <h2 className="w-1/4 font-bold text-primary text-left">
          Contact information
        </h2>
        <div className="w-[60%] bg-white shadow p-8 rounded-lg flex flex-wrap gap-8">
          <Input
            labelText="Email address"
            onChange={(e) =>
              setFormData({ ...formData, emailAddress: e.target.value })
            }
            inputValue={formData.emailAddress}
            inputType="email"
          />
          <Input
            labelText="Phone number"
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            inputValue={formData.phoneNumber}
          />
        </div>
      </section>
    </div>
  );
};

export default PersonalDetails;
