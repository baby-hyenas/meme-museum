import "./style.css";
import { useState } from "react"

type SmallLogoProps = {
  className: string,
}

export const SmallLogo = ({ className }: SmallLogoProps): JSX.Element => {
  const [property, setProperty] = useState<"small-logo-a-default" | "small-logo-a-hover">("small-logo-a-default");

  const handleMouseOver = () => {
    setProperty("small-logo-a-hover");
  };

  const handleMouseOut = () => {
    setProperty("small-logo-a-default");
  };

  return (
    <div className={`small-logo-a ${className} ${property}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {property === "small-logo-a-default" &&
        <img className="union" alt="Union" src="assets/logo-light.svg" />}
      {property === "small-logo-a-hover" && (
        <div className="overlay-group">
          <div className="me-me">
            Me
            <br />
            me
          </div>
        </div>
      )}
    </div>
  );
};
