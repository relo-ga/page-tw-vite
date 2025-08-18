const SliderCollection = (props) =>{

    return(
            <div className="cursor-pointer w-1/2 lg:w-1/5 flex-shrink-0 ">
                <div className='bg-gray-100 p-4 m-3 shadow hover:shadow-lg transition-shadow duration-300' >
                    <div className="rounded-lg">
                        <img 
                            src={props.collection.image} 
                            alt={props.collection.name} 
                            className="w-full h-24 lg:h-48 object-cover rounded-lg mb-2" 
                        />
                    </div>
                    <div>
                        <h3>{props.collection.name}</h3>
                    </div>
                    <div>
                        <p className="text-gray-600 mt-1">s/ {props.collection.price?.toFixed(2)}</p>
                    </div>
                </div>        
            </div>    
    );
}

export default SliderCollection