import React, { useContext, Suspense } from "react"
import "./index.scss"
import { Context } from "../../Context"

export default function Popup() {

	const { popupElement } = useContext(Context)
	const VariableComponent = React.lazy(() => import(`../Forms/${popupElement}`))

	return (
		popupElement &&
		<div className="popup">

			<Suspense fallback={<div>Loading...</div>}>
				<VariableComponent />
			</Suspense>

		</div>
	)
}