import Link from "next/link";

interface CardProps {
  image: string;
  heading: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, heading, link }: CardProps) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg p-6 flex flex-col justify-between">
      <div>
        {/* Image Section */}
        <div className="flex justify-center mb-6">
          <img
            src={image}
            alt={heading}
            className="w-80 h-80 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Heading Section */}
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4"
        style={{ fontFamily: "Cormorant Garamond, serif" }}>
          {heading}
        </h3>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-6">
        <Link href={link}>
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-green-600 transition-colors duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
