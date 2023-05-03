import React from "react"
import "./index.scss"
import "./media.scss"
import { useParams } from "react-router-dom"
import useCompanyFull from "../../hooks/useCompanyFull"
import InputButton from "../FormElements/InputButton"
import Markdown from "marked-react"
import Radar from "../Charts/Radar"
import RadarInfo from "../Charts/RadarInfo"

export default function CompanyFull() {

	const { companyId } = useParams()
	const { company } = useCompanyFull(companyId)

	return (
		<div className="fc w100">
			<section className="postFull mb">

				<div className="title">{company?.name}</div>
				<InputButton text="visit" value={company?.link} path={company?.link} />

				{<Markdown>{company?.value}</Markdown>}

				<Radar obj={company} />
			</section>

			<RadarInfo obj={company} />
		</div>
	)
}