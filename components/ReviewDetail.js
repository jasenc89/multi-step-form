const ReviewDetail = ({ label, detail }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-8">
      <div className="font-bold justify-self-end">{label}:</div>
      <div className="justify-self-start">{detail}</div>
    </div>
  );
};

export default ReviewDetail;
