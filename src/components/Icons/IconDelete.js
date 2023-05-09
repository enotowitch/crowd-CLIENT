import React from "react"
import "./index.scss"
import "./media.scss"
import del from "../../img/del.svg"
import useCompany from "../../hooks/useCompany"
import useArticle from "../../hooks/useArticle"
import useBonus from "../../hooks/useBonus"

export default function IconDelete({ id, fn }) { // id=articleId/CompanyId; fn=deleteArticle/deleteCompany

	// * gray cause of eval
	const { deleteCompany } = useCompany()
	const { deleteArticle } = useArticle()
	const { deleteBonus } = useBonus()

	return (
		<img src={del} onClick={(e) => eval(`${fn}(id, e)`)} ignoreOutside="true" />
	)
}