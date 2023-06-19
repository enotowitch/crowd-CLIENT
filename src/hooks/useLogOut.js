import { baseURL } from "../consts"
import { useContext } from "react"
import { Context } from "../Context"

export default function useLogOut() {

	const { userSet } = useContext(Context)

	function logOut() {
		// window.open(`${baseURL}/auth/logout`) // authGoogle logOut
		userSet("")
		localStorage.removeItem("token")
		window.location.reload()
	}

	return (
		{ logOut }
	)
}