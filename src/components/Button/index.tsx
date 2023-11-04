import React, { useState } from "react";
import "./style.css";

type SearchButtonProps = {
  className: string
}

export const SearchButton: React.FC<SearchButtonProps> = ({ className }: SearchButtonProps) => {
  const [property, setProperty] = useState<"search-default" | "search-hover">("search-default");

  const handleMouseOver = () => {
    setProperty("search-hover");
  };

  const handleMouseOut = () => {
    setProperty("search-default");
  };

  return (
    <div className={`component ${property} ${className}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <img className="union" alt="Union" src="assets/search.svg" />
    </div>
  );
};