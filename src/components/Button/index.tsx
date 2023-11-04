import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

type SearchButtonProps = {
  className: string
}

export const SearchButton: React.FC<SearchButtonProps> = ({ className }: SearchButtonProps) => {
  const [property, setProperty] = useState<"search-default" | "search-hover">("search-default");
  const navigate = useNavigate();
  const gotoResult = () => {
    navigate('/result');
  };
  const handleMouseOver = () => {
    setProperty("search-hover");
  };
  const handleMouseOut = () => {
    setProperty("search-default");
  };

  return (
    <div className={`component ${property} ${className}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={gotoResult}>
      <img className="union" alt="Union" src="assets/search.svg" />
    </div>
  );
};