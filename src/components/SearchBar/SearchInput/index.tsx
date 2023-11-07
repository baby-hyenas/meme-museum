import "./style.css";

type SearchInputProps = {
  placeholder?: string
}

export const SearchInput = ({ placeholder }: SearchInputProps): JSX.Element => {
  return (
    <input className="search-input" placeholder={placeholder} type="search" />
  );
};
