import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const collections = [
    { id: 1, name: "Collection 1" },
    { id: 2, name: "Collection 2" },
    { id: 3, name: "Collection 3" },
    { id: 4, name: "Collection 4" },
    { id: 5, name: "Collection 5" },
    { id: 6, name: "Collection 6" },
    { id: 7, name: "Collection 7" },
    { id: 8, name: "Collection 8" },
];

const collectionsPath = [
  collections[collections.length - 1], // último al inicio
  ...collections,
  collections[0], // primero al final
];

const CollectionsCard = () => {
    const [ actual, setActual ] = useState(0);

    const [isMobile, setIsMobile] = useState(false);

    const siguiente = () => {
            setActual(actual + 1);
    }

    const anterior = () => {
            setActual(actual - 1);
    }
    console.log(actual); 

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
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Collections</h2>
            <p className="text-gray-600">Explore our curated collections of products.</p>
            <div className="relative mt-4 w-full">
                <div className="overflow-hidden">
                    <div className="flex mt-4 transition-transform duration-500 ease-in-out transform translate-x-4" style={{ transform: isMobile ? `translateX(-${actual * 100}%)` : `translateX(-${actual * 20}%)` }}>  
                    {
                        collections.map((desc, index) =>{
                            return(
                                <div key={index} className="text-blue-500 hover:underline cursor-pointer w-1/2 lg:w-1/5 flex-shrink-0">{desc.name}</div>
                            );
                        })
                    }
                    </div>
                    <button 
                        onClick={()=>{
                            anterior();
                    }} 
                    className="absolute -left-10 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
                        <ChevronLeftIcon aria-hidden="true" className="size-5 flex-none text-gray-400"/>
                    </button>
                    <button 
                        onClick={()=>{
                        siguiente();
                    }} 
                    className="absolute -right-10 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow">
                        <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CollectionsCard;