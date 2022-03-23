import ReviewDetail from "../ReviewDetail";

const Review = ({ formData }) => {
  const keyToString = () => {
    return Object.keys(formData).map((key, index) => {
      return (
        <div>
          {key.charAt(0).toUpperCase() +
            key
              .replace(/([A-Z])/g, " $1")
              .trim()
              .slice(1)}
        </div>
      );
    });
  };

  return (
    <div className="w-3/4 text-center bg-white shadow rounded-lg p-12 m-auto">
      <ReviewDetail />
      <div>{keyToString()}</div>
    </div>
  );
};

export default Review;
