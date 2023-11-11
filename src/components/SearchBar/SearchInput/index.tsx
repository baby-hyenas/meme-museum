import "./style.css";
import { ChangeEvent } from "react";

type SearchInputProps = {
  placeholder?: string
  searchKeyword: string
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>
}

export const SearchInput = ({ placeholder, searchKeyword, setSearchKeyword }: SearchInputProps): JSX.Element => {
  return (
    <input className="search-input"
      placeholder={placeholder}
      type="search"
      maxlength="40"
      value={searchKeyword}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
    />
  );
};
