export default function parseForm(e) { // e=event from onSubmit (html form)

	let form = {} // {"any field 1": "@","any field 2": "123","any field 3": "abc"}

	// try-catch(e.target || e)
	try {
		// put all `inputs` values to "form"
		e.target.querySelectorAll("input, select, textarea").forEach(each => {
			// !! each.name != ""
			if (each.name) {
				// !! checked
				form = { ...form, [each.name]: each.checked || each.value }
			}
		})
	} catch (error) {
		e.querySelectorAll("input, select, textarea").forEach(each => {
			// !! each.name != ""
			if (each.name) {
				// !! checked
				form = { ...form, [each.name]: each.checked || each.value }
			}
		})
	}

	return (
		{ form }
	)
}