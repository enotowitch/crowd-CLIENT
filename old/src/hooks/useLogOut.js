import useUser from "./useUser"
import { baseURL } from "../consts"

export default function useLogOut() {

	const { userSet } = useUser()

	function logOut() {
		window.open(`${baseURL}/auth/logout`) // authGoogle logOut
		userSet("")
		localStorage.removeItem("token")
		window.location.reload()
	}

	return (
		{ logOut }
	)
}