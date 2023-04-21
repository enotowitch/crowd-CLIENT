import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider(props) {

	const [popupElement, popupElementSet] = useState()
	const [showMenu, showMenuSet] = useState()

	// ! RETURN
	return (
		<Context.Provider value={{
			popupElement, popupElementSet,
			showMenu, showMenuSet
		}}>

			{props.children}

		</Context.Provider>
	)
}

export { ContextProvider, Context }