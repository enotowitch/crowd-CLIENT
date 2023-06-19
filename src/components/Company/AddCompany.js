import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import TextEditor from "../TextEditor/TextEditor"
import InputFileInput from "../FormElements/InputFileInput"
import { useParams } from "react-router-dom"
import useCompanyFull from "../../hooks/useCompanyFull"
import prepareEdit from "../../utils/prepareEdit"
import SelectMany from "../FormElements/SelectMany"
import Checkbox from "../FormElements/Checkbox"
import countries from "../../utils/countries"
import Frais from "./Frais"
import Textarea from "../FormElements/Textarea"
import Checkboxes from "../FormElements/Checkboxes"

export default function AddCompany() {

	const { companyId } = useParams()
	const { company } = useCompanyFull(companyId)

	const { btnText, fn } = prepareEdit("Company")

	return (
		<section className="w100 addPost">
			<div className="title mb2">Add Company</div>
			<TextEditor btnText={btnText} fn={fn} editValue={company?.value}>

				<InputFileInput obj={company} />

				<Input name="link" placeholder="company link" editValue={company?.link} />

				<Textarea name="description" placeholder="Description Text" editValue={company?.description} label="Description" />
				<Input name="ticketMinimum" type="number" placeholder="Ticket Minimum (€)" editValue={company?.ticketMinimum} label="Ticket Minimum (€)" />
				<Input name="yearOfCreation" type="number" placeholder="Year Of Creation" editValue={company?.yearOfCreation} label="Year Of Creation" />

				<Input name="trustpilotRating" type="number" placeholder="Trustpilot Rating: e.g 4.33" editValue={company?.trustpilotRating} label="Trustpilot" />
				<Input name="trustpilotVoted" type="number" placeholder="Trustpilot Voted: e.g 1202" editValue={company?.trustpilotVoted} />

				<Input name="Fiabilite" type="number" placeholder="Fiabilite" editValue={company?.Fiabilite} label="Fiabilite" />
				<Checkboxes names={["AMF", "FPF", "FPCV", "Orias"]} />
				<Textarea name="FiabiliteText" placeholder="Fiabilite text" editValue={company?.FiabiliteText} label="Fiabilite text" />

				<Input name="Localization" type="number" placeholder="Localization" editValue={company?.Localization} label="Localization" />
				<SelectMany name="LocalizationArray" options={countries} editValue={company?.LocalizationArray} placeholder="choose country" />
				<Textarea name="LocalizationText" placeholder="Localization text" editValue={company?.LocalizationText} label="Localization text" />

				<Input name="TVL" type="number" placeholder="TVL" editValue={company?.TVL} label="TVL" />
				<Textarea name="TVLText" placeholder="TVL text" editValue={company?.TVLText} label="TVL text" />

				<Input name="Impayes" type="number" placeholder="Impayes/Retards" editValue={company?.Impayes} label="Impayes" />
				<Textarea name="ImpayesText" placeholder="Impayes text" editValue={company?.ImpayesText} label="Impayes text" />

				<Input name="Liquidity" type="number" placeholder="Liquidity" editValue={company?.Liquidity} label="Liquidity" />
				<Checkbox name="Secondary Step" />
				<Textarea name="LiquidityText" placeholder="Liquidity text" editValue={company?.LiquidityText} label="Liquidity text" />

				<Input name="Commnuaute" type="number" placeholder="Commnuaute" editValue={company?.Commnuaute} label="Commnuaute" />
				<Textarea name="CommnuauteText" placeholder="Commnuaute text" editValue={company?.CommnuauteText} label="Commnuaute text" />

				<Frais obj={company} />

				<Input name="Rendement" type="number" placeholder="Rendement" editValue={company?.Rendement} label="Rendement" />
				<Textarea name="RendementText" placeholder="Rendement text" editValue={company?.RendementText} label="Rendement text" />
			</TextEditor>
		</section>
	)
}