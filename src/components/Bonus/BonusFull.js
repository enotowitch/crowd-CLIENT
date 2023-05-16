import React from "react"
import "./index.scss"
import "./media.scss"
import Markdown from "marked-react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";
import Tags from "../FormElements/Tags";
import Button from "../FormElements/Button";
import useBonusFull from "../../hooks/useBonusFull";
import parseTags from "../../utils/parseTags";

export default function BonusFull() {

	const { bonusId } = useParams()
	const { bonus } = useBonusFull(bonusId)

	return (
		<div className="fc w100">
			<section className="postFull mb">
				<div className="title2">Bonus</div>
				<div className="title">Get your bonus for {bonus?.name}</div>
				{bonus?.tags && <Tags arr={parseTags(bonus?.tags)} />}

				<div>{bonus?.text}</div>
				{<Markdown>{bonus?.value}</Markdown>}
				<Button text="Get The Bonus" path={bonus?.link} btnClassName="c mb" />
			</section>

			<Comments />
		</div>
	)
}