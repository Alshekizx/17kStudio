import { useMemo } from "react";
import { Link } from "react-router-dom";

const useNavigation = () => {
  const navigationLinks = useMemo(
    () => [
      { to: "../components/body.jsx", label: "Home" },
      { to: "../components/Project.jsx", label: "Project" },
      { to: "../components/About.jsx", label: "About" },
      { to: "../components/Contact.jsx", label: "Contact" },
    ],
    []
  );

  return navigationLinks;
};

export default useNavigation;
