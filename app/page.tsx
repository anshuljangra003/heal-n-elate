import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Carousal from "./../components/carousal/Crousal";
import { Content } from "./constants/InsightsContent";
import Block from "@/components/block/Block";

const MainComponent = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="flex flex-1 justify-center items-center">
        <img src="./Mandala.svg" alt="Image" width={"40%"} height={"40%"} />
        <img
          src="./Mandala.svg"
          alt="Image"
          width={"20%"}
          height={"20%"}
          className="sticky"
        />
        <img
          src="./Mandala.svg"
          alt="Image"
          width={"10%"}
          height={"10%"}
          className="sticky"
        />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center mt-12 space-y-8 px-4 lg:px-0 ml-10">
        <h1 className="text-4xl lg:text-5xl font-normal text-yellow-900">
          {" "}
          {/* Update to a soft color */}
          Welcome
        </h1>
        <p className="text-yellow-800 font-light text-lg max-w-xl">
          {" "}
          {/* Update to a soft color */}
          Our spiritual practice is dedicated to helping clients overcome life
          obstacles. We aim to create a safe environment where individuals can
          undergo personal growth, foster inner healing, and achieve overall
          well-being.
          <br />
          <br />
          Please see our offering list for virtual and in-person sessions,
          events & gatherings, and join our corporate wellness program - Healing
          Haven.
          <br />
          <br />
          All of our services can be paid on a sliding scale. We are so grateful
          you are here and look forward to working with you.
        </p>
      </div>
    </div>
  );
};

const BookNow = () => {
  return (
    <div className="bg-yellow-200 p-16 text-center rounded-xl m-16">
      {" "}
      {/* Soft yellow background */}
      <h1 className="text-4xl font-bold text-yellow-900">
        {" "}
        {/* Soft color text */}
        Embark on Your Spiritual Journey
      </h1>
      <h1 className="text-4xl font-bold text-yellow-900">Today!</h1>
      <p className="text-lg mb-4 px-16 py-2 text-yellow-900">
        Discover a world of healing through diverse spiritual therapies tailored
        to your unique needs. Connect with experienced practitioners and find
        peace and balance in your life.
      </p>
      <button className="bg-white text-yellow-900 font-bold py-2 px-4 rounded-xl hover:bg-yellow-400">
        Explore Therapies Now
      </button>
    </div>
  );
};

const InsightsSection = () => {
  return (
    <div className="flex flex-col content-center items-center p-16">
      <div className="pb-9 font-bold text-3xl text-yellow-900">
        {" "}
        {/* Update to a soft color */}
        <h2>Tailored Spiritual Experiences Await You</h2>
      </div>
      <div>
        <Button className="bg-yellow-200 text-yellow-900 mr-4 rounded-xl text-base py-2 px-4 text-center hover:bg-yellow-300">
          {" "}
          {/* Soft color background */}
          Begin Your Healing
        </Button>
        <Button className="bg-yellow-200 text-yellow-900 rounded-xl text-base text-center hover:bg-yellow-300">
          {" "}
          {/* Soft color background */}
          Discover Our Services
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-16">
        {Content.map((element) => {
          return (
            <Block
              heading={element.heading}
              desc={element.desc}
              icon={element.icon}
              key={element.index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-gradient-to-b from-white to-yellow-100">
      <Header />
      <MainComponent />
      <BookNow />
      <div>
        <InsightsSection />
      </div>
      <Carousal />
      <div>
        <Footer />
      </div>
    </main>
  );
}
