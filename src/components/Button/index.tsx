import React from "react";
import "./style.css";

type SearchButtonProps = {
  onClickedButton?: () => void
}

export const SearchButton: React.FC<SearchButtonProps> = ({ onClickedButton }: SearchButtonProps) => {
  return (
    <div className="button-search" onClick={onClickedButton}>
      <div className="union" />
    </div>
  );
};