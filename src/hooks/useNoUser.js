import { useContext } from "react"
import { Context } from "../Context"

// * no user = display Login
export default function useNoUser() {

	const { popupElementSet } = useContext(Context)

	function noUserPopup(serverResponse) {
		popupElementSet("")
		!serverResponse.ok && popupElementSet("Login")
	}

	return (
		{ noUserPopup }
	)
}