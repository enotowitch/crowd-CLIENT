import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider(props) {

	const [popupElement, popupElementSet] = useState()
	const [showMenu, showMenuSet] = useState(false)
	const [showProfileMenu, showProfileMenuSet] = useState(false)

	// ! RETURN
	return (
		<Context.Provider value={{
			popupElement, popupElementSet,
			showMenu, showMenuSet,
			showProfileMenu, showProfileMenuSet
		}}>

			{props.children}

		</Context.Provider>
	)
}

export { ContextProvider, Context }