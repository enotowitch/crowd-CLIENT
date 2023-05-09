import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share"
import IconText from "../Icons/IconText"
import { Context } from "../../Context"
import parseImg from "../../utils/parseImg"
import InputButton from "../FormElements/InputButton"

export default function ShareArticle() {

	const url = window.location.href
	const { sharing } = useContext(Context)
	const { title, tag, value } = sharing
	const img = parseImg(value)

	return (
		<div className="share">

			<div className="title">{tag}</div>
			<img src={img} />
			<div className="title">Share: {title}</div>

			<div className="f jcsb">
				<TwitterShareButton
					url={url}
					title={title}
					hashtags={[tag]}
					style={{ background: "#00aced" }}
				>
					<IconText src="twitter" iconClassName="m0 c" />
				</TwitterShareButton>

				<FacebookShareButton
					url={url}
					quote={title}
					hashtag={tag}
					style={{ background: "#3b5998" }}
				>
					<IconText src="facebook" iconClassName="m0 c" />
				</FacebookShareButton>

				<LinkedinShareButton
					url={url}
					title={title}
					hashtag={tag}
					style={{ background: "#0072b1" }}
				>
					<IconText src="linkedin" iconClassName="m0 c" />
				</LinkedinShareButton>
			</div>

			<InputButton text="Copy" value={url} onClick={() => navigator.clipboard.writeText(url)} />
		</div>
	)
}