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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PThQT1eMEog?si=nCbDlXDbe4V7f0ol"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex-1 flex-col items-start justify-center mt-12 space-y-8 px-4 lg:px-0">
        <h1 className="text-3xl md:text-5xl font-normal text-green-900">
          What is Energy Healing?
        </h1>
        <p className="text-green-800 font-light text-base md:text-lg max-w-xl">
          Energy <b>healing</b> serves as a refreshing oasis amidst the demands
          and challenges of our daily lives.
          <br />
          In a world often filled with stress and fast-paced routines, energy
          healing offers a sanctuary for rejuvenation and balance. Just as an
          oasis provides a respite in a desert, energy healing allows
          individuals to reconnect with their inner selves, promoting relaxation
          and emotional well-being.
          <br />
          It acts as a powerful tool for restoring harmony, helping to alleviate
          the burdens of everyday life and fostering a sense of peace and
          clarity. Embracing energy healing can transform the way we navigate
          our daily challenges, providing a vital source of support and renewal.
        </p>
      </div>
    </div>
  );
};

const BookNow = () => {
  return (
    <div className=" p-8 md:p-16 text-center rounded-xl m-4 md:m-16">
      <h1 className="text-3xl md:text-4xl font-bold text-green-900">
        Embark on Yiritual Journey Today!
      </h1>
      <p className="text-sm md:text-lg mb-4 px-4 md:px-16 py-2 text-green-900">
        Discover diverse spiritual therapies tailored to your unique needs.
      </p>
      <button className="bg-white text-green-900 font-bold py-2 px-4 rounded-xl hover:bg-green-400 text-sm md:text-lg">
        Explore Therapies Now
      </button>
    </div>
  );
};

const InsightsSection = () => {
  return (
    <div className="flex flex-col items-center p-8 md:p-16">
      <div className="pb-4 md:pb-9 font-bold text-2xl md:text-3xl text-green-900">
        Tailored Spiritual Experiences Await You
      </div>
      <div className="space-y-4">
        <Button className="bg-green-200 text-green-900 mr-4 rounded-xl text-sm md:text-base py-2 px-4 text-center hover:bg-green-300">
          Begin Your Healing
        </Button>
        <Button className="bg-green-200 text-green-900 rounded-xl text-sm md:text-base text-center hover:bg-green-300">
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
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-gradient-to-b from-white to-green-100 ">
      <Header />
      <MainComponent />
      <BookNow />
      <InsightsSection />
      <Carousal />
      <Footer />
    </main>
  );
}
