import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SearchBar, MasonryView, ToggleChip } from "@/components";
import { ItemProps } from "@/types";
import "./style.css";
import metadata from "@/memedata"



export const ResultPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { params } = useParams();
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchResult,] = useState<ItemProps[]>(metadata);
  const [filteredResult, setFilteredResult] = useState<ItemProps[]>(searchResult);
  const [isFilterBelow2010, SetIsFilterBelow2010] = useState<boolean>(false);
  const [isFilterBetween20112020, SetIsFilterBetween20112020] = useState<boolean>(false);
  const [isFilterUpper2021, SetIsFilterUpper2021] = useState<boolean>(false);

  const navigateResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/result?name=${searchKeyword}`);
  }

  useEffect(() => {
    if (!isFilterBelow2010 && !isFilterBetween20112020 && !isFilterUpper2021) {
      setFilteredResult(searchResult);
      return;
    }

    let newFilteredResult: ItemProps[] = [];

    if (isFilterBelow2010) {
      newFilteredResult = [...newFilteredResult, ...searchResult.filter((p: ItemProps) => p.year != null && p.year <= 2010)];
    }

    if (isFilterBetween20112020) {
      newFilteredResult = [...newFilteredResult, ...searchResult.filter((p: ItemProps) => p.year != null && p.year > 2010 && p.year <= 2020)];
    }

    if (isFilterUpper2021) {
      newFilteredResult = [...newFilteredResult, ...searchResult.filter((p: ItemProps) => p.year != null && p.year > 2020)];
    }

    setFilteredResult(newFilteredResult);

  }, [isFilterBelow2010, isFilterBetween20112020, isFilterUpper2021]);

  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <div className="resultpage">
      <div className="search-section">
        <SearchBar onSubmit={navigateResult} setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} placeholder="검색어를 입력해주세요." />
        <div className="chip-section">
          <ToggleChip text="~2010" setToggle={SetIsFilterBelow2010} />
          <ToggleChip text="2011~2020" setToggle={SetIsFilterBetween20112020} />
          <ToggleChip text="2021~" setToggle={SetIsFilterUpper2021} />
        </div>
      </div>
      <div className="result-section">
        <MasonryView items={filteredResult} />
      </div>
    </div >
  );
};
