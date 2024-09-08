import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Carousal from "../components/carousal/Crousal";
import { Content } from "./constants/InsightsContent";
import Block from "@/components/block/Block";

const MainComponent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center py-10">
      <div className="flex-1 flex justify-center items-center">
        <img
          src="./Mandala.svg"
          alt="Image"
          className="w-1/2 md:w-1/3 lg:w-1/4"
        />
      </div>
      <div className="flex-1 flex-col items-start justify-center mt-12 space-y-8 px-4 lg:px-0">
        <h1 className="text-3xl md:text-5xl font-normal text-yellow-900">
          Welcome
        </h1>
        <p className="text-yellow-800 font-light text-base md:text-lg max-w-xl">
          Our spiritual practice is dedicated to helping clients overcome life
          obstacles. We create a safe environment for personal growth, inner
          healing, and overall well-being. Join our Healing Haven program.
        </p>
      </div>
    </div>
  );
};

const BookNow = () => {
  return (
    <div className="bg-yellow-200 p-8 md:p-16 text-center rounded-xl m-4 md:m-16">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-900">
        Embark on Your Spiritual Journey Today!
      </h1>
      <p className="text-sm md:text-lg mb-4 px-4 md:px-16 py-2 text-yellow-900">
        Discover diverse spiritual therapies tailored to your unique needs.
      </p>
      <button className="bg-white text-yellow-900 font-bold py-2 px-4 rounded-xl hover:bg-yellow-400 text-sm md:text-lg">
        Explore Therapies Now
      </button>
    </div>
  );
};

const InsightsSection = () => {
  return (
    <div className="flex flex-col items-center p-8 md:p-16">
      <div className="pb-4 md:pb-9 font-bold text-2xl md:text-3xl text-yellow-900">
        Tailored Spiritual Experiences Await You
      </div>
      <div className="space-y-4">
        <Button className="bg-yellow-200 text-yellow-900 mr-4 rounded-xl text-sm md:text-base py-2 px-4 text-center hover:bg-yellow-300">
          Begin Your Healing
        </Button>
        <Button className="bg-yellow-200 text-yellow-900 rounded-xl text-sm md:text-base text-center hover:bg-yellow-300">
          Discover Our Services
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-16">
        {Content.map((element) => (
          <Block
            heading={element.heading}
            desc={element.desc}
            icon={element.icon}
            key={element.index}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 md:p-7 bg-gradient-to-b from-white to-yellow-100">
      <Header />
      <MainComponent />
      <BookNow />
      <InsightsSection />
      <Carousal />
      <Footer />
    </main>
  );
}
