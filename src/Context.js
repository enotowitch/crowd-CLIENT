import React, { useState } from "react"
import useUser from "./hooks/useUser"

const Context = React.createContext()

function ContextProvider(props) {

	const [popupElement, popupElementSet] = useState()
	const [user] = useUser()

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