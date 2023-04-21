import React, { useEffect, useState } from "react"
import * as api from "./api"

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