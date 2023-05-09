import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share"
import IconText from "../Icons/IconText"
import { Context } from "../../Context"
import InputButton from "../FormElements/InputButton"
import Radar from "../Charts/Radar"

export default function ShareCompany() {

	const url = window.location.href
	const { sharing } = useContext(Context)
	const { name } = sharing

	return (
		<div className="share">

			<div className="title">{name}</div>
			<Radar obj={sharing} />
			<div className="title">Share: {name} review</div>

			<div className="f jcsb">
				<TwitterShareButton
					url={url}
					title={name}
					hashtags={[name]}
					style={{ background: "#00aced" }}
				>
					<IconText src="twitter" iconClassName="m0 c" />
				</TwitterShareButton>

				<FacebookShareButton
					url={url}
					quote={name}
					hashtag={name}
					style={{ background: "#3b5998" }}
				>
					<IconText src="facebook" iconClassName="m0 c" />
				</FacebookShareButton>

				<LinkedinShareButton
					url={url}
					title={name}
					hashtag={name}
					style={{ background: "#0072b1" }}
				>
					<IconText src="linkedin" iconClassName="m0 c" />
				</LinkedinShareButton>
			</div>

			<InputButton text="Copy" value={url} onClick={() => navigator.clipboard.writeText(url)} />
		</div>
	)
}