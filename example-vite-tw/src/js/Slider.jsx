import { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const images = [
  "https://media.admagazine.com/photos/618a62c190c4ec9a52ca0f56/master/w_1600%2Cc_limit/82871.jpg",
  "https://i.ytimg.com/vi/08xNeKBokzo/maxresdefault.jpg",
  "https://www.hola.com/horizon/landscape/9877c3ad8d1a-suculentas1-t.jpg",
  "https://www.floresyplantas.net/wp-content/uploads/terrario-de-plantas-suculentas-y-catus-2.jpg",
];

const extendedImages = [
  images[images.length - 1], // último al inicio
  ...images,
  images[0], // primero al final
];

const SLIDE_WIDTH = 90; // %

const Slider = () => {
  const [current, setCurrent] = useState(1); // empieza en el primer slide real
  const [transition, setTransition] = useState(true);
  const intervalRef = useRef();

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
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
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
        className="hidden lg:flex absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronLeftIcon aria-hidden="true" className="size-5 flex-none text-gray-400"/>
      </button>

      {/* Botón siguiente */}
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
          nextSlide();
        }}
        className="hidden lg:flex absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronRightIcon className="size-5 flex-none text-gray-400"/>
      </button>
    </div>
  );
};

export default Slider;