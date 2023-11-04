import { SearchButton, Chip, Input } from "../../components";
import "./style.css";

export const ResultPage = (): JSX.Element => {
  return (
    <div className="resultpage">
      <div className="search-section">
        <SearchButton className="search-button" />
        <Input className="search-input" />
        <Chip className="btn-chip-color-instance" text="#2000년대" />
        <Chip className="btn-chip-color-2" text="#2010년대" />
        <Chip className="btn-chip-color-3" text="#2020년대" />
      </div>
      <div className="result-section">
        <img src="assets/no-result.png"/>
      </div>
    </div>
  );
};
