import React, { useState } from "react"
import useUser from "./hooks/useUser"

const Context = React.createContext()

function ContextProvider(props) {

	const [popupElement, popupElementSet] = useState() // Login/Register/Alert...
	const [showMenu, showMenuSet] = useState(false)
	const [showProfileMenu, showProfileMenuSet] = useState(false)
	const [watchingPost, watchingPostSet] = useState("") // * article id user is watching now (for creating comments)
	const [modalText, modalTextSet] = useState("") // for Alert & other modals
	const [visitedPage, visitedPageSet] = useState("") // for coloring icons depending on page visited
	const [sharing, sharingSet] = useState("") // for sharing: article/etc...
	const [errorMsg, errorMsgSet] = useState("")

	// ! RETURN
	return (
		<Context.Provider value={{
			popupElement, popupElementSet,
			showMenu, showMenuSet,
			showProfileMenu, showProfileMenuSet,
			watchingPost, watchingPostSet,
			modalText, modalTextSet,
			visitedPage, visitedPageSet,
			sharing, sharingSet,
			user, userSet,
			errorMsg, errorMsgSet
		}}>

			{props.children}

		</Context.Provider>
	)
}

export { ContextProvider, Context }