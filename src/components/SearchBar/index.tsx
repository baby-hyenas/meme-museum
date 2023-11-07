import React from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

import "./style.css";

type SearchBarProps = {
  placeholder?: string,
  onSubmit?: () => void
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSubmit }: SearchBarProps) => {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <div className="search-input">
        <SearchInput placeholder={placeholder} />
      </div>
      <div className="search-button">
        <SearchButton />
      </div>
    </form>
  );
};