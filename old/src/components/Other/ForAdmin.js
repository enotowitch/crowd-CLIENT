import useUser from "../../hooks/useUser"

export default function ForAdmin({ children }) {

	const { user } = useUser()

	return (
		user?.isAdmin && children
	)
}