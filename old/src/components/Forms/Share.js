import React from "react"
import "./index.scss"
import "./media.scss"
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share"
import IconText from "../Icons/IconText"
import InputButton from "../FormElements/InputButton"

export default function Share({ topTitle, bottomTitle, children, hashtag }) { // children=img/Radar

	const url = window.location.href

	return (
		<div className="share">

			<div className="title">{topTitle}</div>
			{children}
			<div className="title">Share: {bottomTitle}</div>

			<div className="f jcsb">
				<TwitterShareButton
					url={url}
					title={bottomTitle}
					hashtags={[hashtag]}
					style={{ background: "#00aced" }}
				>
					<IconText src="twitter" iconClassName="m0 c" />
				</TwitterShareButton>

				<FacebookShareButton
					url={url}
					quote={bottomTitle}
					hashtag={hashtag}
					style={{ background: "#3b5998" }}
				>
					<IconText src="facebook" iconClassName="m0 c" />
				</FacebookShareButton>

				<LinkedinShareButton
					url={url}
					title={bottomTitle}
					hashtag={hashtag}
					style={{ background: "#0072b1" }}
				>
					<IconText src="linkedin" iconClassName="m0 c" />
				</LinkedinShareButton>
			</div>

			<InputButton text="Copy" value={url} onClick={() => navigator.clipboard.writeText(url)} />
		</div>
	)
}