import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const images = [
  "https://media.admagazine.com/photos/618a62c190c4ec9a52ca0f56/master/w_1600%2Cc_limit/82871.jpg",
  "https://i.ytimg.com/vi/08xNeKBokzo/maxresdefault.jpg",
  "https://www.hola.com/horizon/landscape/9877c3ad8d1a-suculentas1-t.jpg",
];

const Navbar = () =>{
    const [banner, setBanner] = useState();
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 4000); // 4 segundos

        return () => clearInterval(interval);
    }, []);

    return(
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 90}%)` }}
            >
                {images.map((img, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 w-[80%] mr-[10%] rounded-2xl overflow-hidden"
                >
                    <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                </div>
                ))}
            </div>

            {/* Botón anterior */}
            <button
                onClick={prevSlide}
                className="hidden lg:flex absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <ChevronLeftIcon aria-hidden="true" className="size-5 flex-none text-gray-400"/>


            </button>

            {/* Botón siguiente */}
            <button
                onClick={nextSlide}
                className="hidden lg:flex absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <ChevronRightIcon className="size-5 flex-none text-gray-400"/>

            </button>
        </div>
    );
}

export default Navbar;