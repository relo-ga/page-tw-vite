import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router";

const ProductDetail = () =>{
    const {store, dispatch} = useGlobalReducer();
    const {id} = useParams();
    const product = store.collections.find(item => item.id === parseInt(id));

    return(
        <>
            <div className="w-full max-w-9/10 mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
                <h2 className="text-3xl font-semibold mb-4 text-center">Detalle del Producto</h2>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                        <img src={product.image} alt="" className="object-cover rounded-lg" />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-6">
                        <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-xl font-bold">Precio: s/ {product.price?.toFixed(2)}</p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;