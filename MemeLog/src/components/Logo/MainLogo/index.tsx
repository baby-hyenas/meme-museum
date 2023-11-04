import "./style.css";

type MainLogoProps = {
  className: string,
}

export const MainLogo = ({ className }: MainLogoProps): JSX.Element => {
  return (
    <div className={`logo-a ${className}`}>
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">MemeLog</div>
          <img className="element" alt="Element" src="assets/2-2.png" />
          <img className="img" alt="Group" src="assets/group-869.png" />
          <img className="union" alt="Union" src="assets/logo.svg" />
        </div>
      </div>
    </div>
  );
};
