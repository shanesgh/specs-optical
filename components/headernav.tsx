"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "./navigation";

const HeaderNav = () => {
  const pathname = usePathname();
  const [hoveredRoute, setHoveredRoute] = useState("");

  return (
    <Navigation
      pathname={pathname}
      hoveredRoute={hoveredRoute}
      setHoveredRoute={setHoveredRoute}
    />
  );
};

export default HeaderNav;
