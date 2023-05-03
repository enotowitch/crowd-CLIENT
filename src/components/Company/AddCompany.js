import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import TextEditor from "../TextEditor/TextEditor"
import InputFile from "../FormElements/InputFile"
import { useParams } from "react-router-dom"
import useCompanyFull from "../../hooks/useCompanyFull"
import prepareEdit from "../../utils/prepareEdit"

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

				<Input name="Fiabilite" type="number" placeholder="Fiabilite" editValue={company?.Fiabilite} />
				<Input name="Localization" type="number" placeholder="Localization" editValue={company?.Localization} />
				<Input name="TVL" type="number" placeholder="TVL" editValue={company?.TVL} />
				<Input name="Impayes" type="number" placeholder="Impayes/Retards" editValue={company?.Impayes} />
				<Input name="Liquidity" type="number" placeholder="Liquidity" editValue={company?.Liquidity} />
				<Input name="Commnuaute" type="number" placeholder="Commnuaute" editValue={company?.Commnuaute} />
				<Input name="Frais" type="number" placeholder="Frais" editValue={company?.Frais} />
				<Input name="Rendement" type="number" placeholder="Rendement" editValue={company?.Rendement} />
			</TextEditor>
		</section>
	)
}