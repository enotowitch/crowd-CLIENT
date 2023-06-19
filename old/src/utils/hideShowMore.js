export default function hideShowMore(res) {
	// * hide/show showMore btn
	// !! ".showMore"
	if (res.length === 0) {
		document.querySelector(".showMore")?.classList.add("dn")
	} else {
		document.querySelector(".showMore")?.classList.remove("dn")
	}
}