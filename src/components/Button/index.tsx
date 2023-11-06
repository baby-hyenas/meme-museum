import React, { useState } from "react";
import "./style.css";

type SearchButtonProps = {
  onClickedButton?: () => void
}

export const SearchButton: React.FC<SearchButtonProps> = ({ onClickedButton }: SearchButtonProps) => {
  const [property, setProperty] = useState<"search-default" | "search-hover">("search-default");

  const handleMouseOver = () => {
    setProperty("search-hover");
  };
  const handleMouseOut = () => {
    setProperty("search-default");
  };

  return (
    <div className={`component ${property}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClickedButton}>
      <div className="union" />
    </div>
  );
};