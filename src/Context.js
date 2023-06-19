import React, { useEffect, useState } from "react"
import * as api from "./api"
import useAuthGoogle from "./hooks/useAuthGoogle"

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
	// ! user
	const [user, userSet] = useState(null)
	useEffect(() => {
		async function autoAuth() {
			const res = await api.autoAuth()
			res && userSet(res)
			!res && userSet(undefined)
		}
		autoAuth()
	}, [])

	// // authGoogle
	// const { getUser } = useAuthGoogle()
	// useEffect(() => { getUser() }, [])
	// ? user

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
			errorMsg, errorMsgSet,
			user, userSet
		}}>

			{props.children}

		</Context.Provider>
	)
}

export { ContextProvider, Context }