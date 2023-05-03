// * title MUST be upperCase
export default function prepareEdit(title) { // title=Article/Company
	const isEdit = window.location.pathname.includes("edit")
	const btnText = isEdit ? `Edit ${title}` : `Add ${title}`
	const fn = isEdit ? `edit${title}` : `add${title}`

	return { btnText, fn }
}