import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Slider from './components/Slider.jsx';
import SliderCollection from './components/SliderCollection.jsx';
import useGlobalReducer from './hooks/useGlobalReducer.jsx';

const Home = () => {
    const {store, dispatch} = useGlobalReducer();

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
    
            if (actual > (Math.floor(store.collections.length/2)-1)) {
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
            <Slider images={store.images_slider} />
            {/* Ofertas del mes */}
            <div className="w-full max-w-9/10 mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
                <h2 className="text-3xl font-semibold mb-4 text-center">Las Ofertas Del Mes!</h2>
                <div className="relative mt-4 w-full">
                    <div className="overflow-hidden">
                        <div className="flex mt-4 transition-transform duration-500 ease-in-out transform" style={{ transform: isMobile ? `translateX(-${actual * 100}%)` : `translateX(-${actual * 20}%)` }}>  
                            {
                                store.collections.map((collection, index) => {
                                    return (
                                        <SliderCollection key={index} collection={collection} />
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

            {/* Inspiracion */}
            <div className='w-full max-w-9/10 mx-auto mt-6 pt-6'>
                <h1 className="text-3xl font-semibold mb-4 text-center">¿Cómo decorar?</h1>
                <div className='lg:flex md:flex-wrap justify-around mx-auto'>
                    <div className="rounded-lg flex-shrink-0 py-4 my-3">
                        <img 
                            src="https://www.muebleydeco.com/wp-content/uploads/2019/03/Imagen-destacada-3.jpg" 
                            className="w-full h-100 lg:w-100 object-cover rounded-lg mb-2" 
                        />
                    </div>
                    <div className="rounded-lg flex-shrink-0 lg:px-6 py-4 my-3">
                        <img 
                            src="https://images.homify.com/v1441997200/p/photo/image/899908/12._Jard%C3%ADn_Interior.jpg"
                            className="w-full h-100 lg:w-100 object-cover rounded-lg mb-2" 
                        />
                    </div>
                    <div className="rounded-lg flex-shrink-0 py-4 my-3">
                        <img 
                            src="https://content.elmueble.com/medio/2023/04/13/plantas-que-no-hay-que-cambiar-de-maceta_d8e2242f_00512857_230413102513_900x900.jpg"
                            className="w-full h-100 lg:w-100 object-cover rounded-lg mb-2" 
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;