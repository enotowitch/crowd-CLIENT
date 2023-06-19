import React from "react"
import "./index.scss"
import "./media.scss"
import del from "../../img/del.svg"
import useCompany from "../../hooks/useCompany"
import useArticle from "../../hooks/useArticle"
import useBonus from "../../hooks/useBonus"
import useInvestment from "../../hooks/useInvestment"

export default function IconDelete({ id, fn }) { // id=articleId/CompanyId; fn=deleteArticle/deleteCompany

	// * gray cause of eval
	const { deleteCompany } = useCompany()
	const { deleteArticle } = useArticle()
	const { deleteBonus } = useBonus()
	const { deleteInvestment } = useInvestment()

	return (
		<img src={del} onClick={(e) => eval(`${fn}(id, e)`)} ignoreOutside="true" />
	)
}