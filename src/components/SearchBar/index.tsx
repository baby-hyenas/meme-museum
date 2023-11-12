import React from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

import "./style.css";

type SearchBarProps = {
  placeholder?: string,
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void,
  searchKeyword: string
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSubmit, searchKeyword, setSearchKeyword }: SearchBarProps) => {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <div className="search-input">
        <SearchInput
          placeholder={placeholder}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </div>
      <div className="search-button">
        <SearchButton />
      </div>
    </form>
  );
};