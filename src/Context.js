import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider(props) {

	const [popupElement, popupElementSet] = useState() // Login/Register/Alert...
	const [showMenu, showMenuSet] = useState(false)
	const [showProfileMenu, showProfileMenuSet] = useState(false)
	const [watchingPost, watchingPostSet] = useState("") // * article id user is watching now (for creating comments)
	const [modalText, modalTextSet] = useState("") // for Alert & other modals
	const [visitedPage, visitedPageSet] = useState("") // for coloring icons depending on page visited
	const [sharing, sharingSet] = useState("") // for sharing: article/etc...

	// ! RETURN
	return (
		<Context.Provider value={{
			popupElement, popupElementSet,
			showMenu, showMenuSet,
			showProfileMenu, showProfileMenuSet,
			watchingPost, watchingPostSet,
			modalText, modalTextSet,
			visitedPage, visitedPageSet,
			sharing, sharingSet
		}}>

			{props.children}

		</Context.Provider>
	)
}

export { ContextProvider, Context }