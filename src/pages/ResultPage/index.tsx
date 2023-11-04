import { SearchButton, Chip, Input } from "../../components";
import "./style.css";

export const ResultPage = (): JSX.Element => {
  return (
    <div className="resultpage">
      <div className="search-section">
        <SearchButton className="search-button" />
        <Input className="search-input" />
        <div className="chip-section">
          <Chip text="#2000년대" />
          <Chip text="#2010년대" />
          <Chip text="#2020년대" />
        </div>  
      </div>
      <div className="result-section">
        <img src="assets/no-result.png"/>
      </div>
    </div>
  );
};
