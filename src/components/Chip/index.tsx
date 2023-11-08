import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

type ChipProps = {
	text: string
}

export const Chip: React.FC<ChipProps> = ({text}: ChipProps) => {
  const navigate = useNavigate();

  const navigateResult = ()=>{
    navigate(`/result?name=${text}&type=tag`)
  }

	return (
		<div className="chip-button" onClick={navigateResult}>
			<div className="text-wrapper">{text}</div>
		</div>
	);
};