import { ChangeEvent, useState, useEffect, useMemo } from "react";
import { AutoComplete } from "./AutoComplete";
import { includeByCho } from "@/utils";
import metadata, { tagtitleData } from "@/memedata"
import "./style.css";

type SearchInputProps = {
  placeholder?: string
  searchKeyword: string
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>
}

export const SearchInput = ({ placeholder, searchKeyword, setSearchKeyword }: SearchInputProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const totalTagTitleList = useMemo(() => tagtitleData(), [metadata]);

  const handleSuggestionClick = (suggestion: string) => {
    setSuggestions([]);
    setSearchKeyword(suggestion);
  };

  useEffect(() => {
    if (searchKeyword.length === 0) {
      setSuggestions([]);
      return;
    }

    let newSuggestions: string[] = [];
    if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(searchKeyword)) {
      newSuggestions = totalTagTitleList.filter((item) => includeByCho(searchKeyword, item));
    } else {
      newSuggestions = totalTagTitleList.filter((item) => item.indexOf(searchKeyword) >= 0);
    }
    setSuggestions(newSuggestions.slice(0, 10));
  }, [searchKeyword])

  return (
    <>
      <input className="search-input"
        placeholder={placeholder}
        type="search"
        maxLength={40}
        value={searchKeyword}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
      />
      {(isFocus && suggestions.length > 0) && (
        <AutoComplete suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
      )}
    </>
  );
};
