interface BlockProps {
  heading: string;
  icon: string;
  desc: string;
}

const Block = (props: BlockProps) => {
  const { heading, icon, desc } = props;

  return (
    <div className="flex flex-col items-center m-3">
      <div className="mb-5">
        <img src={icon} alt="image" width={40} height={40} />
      </div>
      <div className="font-semibold text-lg">
        <span>{heading}</span>
      </div>
      <div className="text-center text-base">
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default Block;
