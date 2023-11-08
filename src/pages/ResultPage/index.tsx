import React, {useState} from "react";
import { SearchBar } from "../../components";
import { useNavigate, useParams} from "react-router-dom";
import "./style.css";


export const ResultPage = (): JSX.Element => {

  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const navigateResult = () => {
    navigate(`/result?name=${searchKeyword}`)
  }


  return (
    <div className="resultpage">
      <div className="search-section">
        <SearchBar onSubmit={navigateResult} setSearchKeyword = {setSearchKeyword} searchKeyword = {searchKeyword} placeholder="검색어를 입력해주세요." />
      </div>
      <div className="result-section result-no-result" />
    </div >
  );
};
