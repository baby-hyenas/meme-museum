import { SearchButton, MainLogo, Chip, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const MainPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="mainpage">
      <div className="main-logo">
        <MainLogo />
      </div>
      <div className="search-section">
        <div className="search-button">
          <SearchButton onClickedButton={() => navigate("/result")} />
        </div>
        <div className="search-input">
          <Input />
        </div>
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
