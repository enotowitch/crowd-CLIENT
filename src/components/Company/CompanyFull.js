import React from "react"
import "./index.scss"
import "./media.scss"
import { useParams } from "react-router-dom"
import useCompanyFull from "../../hooks/useCompanyFull"
import InputButton from "../FormElements/InputButton"
import Markdown from "marked-react"
import Radar from "../Charts/Radar"
import RadarInfo from "../Charts/RadarInfo"
import Articles from "../Articles/Articles"
import Comments from "../Comments/Comments"
import Companies from "./Companies"
import IconText from "../Icons/IconText"
import IconShare from "../Icons/IconShare"
import { baseURL } from "../../consts"

export default function CompanyFull() {

	const { companyId } = useParams()
	const { company } = useCompanyFull(companyId)

	return (
		<div className="bigFlex">
			<div className="fc w100 f2">
				<section className="postFull mb">

					<div className="f jcsb">
						<IconText
							url={`${baseURL}/upload/${company?.img}`}
							text={company?.name}
							textClassName="title order1"
							iconClassName="icon_mid order2"
						/>

						<IconShare
							shareObj={company}
							src="link"
							textClassName="order1 mr"
							iconClassName="order2 icon_small4"
							sharePopup="ShareCompany"
							text={company?.name}
						/>
					</div>

					<InputButton text="visit" value={company?.link} path={company?.link} />

					{<Markdown>{company?.value}</Markdown>}

					<Radar obj={company} />
				</section>

				<RadarInfo obj={company} />
			</div>

			<div className="fc f1">
				<div className="rightBar ha">
					<Comments />
				</div>

				<div className="rightBar mt">
					<Articles />
				</div>

				<div className="rightBar mt">
					<Companies />
				</div>
			</div>
		</div>
	)
}