import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';  // Import ReactDOM for rendering the application
// verificar si hay que instalar independencias
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./front/routes";  // Import the router configuration
import { StoreProvider } from './front/hooks/useGlobalReducer';  // Import the StoreProvider for global state management
import { BackendURL } from './front/components/BackendURL'; // Import the BackendURL component to handle missing env variable

import Home from './front/Home';

import './index.css'

const Main = () => {
    
    // if(! import.meta.env.VITE_BACKEND_URL ||  import.meta.env.VITE_BACKEND_URL == "") return (
    //     <React.StrictMode>
    //           <BackendURL />
    //     </React.StrictMode>
    //     );
    return (
        <React.StrictMode>  
            {/* Provide global state to all components */}
            <StoreProvider> 
                {/* Set up routing for the application */} 
                <RouterProvider router={router}>
                </RouterProvider>
            </StoreProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
//ReactDOM.createRoot(document.getElementById('root')).render(<Home />)

