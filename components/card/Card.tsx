import Link from "next/link";

interface CardProps {
  image: string;
  heading: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, heading, link }: CardProps) => {
  return (
    <Link href={link}>
      {/* Wrapping the entire card in Link to make it clickable */}
      <div className="bg-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 rounded-lg p-6 flex flex-col justify-between max-w-sm mx-auto border border-gray-200 cursor-pointer">
        <div>
          {/* Image Section */}
          <div className="flex justify-center mb-6">
            <img
              src={image}
              alt={heading}
              className="w-80 h-80 object-cover rounded-lg shadow-sm transition-transform transform hover:scale-110 duration-300"
            />
          </div>

          {/* Heading Section */}
          <h3
            className="text-2xl font-semibold text-green-900 text-center mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {heading}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
