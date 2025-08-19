import { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const SLIDE_WIDTH = 90; // %

const Slider = (props) => {
  const [current, setCurrent] = useState(1); // empieza en el primer slide real
  const [transition, setTransition] = useState(true);
  const intervalRef = useRef();

  const extendedImages = [
    props.images[props.images.length - 1], // último al inicio
    ...props.images,
    props.images[0], // primero al final
  ];


  // Avanza el slide
  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  // Retrocede el slide
  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    setTransition(true);
  };

  // Efecto para el auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Efecto para el loop infinito
  useEffect(() => {
    if (current === extendedImages.length - 1) {
      // Si está en el clon del primero, salta al primero real sin transición
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 500);
    }
    if (current === 0) {
      // Si está en el clon del último, salta al último real sin transición
      setTimeout(() => {
        setTransition(false);
        setCurrent(extendedImages.length - 2);
      }, 500);
    }
  }, [current]);

  // Reactiva la transición después del salto
  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  return (
    <div className="group/slider relative w-full max-w-9/10 mx-auto px-6">
      <div className="relative mt-4 w-full">
        <div className="overflow-hidden">
          <div
            className={`flex ${transition ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${current * SLIDE_WIDTH}%)`
            }}
          >
            {extendedImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80%] mr-[10%] rounded-2xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-full lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Botón anterior */}
          <button
            onClick={() => {
              clearInterval(intervalRef.current);
              prevSlide();
            }}
            className="hidden lg:flex absolute top-1/2 -left-10 -translate-y-1/2 p-2 rounded-full duration-700 ease-in-out hover:bg-gray-200"
          >
            <ChevronLeftIcon aria-hidden="true" className="size-5 flex-none text-gray-400"/>
          </button>

          {/* Botón siguiente */}
          <button
            onClick={() => {
              clearInterval(intervalRef.current);
              nextSlide();
            }}
            className="hidden lg:flex absolute top-1/2 -right-10 -translate-y-1/2 p-2 rounded-full duration-700 ease-in-out hover:bg-gray-200"
          >
            <ChevronRightIcon className="size-5 flex-none text-gray-400"/>
          </button>

        </div>
      </div>  
    </div>
  );
};

export default Slider;