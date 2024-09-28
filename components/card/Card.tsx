const Card = () => {
  return (
    <div className="bg-green-50 hover:shadow-green-300 hover:shadow-md rounded-lg bg-green-50/30 border border-green-200">
      {" "}
      {/* Updated to soft green colors */}
      <div className="p-1 rounded-t-lg bg-green-300"></div>{" "}
      {/* Updated top border color */}
      <div className="flex flex-col rounded p-5 lg:p-8">
        <h3 className="text-3xl text-green-900 font-bold">Fast-Track</h3>{" "}
        {/* Updated text color */}
        <p className="py-1 text-sm text-green-800">
          {" "}
          {/* Updated text color */}
          Why wait 60 days? Skip the line and Get your tool listed ASAP! 🚀
        </p>
        <p className="text-6xl font-bold tracking-tight pt-5 text-green-900">
          $10
        </p>{" "}
        {/* Updated text color */}
        <p className="py-1 text-sm text-green-800">One Time Payment</p>{" "}
        {/* Updated text color */}
        <div className="pt-3 flex flex-col gap-2">
          <a
            className="w-full bg-green-300 text-green-900 font-medium text-center py-2 mt-3 rounded-md hover:bg-green-400 hover:text-green-100 transition duration-200"
            target="_blank"
            href="https://cutt.ly/10dwebsite"
          >
            Submit Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
