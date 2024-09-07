const Card = () => {
  return (
    <div className="bg-yellow-50 hover:shadow-yellow-300 hover:shadow-md rounded-lg bg-yellow-50/30 border border-yellow-200">
      {" "}
      {/* Updated to soft yellow colors */}
      <div className="p-1 rounded-t-lg bg-yellow-300"></div>{" "}
      {/* Updated top border color */}
      <div className="flex flex-col rounded p-5 lg:p-8">
        <h3 className="text-3xl text-yellow-900 font-bold">Fast-Track</h3>{" "}
        {/* Updated text color */}
        <p className="py-1 text-sm text-yellow-800">
          {" "}
          {/* Updated text color */}
          Why wait 60 days? Skip the line and Get your tool listed ASAP! 🚀
        </p>
        <p className="text-6xl font-bold tracking-tight pt-5 text-yellow-900">
          $10
        </p>{" "}
        {/* Updated text color */}
        <p className="py-1 text-sm text-yellow-800">One Time Payment</p>{" "}
        {/* Updated text color */}
        <div className="pt-3 flex flex-col gap-2">
          <a
            className="w-full bg-yellow-300 text-yellow-900 font-medium text-center py-2 mt-3 rounded-md hover:bg-yellow-400 hover:text-yellow-100 transition duration-200"
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
