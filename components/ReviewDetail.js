const ReviewDetail = ({ label, detail }) => {
  return (
    <div className="flex gap-8 justify-center items-start">
      <div className="font-bold ">{label}:</div>
      <div>{detail}</div>
    </div>
  );
};

export default ReviewDetail;
