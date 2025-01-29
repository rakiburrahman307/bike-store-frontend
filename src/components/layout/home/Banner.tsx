import { useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "../../ui/button";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  const slides = [
    "https://via.placeholder.com/1920x1080/FF5733/FFFFFF?text=Banner+1",
    "https://via.placeholder.com/1920x1080/33FF57/FFFFFF?text=Banner+2",
    "https://via.placeholder.com/1920x1080/3357FF/FFFFFF?text=Banner+3",
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  return (
    <div className='relative w-full h-screen'>
      {/* Carousel Wrapper */}
      <div className='overflow-hidden w-full h-full'>
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className='w-full h-full flex-shrink-0 relative flex items-center justify-center'
            >
              {/* Placeholder while image is loading */}
              {!loadedImages.includes(index) && (
                <div className='absolute top-64 inset-0 flex items-center justify-center bg-gray-300'>
                  <Loader2 className='h-10 w-10 text-gray-500 animate-spin' />
                </div>
              )}

              {/* Main Image */}
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  loadedImages.includes(index) ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        onClick={handlePrev}
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 p-2 rounded-full'
        aria-label='Previous'
      >
        <ChevronLeft />
      </Button>
      <Button
        onClick={handleNext}
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 p-2 rounded-full'
        aria-label='Next'
      >
        <ChevronRight />
      </Button>

      {/* Slide Indicators */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
