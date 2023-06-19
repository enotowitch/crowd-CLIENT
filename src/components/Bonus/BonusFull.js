import React from "react"
import "./index.scss"
import "./media.scss"
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";
import Tags from "../FormElements/Tags";
import Button from "../FormElements/Button";
import useBonusFull from "../../hooks/useBonusFull";
import parseTags from "../../utils/parseTags";
import IconShare from "../Icons/IconShare"
import IconText from "../Icons/IconText";
import IconLike from "../Icons/IconLike";
import { baseURL } from "../../consts";
import Markdown from "../Other/Markdown";

export default function BonusFull() {

	const { bonusId } = useParams()
	const { bonus } = useBonusFull(bonusId)

	// ! NOT FOR PRODUCTION; for portfolio: show images from FRONT; BACK is free => images disappear
	let url = `${baseURL}/upload/${bonus?.img}`
	const frontImgs = ["october", "raizers", "heavyFinance", "lumo", "monego", "fundimmo", "clubfunding", "baltis"]
	const imgName = bonus?.img.replace(/.\png/, "")
	if (frontImgs.includes(imgName)) {
		url = require(`../../img/${imgName}.png`)
	}
	// ? NOT FOR PRODUCTION

	return (
		<div className="fc w100 postFull__wrap">
			<section className="w100 mb">
				<div className="postFull w80 mb c">
					<div className="title2">Bonus</div>
					<IconText url={url} iconClassName="icon_mid ml05 m0" />
					<div className="title f aic">
						<span>Get your bonus for {bonus?.name}</span>
					</div>
					<Tags arr={parseTags(bonus?.tags)} />

					<div>{bonus?.text}</div>
					<Markdown value={bonus?.value} />
					<Button text="Get The Bonus" path={bonus?.link} btnClassName="c mb" />

					<div className="f g jcfe">
						<IconLike
							id={bonusId}
							text={bonus?.likes.length}
							likes={bonus?.likes.length}
							likePostType="bonus"
						/>
						<IconShare
							shareObj={bonus}
							src="share"
							iconClassName="icon_small2 mr05 icon_share"
							sharePopup="ShareBonus"
							text="share"
						/>
					</div>
				</div>

			</section>

			<Comments postType="bonus" className="w80 c" />

		</div>
	)
}