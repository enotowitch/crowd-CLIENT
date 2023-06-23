import React, { useContext, Suspense } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context"
import useOutside from "../../hooks/useOutside"

// * all popup `VariableComponents` must be in `Form folder`
export default function Popup() {

	const { popupElement } = useContext(Context)

	const VariableComponent = React.lazy(() => {
		return new Promise(resolve => {
			setTimeout(() => resolve(import(`../Forms/${popupElement}`)), 300);
		});
	});

	const { ref, isComponentVisible } = useOutside(true)

	return (
		popupElement &&

		<div ref={ref}>
			{isComponentVisible &&

				<div className="popup">

					<Suspense>
						<VariableComponent />
					</Suspense>

				</div>
			}
		</div>
	)
}