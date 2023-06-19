import { useContext } from "react";
import IconTextNav from "../Icons/IconTextNav";
import { Context } from "../../Context";

export default function NavAdmin() {

	const { user } = useContext(Context)

	return (
		(user?.isAdmin || user?.isAuthor) &&
		<nav>
			<IconTextNav src="add-article" path="add-article" text="Add Article" />
			<IconTextNav src="add-company" path="add-company" text="Add Company" />
			<IconTextNav src="add-bonus" path="add-bonus" text="Add Bonus" />
		</nav>
	)
}