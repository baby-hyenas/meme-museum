import { SearchButton, Chip, Input } from "../../components";
import "./style.css";

export const ResultPage = (): JSX.Element => {
  return (
    <div className="resultpage">
      <div className="search-section">
        <div className="search-button">
          <SearchButton />
        </div>
        <Input className="search-input" />
        <div className="chip-section">
          <Chip text="#2000년대" />
          <Chip text="#2010년대" />
          <Chip text="#2020년대" />
        </div>
      </div>
      <div className="result-section result-no-result">
      </div>
    </div>
  );
};
