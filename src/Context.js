import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider(props) {

	const [popupElement, popupElementSet] = useState()

	// ! RETURN
	return (
		<Context.Provider value={{
			popupElement, popupElementSet
		}}>

			{props.children}
		</Context.Provider>
	)
}

export { ContextProvider, Context }