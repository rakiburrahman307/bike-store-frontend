import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What type of bikes do you offer?",
    answer:
      "We offer a wide variety of bikes including mountain bikes, road bikes, hybrid bikes, electric bikes, folding bikes, and more.",
  },
  {
    question: "Do you offer bike maintenance services?",
    answer:
      "Yes, we offer expert bike maintenance and repair services. Whether it’s a simple tune-up or a complete overhaul, our certified technicians are here to help keep your bike in top condition.",
  },
  {
    question: "Can I customize my bike?",
    answer:
      "Absolutely! We offer a variety of customization options including different frame sizes, colors, handlebar styles, and gear setups.",
  },
  {
    question: "Do you offer bike rentals?",
    answer:
      "Yes, we offer bike rentals for daily, weekly, or monthly rates. We have a variety of bikes available, including mountain bikes, road bikes, and electric bikes.",
  },
  {
    question: "What safety gear do you recommend?",
    answer:
      "We recommend wearing a helmet, gloves, knee pads, and reflective gear for safety. We offer a wide range of safety accessories.",
  },
  {
    question: "What brands of bikes do you carry?",
    answer:
      "We carry trusted bike brands such as Trek, Specialized, Cannondale, Giant, and more.",
  },
  {
    question: "How can I purchase a bike?",
    answer:
      "You can purchase bikes directly from our shop or online. We offer free shipping on many products.",
  },
  {
    question: "Do you offer bike accessories?",
    answer:
      "Yes, we offer a wide range of bike accessories such as helmets, locks, lights, pedals, tires, and bike maintenance tools.",
  },
  {
    question: "Can I return or exchange a bike?",
    answer:
      "We offer a return and exchange policy for bikes purchased within 30 days, in unused condition and with proof of purchase.",
  },
  {
    question: "Do you offer any warranties on bikes?",
    answer:
      "Yes, we offer warranties on all bikes, covering defects in material or workmanship. Warranty details vary by brand and model.",
  },
];

const FAQItem: React.FC<FAQ> = ({ question, answer }) => (
  <AccordionItem value={question}>
    <AccordionTrigger>{question}</AccordionTrigger>
    <AccordionContent>{answer}</AccordionContent>
  </AccordionItem>
);

const BikeShopFaq = () => {
  return (
    <div className="px-5 my-10">
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-semibold'>FAQ</h2>
        <p className='text-lg mt-2'>
          At RideOn Bikes faq for everyone.
        </p>
      </div>
      <Accordion type='single' collapsible className='w-full md:max-w-4xl mx-auto my-10'>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </Accordion>
    </div>
  );
};

export default BikeShopFaq;
