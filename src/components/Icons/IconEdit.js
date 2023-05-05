import React from "react"
import "./index.scss"
import "./media.scss"
import edit from "../../img/edit.svg"

// * fn=editArticle/editCompany... MUST match route editArticle/editCompany..., cause route = `${fn}/${id}` => (`editArticle/${id}`)
export default function IconEdit({ id, fn }) { // id=articleId/CompanyId

	return (
		<img src={edit} onClick={() => window.location.href = `/${fn}/${id}`} />
	)
}