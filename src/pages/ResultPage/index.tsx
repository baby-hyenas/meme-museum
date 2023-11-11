import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchBar, MasonryView, ToggleChip } from "@/components";
import { ItemProps } from "@/types";
import "./style.css";
import metadata from "@/memedata"
import { addHash } from "@/utils/index";
import { includeByCho } from "@/utils";


export const ResultPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchResult, setSearchResult] = useState<ItemProps[]>([]);
  const [filteredResult, setFilteredResult] = useState<ItemProps[]>(searchResult);
  const [searchType, setSearchType] = useState<'title' | 'tag'>('title');
  const [resultType, setResultType] = useState<'ok' | 'ng-text' | 'ng-year'>('ng-text');
  const [isFilterBelow2010, setIsFilterBelow2010] = useState<boolean>(false);
  const [isFilterBetween20112020, setIsFilterBetween20112020] = useState<boolean>(false);
  const [isFilterUpper2021, setIsFilterUpper2021] = useState<boolean>(false);

  const navigateResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchKeyword) {
      return;
    } else {
      navigate(`/result?name=${searchKeyword}&type=text`);
    }
  }

  useEffect(() => {
    if (location.search) {
      const searchParams = new URLSearchParams(location.search);
      const name = searchParams.get('name') || '';
      const type = searchParams.get('type') || 'text';

      setSearchKeyword(name);
      let filteredData: ItemProps[] = [];
      switch (type) {
        case "tag":
          setSearchType('tag');
          filteredData = metadata.filter((item) =>
            item.tag1 === name ||
            item.tag2 === name);
          break;
        case "text":
        default:
          setSearchType('title');
          if(!name){
            filteredData = metadata
          }else if(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(name)){
            filteredData = metadata.filter((item) => includeByCho(name, item.title)
                                                  || includeByCho(name, item.tag1)
                                                  || includeByCho(name, item.tag2)
            );
          }else{
            filteredData = metadata.filter((item) => item.title.indexOf(name) >= 0
                                                  || item.tag1 === name 
                                                  || item.tag2 === name 
            )
          }
          console.log(filteredData)
          break;
      }

      setSearchResult(filteredData);
      setResultType(filteredData.length == 0 ? 'ng-text' : 'ok');
    }
  }, [location.search]);

  useEffect(() => {
    if (!isFilterBelow2010 && !isFilterBetween20112020 && !isFilterUpper2021) {
      setFilteredResult([...searchResult]);
      setResultType(searchResult.length == 0 ? 'ng-text' : 'ok');
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

    setFilteredResult([...newFilteredResult]);
    setResultType(newFilteredResult.length == 0 ? 'ng-year' : 'ok');

  }, [isFilterBelow2010, isFilterBetween20112020, isFilterUpper2021, searchResult]);

  return (
    <div className="resultpage">
      <div className={`search-section ${searchType == 'tag' ? 'center' : ''}`}>
        {(() => {
          switch (searchType) {
            case 'tag':
              return <div className="tag-section">
                <p>
                  <span className="bold">{addHash(searchKeyword)}</span> 검색결과
                </p>
              </div>;
            case 'title':
            default:
              return <SearchBar onSubmit={navigateResult} setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} placeholder="검색어를 입력해주세요." />;
          }
        })()}
        {(resultType == 'ok' || resultType == 'ng-year') && <div className="chip-section">
          <ToggleChip text="~2010" setToggle={setIsFilterBelow2010} />
          <ToggleChip text="2011~2020" setToggle={setIsFilterBetween20112020} />
          <ToggleChip text="2021~" setToggle={setIsFilterUpper2021} />
        </div>}
      </div>
      <div className="result-section">
        {(() => {
          switch (resultType) {
            case 'ng-year':
              return <img className="result-no-result" src="/assets/img-noyear-l.png" />;
            case 'ng-text':
              return <img className="result-no-result" src="/assets/img-noresult-l.png" />;
            case 'ok':
            default:
              return <MasonryView items={filteredResult} />;
          }
        })()}
      </div>
    </div >
  );
};
