import { useState, useEffect, useMemo } from "react";
import { MainLogo, Chip, SearchBar } from "@/components";
import { useNavigate } from "react-router-dom";
import metadata, { tagData, getRandomTag } from "@/memedata";
import "./style.css";
import { addHash } from "@/utils/index";

export const MainPage = (): JSX.Element => {
  const [renderTagList, setRenderTagList] = useState<string[]>([])
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const totalTagList = useMemo(() => tagData(), [metadata]);
  const navigate = useNavigate();
  const navigateResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchKeyword) 
      navigate(`/result?name=${searchKeyword}&type=text`);
  }

  useEffect(() => {
    setRenderTagList(getRandomTag(3, totalTagList))
  }, [])

  return (
    <div className="mainpage">
      <div className="main-logo">
        <MainLogo />
      </div>
      <div className="search-section">
        <SearchBar onSubmit={navigateResult} setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} placeholder="검색어를 입력해주세요." />
        <div className="chip-section">
          {renderTagList.map((item, index) => (
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
