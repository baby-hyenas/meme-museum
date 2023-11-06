import { SearchButton, Input } from "../../components";
import "./style.css";

export const ResultPage = (): JSX.Element => {
  return (
    <div className="resultpage">
      <div className="search-section">
        <div className="search-button">
          <SearchButton />
        </div>
        <div className="search-input">
          <Input />
        </div>
      </div>
      <div className="result-section result-no-result" />
    </div >
  );
};
