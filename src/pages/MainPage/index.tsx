import { SearchButton, MainLogo, Chip, Input } from "../../components";
import "./style.css";

export const MainPage = (): JSX.Element => {
  return (
    <div className="mainpage">
      <MainLogo className="main-logo" />
      <div className="search-section">
        <SearchButton className="search-button" />
        <Input className="search-input" />
        <div className="chip-section">
          <Chip text="#무한도전" />
          <Chip text="#예능" />
          <Chip text="#뉴스" />
          <Chip text="#안녕히계세요여러분" />
        </div>
      </div>
    </div>
  );
};
