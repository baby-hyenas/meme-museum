import { SearchBar } from "../../components";
import "./style.css";

export const ResultPage = (): JSX.Element => {
  return (
    <div className="resultpage">
      <div className="search-section">
        <SearchBar placeholder="검색어를 입력하세요." />
      </div>
      <div className="result-section result-no-result" />
    </div >
  );
};
