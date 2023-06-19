import React from "react"
import "./index.scss"
import "./media.scss"
import Markdown from "../Other/Markdown"

export default function Overview({ obj }) { // obj=company
	return (
		<>
			{obj?.value &&
				<section className="overview">
					<div className="title">Overview</div>
					{/* <pre> */}
					<Markdown value={obj?.value} />
					{/* </pre> */}
				</section>
			}
		</>
	)
}