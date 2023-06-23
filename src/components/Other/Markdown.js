import React from "react"
import Markdown from "marked-react"

export default function Markdown_({ value }) {
	return (
		<pre>
			<Markdown>{value}</Markdown>
		</pre>
	)
}