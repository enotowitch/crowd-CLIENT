import React, { useState } from "react"
import Select from "../FormElements/Select"
import IconText from "../Icons/IconText"

export default function Recommend() {

	const [recommend, recommendSet] = useState("")

	function onClick(yesOrNo) {
		recommendSet(yesOrNo)
	}

	return (
		<>
			<Select hidden name="recommend" options={["", "yes", "no"]} editValue={recommend} />
			<div className="fcc">
				{recommend === "yes" ?
					<IconText src="yes" onClick={() => onClick("yes")} iconClassName="icon_mid ht" />
					:
					<IconText src="yesGray" onClick={() => onClick("yes")} iconClassName="icon_mid ht" />
				}
				{recommend === "no" ?
					<IconText src="no" onClick={() => onClick("no")} iconClassName="icon_mid ht" />
					:
					<IconText src="noGray" onClick={() => onClick("no")} iconClassName="icon_mid ht" />
				}
			</div>
		</>
	)
}