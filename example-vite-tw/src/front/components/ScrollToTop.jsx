import { useEffect, useRef } from "react";

/**
 * Props para ScrollToTop
 * @param {object} location - Ubicación actual (por ejemplo, de React Router)
 * @param {React.ReactNode} children - Elementos hijos
 */
const ScrollToTop = ({ location, children }) => {
  const prevLocation = useRef(location);

  useEffect(() => {
    if (location !== prevLocation.current) {
      window.scrollTo(0, 0);
      prevLocation.current = location;
    }
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;