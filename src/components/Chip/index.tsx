import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

type ChipProps = {
	text: string,
	theme?: "color"|"gray"
}

export const Chip: React.FC<ChipProps> = ({text, theme}: ChipProps) => {
  const navigate = useNavigate();

  const navigateResult = ()=>{
    navigate(`/result?name=${text}&type=tag`)
  }

	return (
		<div className={`chip-button ${theme ??= "color"}`} onClick={navigateResult}>
			<div className="text-wrapper">{text}</div>
		</div>
	);
};