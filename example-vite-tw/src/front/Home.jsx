import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Slider from './components/Slider.jsx';

const collections = [
    { id: 1, name: "Cuerno de alce", price: 100.50, image: "https://orchideeen-shop.nl/cdn/shop/articles/lucas-hoang-VIYcvD-NkME-unsplash1.jpg?v=1710246665" },
    { id: 2, name: "Alocasia Negra", price: 90.00, image: "https://www.jardineriaon.com/wp-content/uploads/2022/09/alocasia-plumbea-nigra.jpg" },
    { id: 3, name: "Helecho Babilónico", price: 55.50, image: "https://uploads.tiendada.com/public/file-storage/im/product/vil0lztcpf9yy6yrxqqb.jpg" },
    { id: 4, name: "Orquídea Epidendrum", price: 30, image: "https://i.ytimg.com/vi/QD2nrlikFOc/maxresdefault.jpg" },
    { id: 5, name: "Anturio Joli", price: 70, image: "https://mindcms-main.s3.eu-west-2.amazonaws.com/dXBkYXRlLW1pbmRjbXMtbmw%3D/66d92f2a1b1f6/anturio-para-maceta-joli-blush-rosado-205735-0.jpg" },
    { id: 6, name: "Monstera Thai Constellation", price: 80, image: "https://www.growjungle.com/cdn/shop/files/IMG_9413.heic?v=1738222660&width=1946" },
    { id: 7, name: "Philodendron Xanadu", price: 110, image: "https://plantszen.com/cdn/shop/files/154b1ece-9696-44d9-9b85-7e5ce4d0b3b0.jpg?v=1741300797&width=1946" },
    { id: 8, name: "Culantrillo", price: 150, image: "https://crecerplantas.com/wp-content/uploads/2024/04/Adiantum.png" },
];

const Home = () => {
    const [ actual, setActual ] = useState(0);

    const [isMobile, setIsMobile] = useState(false);

    const siguiente = () => {
            setActual(actual + 1);
    }

    const anterior = () => {
            setActual(actual - 1);
    }
    //console.log(actual); 

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)'); // Ajusta el ancho según tus necesidades
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
        setIsMobile(mediaQuery.matches);
        };

        if (actual > (Math.floor(collections.length/2)-1)) {
            // Si está en el primero
            setTimeout(() => {
                setActual(0);
            }, 100);
        }
        if (actual < 0) {
            // Si está en el último
            setTimeout(() => {
                setActual(3);
            }, 100);
        }

        mediaQuery.addEventListener('change', handleResize);
        return () => {
            console.log(isMobile);
            mediaQuery.removeEventListener('change', handleResize);
        };
  }, [actual]);

    return (
        <div>
            <Slider/>
            <div className="w-full max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Las Ofertas Del Mes!</h2>
                {/* <p className="text-gray-600">Explore our curated collections of products.</p> */}
                <div className="relative mt-4 w-full">
                    <div className="overflow-hidden">
                        <div className="flex mt-4 transition-transform duration-500 ease-in-out transform" style={{ transform: isMobile ? `translateX(-${actual * 100}%)` : `translateX(-${actual * 20}%)` }}>  
                        {
                            collections.map((desc, index) =>{
                                return(
                                    <div key={index} className="cursor-pointer w-1/2 lg:w-1/5 flex-shrink-0 ">
                                        <div className='bg-gray-100 p-4 m-3 shadow hover:shadow-lg transition-shadow duration-300' >
                                            <div className="rounded-lg">
                                                <img 
                                                    src={desc.image} 
                                                    alt={desc.name} 
                                                    className="w-full h-24 lg:h-48 object-cover rounded-lg mb-2" 
                                                />
                                            </div>
                                            <div>
                                                <h3>{desc.name}</h3>
                                            </div>
                                            <div>
                                                <p className="text-gray-600 mt-1">s/ {desc.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        </div>
                        <button 
                            onClick={()=>{
                                anterior();
                        }} 
                        className="absolute lg:-left-10 -left-5 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
                            <ChevronLeftIcon aria-hidden="true" className="size-5 flex-none text-gray-400"/>
                        </button>
                        <button 
                            onClick={()=>{
                            siguiente();
                        }} 
                        className="absolute lg:-right-10 -right-5 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow">
                            <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;