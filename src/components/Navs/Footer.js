import React from "react"
import "./index.scss"
import "./media.scss"
import Logo from "./Logo"
import Button from "../FormElements/Button"
import Subscribe from "../Subscribe/Subscribe"
import IconText from "../Icons/IconText"

export default function Footer() {
	return (
		<footer className="f jcsb p2 g3">
			<div>
				<Logo />
				<div className="mt">
					Investissez en toute transparence
					grâce à notre expertise des plateformes de crowdfunding.
				</div>
				<Button text="Write Us" btnClassName="bgDark mt" path="/writeus" />
				<br />
				@ Copilot Funding 2022 | Tous droits réservés
			</div>

			<Subscribe />

			<div>
				<div className="title">Avertissement</div>
				<div className="mt posr">
					Les articles, reviews et autres contenus publiés sur ce site
					ne constituent en aucun cas des conseils d'investissement.
					Veuillez prendre toutes les précautions nécessaires
					avant de réaliser des investissements et
					faire vos propres recherches approfondies.
					<IconText text="CGU et Mentions légales >" className="brand mt2 wsnw ca" path="/legal" />
				</div>
			</div>
		</footer>
	)
}