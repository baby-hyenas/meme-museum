import "./style.css";

type SmallLogoProps = {
  onClick?: () => void
}

export const SmallLogo = ({ onClick }: SmallLogoProps): JSX.Element => {
  return (
    <div className="small-logo-a" onClick={onClick} />
  );
};
