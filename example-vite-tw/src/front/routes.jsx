import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import {Layout} from "./pages/Layout";
import Home from "./Home";


export const router = createBrowserRouter(
    createRoutesFromElements(
      // Root Route: All navigation will start from here.
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
            {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
            <Route path= "/" element={<Home />} />
        </Route>
    )
);