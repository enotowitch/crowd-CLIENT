import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import TextEditor from "../TextEditor/TextEditor"

export default function AddCompany() {
	return (
		<section className="w100">
			<TextEditor btnText="Add Company" fn="addCompany">
				<Input name="name" placeholder="company name" />
				<Input name="link" placeholder="company link" />

				<Input name="Fiabilite" type="number" placeholder="Fiabilite" />
				<Input name="Localization" type="number" placeholder="Localization" />
				<Input name="TVL" type="number" placeholder="TVL" />
				<Input name="Impayes" type="number" placeholder="Impayes/Retards" />
				<Input name="Liquidity" type="number" placeholder="Liquidity" />
				<Input name="Commnuaute" type="number" placeholder="Commnuaute" />
				<Input name="Frais" type="number" placeholder="Frais" />
				<Input name="Rendement" type="number" placeholder="Rendement" />
			</TextEditor>
		</section>
	)
}