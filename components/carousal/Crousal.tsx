import { Content } from "@/app/constants/InsightsContent";
import Card from "./../card/Card";

const HEALING_TYPES_CONSTANTS = {
  reiki: {
    image: "/reiki.png",
    heading: "Reiki: Healing from Within, Transform Your World",
    link: "/reiki", // Link to a dedicated page
  },

  pranic_healing: {
    image: "/Pranic.png",
    heading: "Pranic Healing: Harnessing Life Energy for Holistic Wellness",
    link: "/pranic_healing",
  },
};
const Carousal = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 cursor-pointer"
      id="healing-types"
    >
      {Object.values(HEALING_TYPES_CONSTANTS).map((healingType, index) => (
        <Card
          key={index}
          image={healingType.image}
          heading={healingType.heading}
          link={`healings/${healingType.link}`}
        />
      ))}
    </div>
  );
};

export default Carousal;
