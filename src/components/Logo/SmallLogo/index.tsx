import "./style.css";
import { useState } from "react"

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
