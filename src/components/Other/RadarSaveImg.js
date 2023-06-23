import React from 'react'
import CompanyCard from "../Company/CompanyCard"

export default function RadarSaveImg({ obj }) {
	return (
		obj?.name &&
		<CompanyCard obj={obj} name={obj?.name} />
	)
}
