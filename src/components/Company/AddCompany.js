import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import TextEditor from "../TextEditor/TextEditor"
import InputFile from "../FormElements/InputFile"
import { useParams } from "react-router-dom"
import useCompanyFull from "../../hooks/useCompanyFull"
import prepareEdit from "../../utils/prepareEdit"
import SelectMany from "../FormElements/SelectMany"
import countries from "../../utils/countries"
import Frais from "./Frais"

export default function AddCompany() {

	const { companyId } = useParams()
	const { company } = useCompanyFull(companyId)

	const { btnText, fn } = prepareEdit("Company")

	return (
		<section className="w100">
			<TextEditor btnText={btnText} fn={fn} editValue={company?.value}>

				<div className="if">
					<InputFile editValue={company?.img} />
					<Input name="name" placeholder="company name" className="w100" editValue={company?.name} />
				</div>

				<Input name="link" placeholder="company link" editValue={company?.link} />

				<Input name="Fiabilite" type="number" placeholder="Fiabilite" editValue={company?.Fiabilite} label="Fiabilite" />

				<Input name="Localization" type="number" placeholder="Localization" editValue={company?.Localization} label="Localization" />
				<SelectMany name="LocalizationArray" options={countries} editValue={company?.LocalizationArray} />

				<Input name="TVL" type="number" placeholder="TVL" editValue={company?.TVL} label="TVL" />
				<Input name="Impayes" type="number" placeholder="Impayes/Retards" editValue={company?.Impayes} label="Impayes" />
				<Input name="Liquidity" type="number" placeholder="Liquidity" editValue={company?.Liquidity} label="Liquidity" />
				<Input name="Commnuaute" type="number" placeholder="Commnuaute" editValue={company?.Commnuaute} label="Commnuaute" />

				<Frais obj={company} />

				<Input name="Rendement" type="number" placeholder="Rendement" editValue={company?.Rendement} label="Rendement" />
			</TextEditor>
		</section>
	)
}