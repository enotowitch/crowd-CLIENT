import { useContext } from "react"
import { Context } from "../Context"

// * no user = display Login
export default function useNoUser() {

	const { popupElementSet } = useContext(Context)

	function noUser(serverResponse) {
		serverResponse.ok === false && popupElementSet("Login")
	}

	return (
		{ noUser }
	)
}