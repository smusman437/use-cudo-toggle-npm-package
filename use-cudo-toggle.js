import React, { useState } from "react";

const useCudoToggle = (active = false) => {
  const [isActive, setIsActive] = useState(active);
  return [isActive, setIsActive];
};

export default useCudoToggle;
