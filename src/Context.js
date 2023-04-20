import React, { useEffect, useState } from "react"
import * as api from "./api"

const Context = React.createContext()

function ContextProvider(props) {

	// ! RETURN
	return (
		<Context.Provider value={{

		}}>
			{props.children}
		</Context.Provider>
	)
}

export { ContextProvider, Context }