import React from "react"
import "./index.scss"
import "./media.scss"
import { useParams } from "react-router-dom"
import useCompanyFull from "../../hooks/useCompanyFull"
import InputButton from "../FormElements/InputButton"
import Radar from "../Charts/Radar"
import RadarInfo from "../Charts/RadarInfo"
import Articles from "../Articles/Articles"
import Comments from "../Comments/Comments"
import Companies from "./Companies"
import IconText from "../Icons/IconText"
import IconShare from "../Icons/IconShare"
import { baseURL } from "../../consts"
import BonusOne from "../Bonus/BonusOne"
import Recommend from "../Other/Recommend"
import Trustpilot from "../Trustpilot/Trustpilot"
import Description from "./Description"
import Overview from "./Overview"

export default function CompanyFull() {

	const { companyId } = useParams()
	const { company } = useCompanyFull(companyId)

	return (
		<div className="bigFlex postFull__wrap w100 f3">
			<div className="fc w100 f3">
				<section className="postFull mb">

					<div className="f jcsb">
						<IconText
							url={`${baseURL}/upload/${company?.img}`}
							// text={company?.name}
							textClassName="title order1"
							iconClassName="icon_mid order2"
						/>

						<IconShare
							shareObj={company}
							src="share"
							textClassName="order1 mr"
							iconClassName="order2 icon_small4 hc"
							sharePopup="ShareCompany"
							text={company?.name}
						/>
					</div>

					{company?.link && <InputButton text="visit" newText="visited" value={company?.link} path={company?.link} target="_blank" />}

					<Description obj={company} />

					<Radar obj={company} />

					<Trustpilot obj={company} />
				</section>

				<Overview obj={company} />

				<RadarInfo obj={company} />
			</div>

			<div className="fc">
				<div className="rightBar">
					<BonusOne id={companyId} />
				</div>

				<div className="rightBar ha">
					<Comments postType="company" type="recommend">
						<Recommend />
					</Comments>
				</div>

				<div className="rightBar mt">
					<Articles skip={4} />
				</div>

				<div className="rightBar mt">
					<Companies skip={4} />
				</div>
			</div>
		</div>
	)
}