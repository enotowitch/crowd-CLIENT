import useUser from "./useUser"

export default function useLogOut() {

	const { userSet } = useUser()

	function logOut() {
		userSet("")
		localStorage.removeItem("token")
		window.location.reload()
	}

	return (
		{ logOut }
	)
}