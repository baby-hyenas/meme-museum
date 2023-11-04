import { SearchButton, MainLogo, Chip, Input } from "../../components";
import "./style.css";

export const MainPage = (): JSX.Element => {
  return (
    <div className="mainpage">
      <MainLogo className="main-logo" />
      <div className="search-section">
        <SearchButton className="search-button" />
        <Input className="search-input" />
        <Chip className="btn-chip-color-instance" text="#무한도전" />
        <Chip className="btn-chip-color-2" text="#예능" />
        <Chip className="btn-chip-color-3" text="#뉴스" />
        <Chip className="btn-chip-color-4" text="#안녕히계세요여러분" />
      </div>
    </div>
  );
};
