import React from "react"
import "./index.scss"
import "./media.scss"
import remove from "../../img/remove.svg"
import useInvestment from "../../hooks/useInvestment"

export default function IconRemove({ id, fn }) { // id=investmentId; fn=removeInvestment

	// * gray cause of eval
	const { removeInvestment } = useInvestment()

	return (
		<img src={remove} onClick={(e) => eval(`${fn}(id, e)`)} ignoreOutside="true" />
	)
}