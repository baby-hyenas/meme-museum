import { useState } from "react";
import { MainLogo, Chip, SearchBar } from "@/components";
import { useNavigate } from "react-router-dom";
import { tagData, getRandomTag } from "@/memedata";
import "./style.css";
import { addHash } from "@/utils/index";

export const MainPage = (): JSX.Element => {
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const navigate = useNavigate();
  const navigateResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchKeyword) {
      return;
    } else {
      navigate(`/result?name=${searchKeyword}&type=text`);
    }
  }

  return (
    <div className="mainpage">
      <div className="main-logo">
        <MainLogo />
      </div>
      <div className="search-section">
        <SearchBar onSubmit={navigateResult} setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} placeholder="검색어를 입력해주세요." />
        <div className="chip-section">
          {getRandomTag(3, tagData()).map((item, index) => (
            <Chip
              key={index}
              text={addHash(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
