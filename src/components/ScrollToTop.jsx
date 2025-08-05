import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const { pathname, search } = location;

  useEffect(() => {
    const params = new URLSearchParams(search);
    const hasId = params.has("id");

    // Only scroll to top if there's NO specific item selected
    if (!hasId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
