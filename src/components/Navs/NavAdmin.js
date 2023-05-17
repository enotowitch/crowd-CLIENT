import useUser from "../../hooks/useUser";
import IconTextNav from "../Icons/IconTextNav";

export default function NavAdmin() {

	const { user } = useUser()

	return (
		user?.isAdmin &&
		<nav>
			<IconTextNav src="add-article" path="add-article" text="Add Article" />
			<IconTextNav src="add-company" path="add-company" text="Add Company" />
			<IconTextNav src="add-bonus" path="add-bonus" text="Add Bonus" />
		</nav>
	)
}