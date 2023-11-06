import "./style.css";

type SmallLogoProps = {
  onClickLogo: () => void
}

export const SmallLogo = ({ onClickLogo }: SmallLogoProps): JSX.Element => {
  return (
    <>
      <div className="small-logo-a" onClick={onClickLogo} />
    </>
  );
};
