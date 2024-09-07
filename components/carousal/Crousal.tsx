import Card from "./../card/Card";

const Carousal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 p-10">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Carousal;
