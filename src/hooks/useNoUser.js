import { useContext } from "react"
import { Context } from "../Context"

// * no user = display Login
export default function useNoUser() {

	const { popupElementSet } = useContext(Context)

	// TODO: call noUserPopup
	function noUser(serverResponse) {
		!serverResponse.ok && popupElementSet("Login")
	}

	return (
		{ noUser }
	)
}