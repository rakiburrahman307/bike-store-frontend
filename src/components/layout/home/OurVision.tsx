import { Button } from "../../ui/button";
import VisionCard from "./VisionCard";

const OurVision = () => {
  const visionCards = [
    {
      title: "Empowering Cyclists",
      description:
        "We empower cyclists to ride more by providing a wide range of bikes, accessories, and services tailored to individual needs.",
    },
    {
      title: "Custom Bike Builds",
      description:
        "Whether you're a commuter or an enthusiast, we offer custom bike builds tailored to your specific preferences and needs.",
    },
    {
      title: "Expert Maintenance",
      description:
        "From tune-ups to full overhauls, our expert team ensures that your bike stays in top condition for a smooth ride.",
    },
    {
      title: "Sustainability Commitment",
      description:
        "We're committed to sustainability by offering eco-friendly bike products, reducing waste, and promoting green cycling practices.",
    },
    {
      title: "Join the Cycling Community",
      description:
        "We foster a sense of community by organizing group rides, workshops, and events to connect cyclists of all levels.",
    },
    {
      title: "Bike Rentals",
      description:
        "Whether you're here for a day trip or a long weekend adventure, we offer bike rentals to suit all your cycling needs.",
      additionalInfo:
        "Choose from a variety of bikes including mountain, road, and electric bikes. Rental rates are available on request.",
    },
    {
      title: "Bike Accessories",
      description:
        "Enhance your cycling experience with our high-quality accessories, including helmets, pedals, lights, and more.",
    },
    {
      title: "Bike Safety",
      description:
        "Your safety is our priority. We provide top-rated bike safety gear such as helmets, gloves, knee guards, and reflective vests.",
    },
  ];

  return (
    <div className='py-12'>
      {/* Section Heading */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-semibold'>Our Vision</h2>
        <p className='text-lg mt-2'>
          At RideOn Bikes, we envision a world where cycling is accessible,
          sustainable, and enjoyable for everyone.
        </p>
      </div>

      {/* Multi-column Layout with Interactive Animation */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {visionCards.map((card, index) => (
          <VisionCard
            key={index}
            title={card.title}
            description={card.description}
            additionalInfo={card.additionalInfo}
          />
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className='text-center mt-12'>
        <Button
          variant='outline'
          size='lg'
          className='text-blue-600 hover:text-blue-800'
        >
          Learn More About Us
        </Button>
      </div>
    </div>
  );
};

export default OurVision;
