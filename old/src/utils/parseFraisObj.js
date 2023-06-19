export default function parseFraisObj(form) {
	const formKeysArr = Object.keys(form)

	let FraisObj = {}
	formKeysArr.map((keyName, ind) => {
		if (keyName.includes("FraisLegend")) {
			const keyName = Object.values(form)[ind]
			const keyValue = Object.values(form)[ind + 1]

			if (!Number(keyName) && keyName) { // * don't add numbers and "" to FraisObj
				FraisObj = { ...FraisObj, [keyName]: keyValue } // {"name 1": "value 1","name 2": "value 2"}
			}
		}
	})

	return { FraisObj }
}