import ReviewDetail from "../ReviewDetail";

const Review = ({ formData }) => {
  const createReviewDetails = () => {
    return Object.entries(formData).map((key, index) => {
      return (
        <ReviewDetail
          label={
            key[0].charAt(0).toUpperCase() +
            key[0]
              .replace(/([A-Z])/g, " $1")
              .trim()
              .slice(1)
          }
          detail={key[1]}
        />
      );
    });
  };

  return (
    <div className="w-3/4 text-center bg-white shadow rounded-lg p-12 m-auto">
      <h2 className="text-lg border-b-2 pb-4 mb-4 font-bold text-primary">
        Review your details
      </h2>
      <div>{createReviewDetails()}</div>
    </div>
  );
};

export default Review;
