import React, { useEffect, useState } from "react"
import * as api from "./api"

const Context = React.createContext()

function ContextProvider(props) {

	const [articles, articlesSet] = useState()

	useEffect(() => {
		async function getArticles() {
			const res = await api.getArticles()
			articlesSet(res)
		}

		getArticles()
	}, [])

	// ! RETURN
	return (
		<Context.Provider value={{
			articles, articlesSet
		}}>
			{props.children}
		</Context.Provider>
	)
}

export { ContextProvider, Context }