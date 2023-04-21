import useUser from "./useUser"

export default function useLogOut() {

	const [user, userSet] = useUser() // ! don't touch user

	function logOut() {
		userSet("")
		localStorage.removeItem("token")
		window.location.reload()
	}

	return (
		[logOut]
	)
}