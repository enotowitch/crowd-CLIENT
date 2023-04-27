import React from "react"
import "./index.scss"
import "./media.scss"
import { LinkedinShareButton, LinkedinIcon } from "react-share";

export default function Share({ title }) {
	return (
		<LinkedinShareButton
			url={window.location.href}
			title={title}
			summary="Description of the shared page"
			source="Source of the content (e.g. your website or application name)"
		>
			<LinkedinIcon size="26" round="true"></LinkedinIcon>
		</LinkedinShareButton>
	)
}