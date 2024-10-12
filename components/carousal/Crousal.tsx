import { Content } from "@/app/constants/InsightsContent";
import Card from "./../card/Card";


const HEALING_TYPES_CONSTANTS = {
  reiki: {
    image: "/reiki.png",
    heading: "Reiki: Healing from Within, Transform Your World",
    link: "/reiki", // Link to a dedicated page
  },
  tarot_reading: {
    image: "/tarot-card.png",
    heading: "Tarot Reading: Discover Clarity and Insight",
    link: "/tarot_reading",
  },
  numberology: {
    image: "/numerology.png",
    heading: "Numerology: Unlocking the Power of Numbers",
    link: "/numerology",
  },
  life_coach: {
    image: "/life-coach.png",
    heading: "Life Coaching for a Balanced and Purposeful Modern Life",
    link: "/life_coaching",
  },
  switch_words: {
    image: "/switch-word.png",
    heading: "Switch Words: Transform Your Thoughts, Transform Your Life",
    link: "/switch_words",
  },
  vastu: {
    image: "/vastu.png",
    heading: "Vastu: Harmonizing Spaces, Elevating Lives",
    link: "/vastu",
  },
  pranic_healing: {
    image: "/Pranic.png",
    heading: "Pranic Healing: Harnessing Life Energy for Holistic Wellness",
    link: "/pranic_healing",
  },
};
const Carousal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 cursor-pointer">
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
