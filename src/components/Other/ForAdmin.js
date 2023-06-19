import { useContext } from "react"
import { Context } from "../../Context"

// * icons ForAdmin or any children
export default function ForAdmin({ children, postOwner }) {

	const { user } = useContext(Context)

	return (
		<>
			{user?._id === postOwner?._id && children}
			{user?.isAdmin && children}
		</>
	)
}