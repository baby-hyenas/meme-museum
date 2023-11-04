import "./style.css";

type InputProps = {
  className: string,
}

export const Input = ({className}: InputProps): JSX.Element => {
  return (
    <input className={`search-input-default ${className}`} placeholder="검색어를 입력해주세요." type="search"></input>
    // <div className={`search-input-default ${className}`}>
    //   <div className="input-line" />
    //   <div className="text-wrapper">asdf</div>
    // </div>
  );
};
