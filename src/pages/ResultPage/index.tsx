import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar, MasonryView, Chip } from "@/components";
import "./style.css";
import metadata from "@/memedata"

type ItemProp = {
  src?: string,
  link?: string,
  title: string,
  isHorizontal: number,
  tag?: string,
  year?: number
}

export const ResultPage = (): JSX.Element => {

  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [memeData, setMemeData] = useState<ItemProp[]>(metadata)

  const navigateResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/result?name=${searchKeyword}`)
  }



  return (
    <div className="resultpage">
      <div className="search-section">
        <SearchBar onSubmit={navigateResult} setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} placeholder="검색어를 입력해주세요." />
        <div className="chip-section">
          <Chip text="~2010" />
          <Chip text="2011~2020" />
          <Chip text="2020~" />
        </div>
      </div>
      <div className="result-section">
        <MasonryView items={memeData} />
      </div>
    </div >
  );
};
