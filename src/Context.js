import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider(props) {

	const [popupElement, popupElementSet] = useState()
	const [showMenu, showMenuSet] = useState(false)
	const [showProfileMenu, showProfileMenuSet] = useState(false)
	const [watchingArticle, watchingArticleSet] = useState("") // * article id user is watching now (for creating comments)

	// ! RETURN
	return (
		<Context.Provider value={{
			popupElement, popupElementSet,
			showMenu, showMenuSet,
			showProfileMenu, showProfileMenuSet,
			watchingArticle, watchingArticleSet
		}}>

			{props.children}

		</Context.Provider>
	)
}

export { ContextProvider, Context }